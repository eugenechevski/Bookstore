import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, Firestore } from "firebase/firestore";
import console from "console-browserify";

// Sign up with email and password
const signUp = async (
  db: Firestore,
  auth: Auth,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
): Promise<UserData | { errorMessage: string }> => {
  // Validate the input
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    email.length === 0 ||
    password.length === 0
  ) {
    return { errorMessage: "Wrong input." };
  }

  try {
    // Create a new user with the specified email and password
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const userId = result.user.uid;

    // Store additional user data in Firestore
    const usersDocRef = doc(db, "users/" + userId);
    const userData: UserData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      wishlist: {},
      cart: {},
    };

    // Set the user data in Firestore
    await setDoc(usersDocRef, userData);

    // Return the user data
    return userData;
  } catch (error) {
    // Handle errors that occur during sign up
    console.error("Sign up error:", error.code, error.message);

    return { errorMessage: "Couldn't create the user." };
  }
};

// Sign in with email and password
const signIn = async (
  db: Firestore,
  auth: Auth,
  email: string,
  password: string
): Promise<UserData | { errorMessage: string }> => {
  // Validate the input
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    email.length === 0 ||
    password.length === 0
  ) {
    return { errorMessage: "Wrong input." };
  }

  try {
    // Sign in with the specified email and password
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userId = result.user.uid;

    // Get the user data from Firestore
    const usersDocRef = doc(db, "users/" + userId);
    const userData = (await getDoc(usersDocRef)).data();

    // Convert the timestamp to milliseconds
    Object.keys(userData.wishlist).forEach((title) => {
      let { seconds } = userData.wishlist[title].timestamp;
      userData.wishlist[title].timestamp = (seconds as number) * 1000;
    });

    // Convert the timestamp to milliseconds
    Object.keys(userData.cart).forEach((title) => {
      let { seconds } = userData.cart[title].timestamp;
      userData.cart[title].timestamp = (seconds as number) * 1000;
    });

    // Return the user data
    return userData as UserData;
  } catch (error) {
    // Handle errors that occur during sign in
    console.error("Sign in error:", error.code, error.message);

    return { errorMessage: "Couldn't find the user." };
  }
};

export { signIn, signUp };
