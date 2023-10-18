import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Picture from './components/Picture'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='flex flex-row flex-nowrap justify-between h-[100vh]'>
            <div className='gradient1 w-[40%] px-[10%]'>
                <Picture />
            </div>
            <div className='gradient2 w-[60%]'>
                <Login />
            </div>
        </div>
    )
}

export default App
