import FormInput from '@/components';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const Signup = () => {

    const router = useRouter()

    const signupInputs = [
        {
            id: 0,
            name: "email",
            type: "email",
            title: "Email must have '@' and '.com' on it."
        },
        {
            id: 1,
            name: "username",
            type: "text",
            title: "Username must be 8 characters and above."
        },
        {
            id: 2,
            name: "password",
            type: "password",
            title: "Password must be 8 characters and above."
        },
    ]

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

    const [error, setError] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [valid, setValid] = useState(false)

    const handleClick = () => {
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
        }).then((res) => {
            if (res.success) {
                router.push("/login")
            }
            else {
                if (res.error === "email") {
                    setError(value => ({ ...value, "email": "Email already registered." }))
                    console.log(error.email)
                }

                else if (res.error === "username") {
                    setError(value => ({ ...value, "username": "Username already taken." }))
                    console.log(error.username)
                }
            }
        })
    }

    useEffect(() => {
        if (validateEmail(value.email) && value.username.length > 7 && value.password.length > 7) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }, [value])


    function validateEmail(mail: string) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(current => ({ ...current, [e.target.name]: e.target.value }))
    }

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
                            <FormInput id={input.id} name={input.name} title={input.title} type={input.type} onChange={handleChange} />
                        ))}

                        {/* button */}
                        <div className='bg-light text-dark rounded-[5px] p-[12px] cursor-pointer' onClick={handleClick} style={valid ? { pointerEvents: "auto", opacity: "100%" } : { pointerEvents: "none", opacity: "50%" }}>
                            <p className='font-bold text-center'>SIGN UP</p>
                        </div>
                        <Link href="/login"><p className='underline text-center'>i have account UwU</p></Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Signup;