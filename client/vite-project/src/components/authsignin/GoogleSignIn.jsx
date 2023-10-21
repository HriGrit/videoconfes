import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebaseauth'
import "./css/auther.css"
const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((err) => console.log(err))
}