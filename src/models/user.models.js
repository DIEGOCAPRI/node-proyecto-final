import bcrypt from "bcryptjs";
import {db} from "../models/firebase.js";
import { collection, getDocs,addDoc } from "firebase/firestore";


const userCollection = collection(db, "users");

export const createUser = async (email, password) => {
    try {
        const snapshot = await getDocs(userCollection);
        const existeUser = snapshot.docs.find((doc)=>doc.data().email == email);

        if(existeUser){
            return null;
        }
    const passwordhash = await bcrypt.hash(password, 10);

    const user = {
        email,
        password: passwordhash
    }

    await addDoc(userCollection, user);

    return {email};
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}