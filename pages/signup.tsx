import { FormInput } from '@/components';
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
            label: "email",
            type: "email",
            title: "Email must have '@' and '.com' on it.",
            placeholder: "hello@email.com",
        },
        {
            id: 1,
            name: "username",
            label: "username",
            type: "text",
            title: "Username must be 8 characters and above.",
            placeholder: "Must be 8 characters & above.",
        },
        {
            id: 2,
            name: "password",
            label: "password",
            type: "password",
            title: "Password must be 8 characters and above.",
            placeholder: "Must be 8 characters & above.",
        },
        {
            id: 3,
            name: "confPassword",
            label: "confirm password",
            type: "password",
            title: "Password must be 8 characters and above.",
            placeholder: "Must match above password.",
        },
    ]

    interface valueType {
        username: string,
        email: string,
        password: string,
        confPassword: string
    }

    const [value, setValue] = useState<valueType>({
        username: "",
        email: "",
        password: "",
        confPassword: "",
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

    function validateEmail(mail: string) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(current => ({ ...current, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        if (validateEmail(value.email) && value.username.length > 7 && value.password.length > 7 && value.confPassword === value.password) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }, [value])

    return (
        <>
            <Head>
                <title>Kards / Sign Up</title>
            </Head>
            <main className='w-full h-screen flex items-center justify-center'>
                <div className='w-[17rem]'>
                    <div className='flex flex-col gap-y-[16px] w-full'>
                        <div className='flex gap-x-2 items-center justify-center'>
                            <img className='w-[2.5rem]' src="https://ik.imagekit.io/xzgmktvzg/Kards/kards_logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676989380604" alt="logo" />
                            <p className='font-bold text-3xl'>Kards</p>
                        </div>
                        <h4 className='text-center text-base text-secondary font-bold'>sign up to kollect kards or kreate you own dekk.</h4>

                        {signupInputs.map((input) => (
                            <FormInput id={input.id} name={input.name} label={input.label} title={input.title} type={input.type} placeholder={input.placeholder} onChange={handleChange} />
                        ))}

                        {/* button */}
                        <div className='bg-lblue text-dark rounded-[5px] p-[12px] cursor-pointer transition-all ease-in-out duration-[0.2s]' onClick={handleClick} style={valid ? { pointerEvents: "auto", opacity: "100%" } : { pointerEvents: "none", opacity: "50%" }}>
                            <p className='font-bold text-center'>SIGN UP</p>
                        </div>

                        <hr />

                        <p className='text-center text-sm'>Already have an account? <Link href="/login"><span className='underline font-bold text-lblue'>Login</span></Link></p>
                    </div>
                </div>
                <footer className='absolute bottom-0 py-8'>
                    <p className='text-sm text-secondary'>Made with ♥ by AJ Espinosa</p>
                </footer>
            </main>
        </>
    );
}

export default Signup;