'use client'

import Image from 'next/image'
import {useTypewriter, Cursor, Typewriter} from 'react-simple-typewriter';
import  { motion } from "framer-motion";
import * as React from 'react'
import { useState } from 'react';




export default function App() {
    const [result, setResult] = useState('');

    const calculateResult = () => {
        try {
            // Use the eval function to calculate the result of the expression
            const calculatedResult = eval(result);
            setResult(calculatedResult.toString());
        } catch (error) {
            // Handle any errors that may occur during evaluation
            setResult('Error');
        }
    };

    return (
        <div className={'bg-slate-900 h-screen w-screen items-center px-[40%] py-60 space-y-5'}>
            <form>
                <input type="text" value={result} className={'bg-slate-600 text-white font-bold h-10 p-4'} />
            </form>
            <div id="keypad" className={'text-white'}>
                <div>
                    <button name="target" onClick={() => setResult("")} className={'border-2 h-14 w-24'}>
                        AC
                    </button>
                    <button name="target" onClick={() => setResult(result + '1')} className={'border-2 h-14 w-14'}>
                        1
                    </button>
                    <button name="target" onClick={() => setResult(result + '2')} className={'border-2 h-14 w-14'}>
                        2
                    </button>
                    <button name="target" onClick={() => setResult(result + '3')} className={'border-2 h-14 w-14'}>
                        3
                    </button>
                </div>
                <div>
                    <button name="target" onClick={() => setResult(result + '4')} className={'border-2 h-14 w-14'}>
                        4
                    </button>
                    <button name="target" onClick={() => setResult(result + '5')} className={'border-2 h-14 w-14'}>
                        5
                    </button>
                    <button name="target" onClick={() => setResult(result + '6')} className={'border-2 h-14 w-14'}>
                        6
                    </button>
                    <button onClick={() => setResult(result + '*')} className={'border-2 h-14 w-24'}>
                        x
                    </button>
                </div>
                <div>
                    <button name="target" onClick={() => setResult(result + '7')} className={'border-2 h-14 w-14'}>
                        7
                    </button>
                    <button name="target" onClick={() => setResult(result + '8')} className={'border-2 h-14 w-24'}>
                        8
                    </button>
                    <button name="target" onClick={() => setResult(result + '9')} className={'border-2 h-14 w-14'}>
                        9
                    </button>
                    <button onClick={() => setResult(result + '/')} className={'border-2 h-14 w-14'}>
                        /
                    </button>
                </div>
                <div>
                    <button name="target" onClick={() => setResult(result + '0')} className={'border-2 h-14 w-20'}>
                        0
                    </button>
                    <button onClick={() => setResult(result + '+')} className={'border-2 h-14 w-32'}>
                        +
                    </button>
                    <button onClick={calculateResult} className={'border-2 h-14 w-14'}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}
