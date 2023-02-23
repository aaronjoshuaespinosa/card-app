import { NavBar } from "@/components"
import Head from 'next/head'

const Feed = () => {
    return (
        <>
            <Head>
                <title>Kards / Feed</title>
            </Head>
            <main className='w-full h-screen flex items-center justify-center'>
                <NavBar />
                <div className="flex h-auto w-full max-w-[75rem] px-10 justify-start">
                    <p>This page is under construction ^^</p>
                </div>
            </main>
        </>
    );
}

export default Feed;