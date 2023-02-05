import FormInput from '@/components';
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
        setValue(current => ({ ...current, [e.target.name]: e.target.value }))
    }

    const loginInputs = [
        {
            id: 0,
            name: "username",
            type: "text"
        },
        {
            id: 1,
            name: "password",
            type: "password"
        },
    ]

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
                <div>
                    <div className='flex flex-col gap-y-[16px] w-full'>
                        <h1 className='font-bold text-center text-4xl'>log in</h1>
                        <h4 className='text-center text-lg'>input your credentials below.</h4>

                        {loginInputs.map((input) => (
                            <FormInput id={input.id} name={input.name} type={input.type} onChange={handleChange} />
                        ))}

                        {/* button */}
                        <div className='bg-slate-100 text-stone-900 rounded-[5px] p-[12px] cursor-pointer'>
                            <p className='font-bold text-center' onClick={handleFetch}>LOG IN</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;