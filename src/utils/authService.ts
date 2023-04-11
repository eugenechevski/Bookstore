import { FirebaseApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";
import console from "console-browserify";

const authService = async (app: FirebaseApp) => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Sign up with email and password
  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
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
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
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
      
      return { errorMessage: "Couldn't create the user."}
    }
  };

  // Sign in with email and password
  const signIn = async (
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
      const userData = (await getDoc(usersDocRef)).data() as UserData;

      // Return the user data
      return userData;
    } catch (error) {
      // Handle errors that occur during sign in
      console.error("Sign in error:", error.code, error.message);

      return { errorMessage: "Couldn't find the user." };
    }
  };

  return {
    signUp,
    signIn,
  };
};

export default authService;
