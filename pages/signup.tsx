import FormInput from '@/components';
import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from 'react';

const Signup = () => {

    interface valueType {
        username: string,
        email: string,
        password: string
    }

    const [value, setValue] = useState<valueType>({
        username: "",
        email: "",
        password: "",
    })

    const handleFetch = () => {
        fetch("/api/signup", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: value.username,
                email: value.email,
                password: value.password,
            })
        }).then((response) => {
            return response.json()
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(current => ({ ...current, [e.target.name]: e.target.value }))
    }

    const signupInputs = [
        {
            id: 0,
            name: "username",
            type: "text"
        },
        {
            id: 1,
            name: "email",
            type: "text"
        },
        {
            id: 2,
            name: "password",
            type: "password"
        },
    ]
    return (
        <>
            <Head>
                <title>Card App / Sign Up</title>
            </Head>
            <nav className='fixed w-full h-auto flex items-center justify-between py-[24px] px-[48px]'>
                <p className='font-bold text-4xl'>Card App</p>
                <p>OMG WOW OMEGALUL GIGACHAD KEKW</p>
            </nav>
            <main className='w-full h-screen flex items-center justify-center'>
                <div>
                    <div className='flex flex-col gap-y-[16px] w-full'>
                        <h1 className='font-bold text-center text-4xl'>sign up</h1>
                        <h4 className='text-center text-lg'>input your credentials below.</h4>

                        {signupInputs.map((input) => (
                            <FormInput id={input.id} name={input.name} type={input.type} onChange={handleChange} />
                        ))}

                        {/* button */}
                        <div className='bg-light text-dark rounded-[5px] p-[12px] cursor-pointer'>
                            <p className='font-bold text-center' onClick={handleFetch}>Sign up</p>
                        </div>
                        <Link href="/login"><p className='underline text-center'>i have account UwU</p></Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Signup;