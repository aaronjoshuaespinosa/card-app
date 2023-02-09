import { FormInput, NavBar } from '@/components'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

const PasswordReset = () => {

    const router = useRouter()

    const loginInputs = [
        {
            id: 0,
            name: "email",
            label: "email",
            type: "text",
            title: "Must be your registered email."
        },
    ]

    interface valueType {
        email: string
    }

    const [value, setValue] = useState<valueType>({
        email: ""
    })

    const [valid, setValid] = useState(false)

    const handleClick = () => {

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
        if (validateEmail(value.email)) {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }, [value])

    return (
        <>
            <Head>
                <title>Card App / Password Reset</title>
            </Head>
            <main className='w-full h-screen flex items-center justify-center'>
                <NavBar />
                <div className='min-w-[15rem]'>
                    <div className='flex flex-col gap-y-[16px] w-full'>
                        <h1 className='font-bold text-center text-4xl'>reset password</h1>
                        <h4 className='text-center text-lg'>input your email below.</h4>

                        {loginInputs.map((input) => (
                            <FormInput id={input.id} name={input.name} label={input.label} title={input.title} type={input.type} onChange={handleChange} />
                        ))}

                        {/* button */}
                        <div className='bg-light text-dark rounded-[5px] p-[12px] cursor-pointer' onClick={handleClick} style={valid ? { pointerEvents: "auto", opacity: "100%" } : { pointerEvents: "none", opacity: "50%" }}>
                            <p className='font-bold text-center'>RESET PASSWORD</p>
                        </div>

                        <hr />

                        <p className='text-center text-sm'>Don't have an account? <Link href="/signup"><span className='underline font-bold'>Sign up</span></Link></p>
                        <Link href="/login"><p className='text-center text-sm underline font-bold'>Back to Login</p></Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default PasswordReset;