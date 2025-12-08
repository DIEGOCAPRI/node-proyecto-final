import {db} from "../models/firebase.js";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getProducts = async()=>{
    try{
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc)=>({id : doc.id, ...doc.data()}))
    }
    catch (error){
        console.log(error);
    }
}