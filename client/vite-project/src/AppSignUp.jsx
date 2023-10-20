import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Picture from './components/Picture'

function App() {
    return (
        <div className='flex flex-row flex-nowrap justify-between h-[100vh]'>
            <div className='gradient1 w-[40%] px-[10%]'>
                <Picture />
            </div>
            <div className='gradient2 w-[60%]'>
                <SignUp />
            </div>
        </div>
    )
}

export default App
