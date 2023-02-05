import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
    const [value, setValue] = useState({
        username: "",
        password: "",
    })

    const handleFetch = () => {
        console.log(value)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(current => ({...current, [e.target.name]: e.target.value}))
    }
    return (
        <>
            <Head>
                <title>Card App</title>
            </Head>
            <nav className='fixed w-full h-auto flex items-center justify-between py-[24px] px-[48px]'>
                <p className='font-bold text-4xl'>Card App</p>
                <p>OMG WOW OMEGALUL GIGACHAD KEKW</p>
            </nav>
            <main className='w-full h-screen flex items-center justify-center'>
                <div className='flex flex-col gap-y-[12px]'>
                    <h1 className='font-bold text-center text-4xl'>log in</h1>
                    <h4 className='text-center text-lg'>input your credentials below.</h4>
                    <p>username</p>
                    <input type="text" name="username" className='border-slate-100 border-[1px] bg-stone-900 rounded-[5px] p-[12px]' onChange={handleChange} />
                    <p>password</p>
                    <input type="password" name="password" className='border-slate-100 border-[1px] bg-stone-900 rounded-[5px] p-[12px]' onChange={handleChange} />

                    {/* button */}
                    <div className='bg-slate-100 text-stone-900 rounded-[5px] p-[12px] cursor-pointer'>
                        <p className='font-bold text-center' onClick={handleFetch}>LOG IN</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;