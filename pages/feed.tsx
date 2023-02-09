import { NavBar } from "@/components"
import Head from 'next/head'

const Feed = () => {
    return (
        <>
            <Head>
                <title>Card App / Feed</title>
            </Head>
            <NavBar />
            <main className='w-full h-screen flex items-center justify-center'>
                <p>Hello</p>
            </main>Feed
        </>
    );
}

export default Feed;