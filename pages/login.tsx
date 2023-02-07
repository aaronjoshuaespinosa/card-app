import FormInput from '@/components';
import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {

    const loginInputs = [
        {
            id: 0,
            name: "username",
            type: "text",
            title: "Must be your registered username."
        },
        {
            id: 1,
            name: "password",
            type: "password",
            title: "Must be your registered password."
        },
    ]
    
    const [value, setValue] = useState({
        username: "",
        password: "",
    })

    const [valid, setValid] = useState(false)

    const handleClick = () => {
        console.log(value)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(current => ({ ...current, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <Head>
                <title>Card App / Login</title>
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
                            <FormInput id={input.id} name={input.name} title={input.title} type={input.type} onChange={handleChange} />
                        ))}

                        {/* button */}
                        <div className='bg-light text-dark rounded-[5px] p-[12px] cursor-pointer' onClick={handleClick} style={valid ? { pointerEvents: "auto", opacity: "100%" } : { pointerEvents: "none", opacity: "50%" }}>
                            <p className='font-bold text-center'>LOG IN</p>
                        </div>
                        <Link href="/signup"><p className='underline text-center'>i want to join UwU</p></Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;