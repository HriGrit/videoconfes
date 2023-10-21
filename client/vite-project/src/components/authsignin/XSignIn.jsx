import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebaseauth'

const provider = new TwitterAuthProvider()

export const signInWithTwitter = async () => {
    await signInWithPopup(auth, provider).then((result) => console.log(result)).catch((err) => console.log(err))
}