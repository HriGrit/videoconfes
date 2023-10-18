import React, { useEffect, useState } from 'react'
import "./css/SignIn.css"
import search from "../assets/search.svg"
import f from "../assets/f.svg"
import apple from "../assets/apple.svg"
import cancel from "../assets/cancel.svg"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseauth";

const SignIn = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [ispossible, setIspossible] = useState(true)


    useEffect(() => {
        const popup = document.getElementsByClassName("popup");
        const response = popup[0];
        function addpopup() {
            popup[0].classList.remove("hidden");
        }
        function closepopup() {
            popup[0].classList.add("hidden");
        }
        function oncorner() {
            popup[0].classList.add("fixed right-[2%] top-[3%] w-[20%] h-[10%]");
        }
        if (response) {

        }
    }, []);

    const handleButtonClick = () => {
        setIspossible(!ispossible);
    };

    const register = async (e) => {
        try {
            e.preventDefault();
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    }

    const login = async () => {
        try {
            e.preventDefault();
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    }

    return (

        <div className="h-full">
            <div className="text-6xl mt-[5%] ml-[10%] mb-[10%]">Sign In</div>
            {ispossible && (<div className='popup smooth-butter fixed right-[2%] top-[3%] w-[18%] h-[10%]'>
                <div className=' bg-custom-gray  rounded-lg  text-2xl'>
                    <div className='flex flex-row'>
                        <button className='w-[50px] h-full p-1' onClick={handleButtonClick}>
                            <img className="cursor-pointer" src={cancel}></img>
                        </button>
                        <a className='cursor-pointer' href="#">
                            <div className='pt-2 text-white'>Sign in by Phone Number</div>
                            <div className='pb-2 text-2xl text-blue-400 text-center underline'>Click here</div>
                        </a>
                    </div>
                </div>
            </div>)}
            <div className=''>
                <form>
                    <div className="grid grid-cols-5 text-4xl ml-[10%] mb-[5%]">
                        <label className="col-span-2" htmlFor="email">Email</label>
                        <input className="col-span-2 text-2xl p-2 rounded-lg w-[100%] border-black border-2 " type="email" name="email" id="email" placeholder='user@example.com' onChange={(e) => setRegisterEmail(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-5 text-4xl ml-[10%] mb-[5%]">
                        <label className="col-span-2" htmlFor="password">Password</label>
                        <input className="col-span-2 border-black border-2 text-2xl p-2 rounded-lg" type="password" name="password" id="password" placeholder='*********' onChange={(e) => setRegisterPassword(e.target.value)} />
                    </div>
                    <div className='flex justify-center '>
                        <div className="text-3xl  w-fit bg-white p-2 rounded-2xl px-[5%]">
                            <button type="submit" onClick={register}>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr className='border-4 mt-[3%] ml-[10%] mr-[10%]' />
            <div className='mx-[10%] mt-[5%] flex flex-row justify-between'>
                <div className='flex flex-row bg-white  p-2 rounded-lg'>
                    <img width="30px" src={search}></img>
                    <label className='ml-[15px] text-xl'>Google Sign in</label>
                </div>
                <div className='flex flex-row bg-white  p-2 rounded-lg'>
                    <img width="30px" src={f}></img>
                    <label className='ml-[15px] text-xl'>Facebook Sign in</label>
                </div>
                <div className='flex flex-row bg-white  p-2 rounded-lg'>
                    <img width="30px" src={apple}></img>
                    <label className='ml-[15px] text-xl'>Apple Sign in</label>
                </div>
            </div>
            <div>
                <div className='flex flex-row justify-center mt-[9%]'>
                    <label className='text-2xl'>Don't have an account? </label>

                    <label className='text-2xl text-blue-500'>Sign Up</label>

                </div>
            </div>
            <div>
                <div className='flex flex-row justify-center mt-[2%]'>
                    <label className='text-2xl'>Forgot Password? </label>
                    <label className='text-2xl text-blue-500'>Reset Password</label>
                </div>
            </div>
        </div>
    )
}

export default SignIn