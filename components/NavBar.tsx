import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter()

    const handleLogout = () => {
        fetch("/api/logout", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({})
        }).then((response) => {
            return response.json()
        }).then(() => {
            router.push("/login")
        })
    }
    return (
        <nav className='fixed w-full h-auto max-w-[80rem] flex items-center justify-between py-[24px] px-[48px] top-0'>
            <div className='flex gap-x-2 items-center'>
                <img className='w-[2.5rem]' src="https://ik.imagekit.io/xzgmktvzg/Kards/kards_logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676989380604" alt="logo" />
                <p className='font-bold text-3xl'>Kards</p>
            </div>
            <p className='font-bold'>Collect and create.</p>
            <p className="cursor-pointer" onClick={handleLogout} style={router.pathname === "/login" || router.pathname === "/signup" || router.pathname === "/password-reset" ? { display: "none" } : { display: "block" }}>Logout</p>
        </nav>
    );
}

export default NavBar;
