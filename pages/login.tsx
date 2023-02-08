import { FormInput, NavBar } from '@/components';
import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {

    const loginInputs = [
        {
            id: 0,
            name: "username",
            label: "username",
            type: "text",
            title: "Must be your registered username."
        },
        {
            id: 1,
            name: "password",
            label: "password",
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
            <NavBar />
            <main className='w-full h-screen flex items-center justify-center'>
                <div>
                    <div className='flex flex-col gap-y-[16px] w-full'>
                        <h1 className='font-bold text-center text-4xl'>log in</h1>
                        <h4 className='text-center text-lg'>input your credentials below.</h4>

                        {loginInputs.map((input) => (
                            <FormInput id={input.id} name={input.name} label={input.label} title={input.title} type={input.type} onChange={handleChange} />
                        ))}

                        {/* button */}
                        <div className='bg-light text-dark rounded-[5px] p-[12px] cursor-pointer' onClick={handleClick} style={valid ? { pointerEvents: "auto", opacity: "100%" } : { pointerEvents: "none", opacity: "50%" }}>
                            <p className='font-bold text-center'>LOG IN</p>
                        </div>

                        <p className='underline cursor-pointer text-center text-sm'>Forgot password?</p>

                        <hr />

                        <p className='text-center text-sm'>Don't have an account? <Link href="/signup"><span className='underline font-bold'>Sign up</span></Link></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;