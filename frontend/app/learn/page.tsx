// In this we will learn how to use arrays in tsx file 
'use client'
import { useState } from "react";

export default function Home(){
    //crated a object
    const [number, setnumber] = useState<number[]>([1]);
    
    return (
        <div>
            <button onClick={() => {
                setnumber(prev => {
                    const lastelement = number[number.length - 1];
                    return [...prev, lastelement + 1];
                });
            }}
            className=" bg-red-600 border-amber-950 border-2">
                Add 5
            </button>
            <p>{number.join(', ')}</p>
            
        </div>
    );
}