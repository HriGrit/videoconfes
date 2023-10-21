import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebaseauth'

const provider = new GithubAuthProvider()

export const signInWithGitHub = async () => {
    await signInWithPopup(auth, provider).then((result) => { console.log(result); }).catch((err) => console.log(err))
}