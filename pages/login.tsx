import Head from 'next/head'

const Login = () => {
    return (
        <>
            <Head>
                <title>Card App</title>
            </Head>
            <nav className='fixed w-full h-auto bg-stone-900 text-slate-100 flex items-center justify-between py-[24px] px-[48px]'>
                <p className='font-bold text-4xl'>Card App</p>
                <p>OMG WOW OMEGALUL GIGACHAD KEKW</p>
            </nav>
            <main className='w-full h-screen bg-stone-900 text-slate-100 flex items-center justify-center'>
                <div className='flex flex-col gap-y-[12px]'>
                    <h1 className='font-bold text-center text-4xl'>log in</h1>
                    <h4 className='text-center text-lg'>input your credentials below.</h4>
                    <p>username</p>
                    <input type="text" className='border-slate-100 border-[1px] bg-stone-900 rounded-[5px] p-[12px]' />
                    <p>password</p>
                    <input type="password" className='border-slate-100 border-[1px] bg-stone-900 rounded-[5px] p-[12px]' />

                    {/* button */}
                    <div className='bg-slate-100 text-stone-900 rounded-[5px] p-[12px] cursor-pointer'>
                        <p className='font-bold text-center'>LOG IN</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;