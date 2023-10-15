import { addDoc, collection, doc, deleteDoc,} from "firebase/firestore";

import { db } from "../../init_firebase/firebase";

export const addCRUD = async( modelObject, tabla) => {
  const colectionRef = collection(db, tabla);
    try {
        await addDoc(colectionRef, modelObject);
      } catch (error) {
        console.log(error);
      }
}

export const deleteCRUD = async (id, table) => {
  console.log("deleting", id, table);
   try {
       const docRef = doc(db, table, id);
     if (window.confirm("Estas seguro que deseas borrar esta estacion?")) {
       await deleteDoc(docRef);
    }
   } catch (error) {
     console.log(error);
   }
};


