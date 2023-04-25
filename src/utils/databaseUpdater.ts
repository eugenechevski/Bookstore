import { Auth } from "firebase/auth";
import {
  Firestore,
  doc,
  updateDoc,
  DocumentReference,
} from "firebase/firestore";

// Updates the database whenever a user is updated.
const databaseUpdater = (db: Firestore, auth: Auth) => {
  let userId: string | null;
  let userDoc: DocumentReference | null;

  const updateUserDoc = () => {
    userId = auth.currentUser?.uid;
    userDoc = userId ? doc(db, "users", userId) : null;
  };

  const updateCart = async (cart: UserCart) => {
    updateUserDoc();

    await updateDoc(userDoc, { cart: cart });
  };

  const updateWishlist = async (wishlist: UserWishList) => {
    updateUserDoc();

    await updateDoc(userDoc, { wishlist: wishlist });
  };

  return { updateCart, updateWishlist };
};

export default databaseUpdater;
