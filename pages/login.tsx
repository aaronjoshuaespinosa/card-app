import { FormInput, NavBar } from '@/components';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const Login = () => {

    const router = useRouter()

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

    interface valueType {
        username: string,
        password: string,
    }

    const [value, setValue] = useState<valueType>({
        username: "",
        password: "",
    })

    const [error, setError] = useState({
        username: "",
        password: "",
    })

    const [valid, setValid] = useState(false)

    const handleClick = () => {
        fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: value.username,
                password: value.password,
            })
        }).then((response) => {
            return response.json()
        }).then((res) => {
            if (res.loggedIn) {
                router.push("/feed")
            }
            else {
                if (res.error === "username") {
                    setError(value => ({ ...value, "username": "Username not found." }))
                    console.log(error.username)
                }
                else if (res.error === "password") {
                    setError(value => ({ ...value, "password": "Wrong password." }))
                    console.log(error.password)
                }
            }
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(current => ({ ...current, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        if (value.username.length > 7 && value.password.length > 7) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }, [value])

    return (
        <>
            <Head>
                <title>Card App / Login</title>
            </Head>
            <main className='w-full h-screen flex items-center justify-center'>
            <NavBar />
                <div className='min-w-[15rem]'>
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

                        <Link href="/password-reset"><p className='underline cursor-pointer text-center text-sm'>Forgot password?</p></Link>

                        <hr />

                        <p className='text-center text-sm'>Don't have an account? <Link href="/signup"><span className='underline font-bold'>Sign up</span></Link></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;
