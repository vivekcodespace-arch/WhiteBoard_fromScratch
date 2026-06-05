// You have incrment the count value as the window resizes

'use client'

import { ReactNode, useEffect, useState } from "react";
import LearnPage from '../components/func'
import {Gerr} from '../components/func'

export default function Home() {
    const [count, setCount] = useState(0)

    
    useEffect(()=>{

        const resize = () => {
            setCount(count + 1)
        }
        

        resize();
        
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    },[]);
    
   const print = (count : any) => {
    console.log(`The value is-> ${count}`);
   }

    return (

        <main>
            
            <p>{`The value of of count is ${count}`}</p>
            <h1>New Page</h1>
            <p>Ths is /newpage</p>
            <LearnPage/>
            <Gerr/>
        </main>
    );
}