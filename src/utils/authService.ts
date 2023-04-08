import { FirebaseApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";
import User from "scripts/User";

const authService = async (app: FirebaseApp) => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Sign up with email and password
  const signUp = async (
    email: string,
    password: string  ,
    firstName: string,
    lastName: string
  ): Promise<User> => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const userId = result.user.uid;

    // Store additional user data in Firestore
    const usersDocRef = doc(db, "users/" + userId);
    await setDoc(usersDocRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      wishlist: {},
      cart: {},
    });

    return User(firstName + " " + lastName, password, email, [], [], true);
  };

  // Sign in with email and password
  const signIn = async (email: string, password: string): Promise<User> => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userId = result.user.uid;

    const usersDocRef = doc(db, "users/" + userId);
    const data: {
      firstName?: string;
      lastName?: string;
      email?: string;
      wishlist?: {};
      cart?: {};
    } = (await getDoc(usersDocRef)).data();

    return User(
      data.firstName + " " + data.lastName,
      password,
      email,
      data.wishlist,
      data.cart,
      true
    );
  };

  return {
    signUp,
    signIn,
  }
};

export default authService;
