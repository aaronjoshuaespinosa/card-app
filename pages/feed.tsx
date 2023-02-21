import { NavBar } from "@/components"
import Head from 'next/head'

const Feed = () => {
    return (
        <>
            <Head>
                <title>Kards / Feed</title>
            </Head>
            <div className="w-full flex justify-center items-center">
                <NavBar />
            </div>
            <main className='w-full h-screen flex items-center justify-center'>
                <p>Hello</p>
            </main>Feed
        </>
    );
}

export default Feed;