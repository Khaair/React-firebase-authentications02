import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const easyapplyCollectionRef = collection(db, "Easy-Apply");

class EasyApplyDataService {
    addApplys = (newApply) => {
        return addDoc(easyapplyCollectionRef, newApply);
      };

      getAllApplys = () => {
        return getDocs(easyapplyCollectionRef);
      };

      deleteEasyapply = (id) => {
        const userDoc = doc(db, "Easy-Apply", id);
        return deleteDoc(userDoc);
      };

      getUser = (id) => {
        const userDoc = doc(db, "Easy-Apply", id);
        return getDoc(userDoc);
      };

      updateUser = (id, updatedUser) => {
        const userDoc = doc(db, "Easy-Apply", id);
        return updateDoc(userDoc, updatedUser);
      };
}

export default new EasyApplyDataService();