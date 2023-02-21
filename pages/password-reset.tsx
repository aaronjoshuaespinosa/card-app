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
                <div className='w-[15rem]'>
                    <div className='flex flex-col gap-y-[16px] w-full'>
                        <div className='flex gap-x-2 items-center justify-center'>
                            <img className='w-[2.5rem]' src="https://ik.imagekit.io/xzgmktvzg/Kards/kards_logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676989380604" alt="logo" />
                            <p className='font-bold text-3xl'>Kards</p>
                        </div>
                        <h4 className='text-center text-base text-secondary font-bold'>please enter your email below.</h4>

                        {loginInputs.map((input) => (
                            <FormInput id={input.id} name={input.name} label={input.label} title={input.title} type={input.type} onChange={handleChange} />
                        ))}

                        {/* button */}
                        <div className='bg-lblue text-dark rounded-[5px] p-[12px] cursor-pointer' onClick={handleClick} style={valid ? { pointerEvents: "auto", opacity: "100%" } : { pointerEvents: "none", opacity: "50%" }}>
                            <p className='font-bold text-center'>RESET PASSWORD</p>
                        </div>

                        <hr />

                        <p className='text-center text-sm'>Don't have an account? <Link href="/signup"><span className='underline font-bold text-lblue'>Sign up</span></Link></p>
                        <Link href="/login"><p className='text-center text-sm underline font-bold'>Back to Login</p></Link>
                    </div>
                </div>
                <footer className='absolute bottom-0 py-8'>
                    <p className='text-sm text-secondary'>Made with ♥ by AJ Espinosa</p>
                </footer>
            </main>
        </>
    );
}

export default PasswordReset;