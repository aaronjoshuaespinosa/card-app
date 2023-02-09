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
        <nav className='fixed w-full h-auto max-w-[100rem] flex items-center justify-between py-[24px] px-[48px] top-0'>
            <p className='font-bold text-4xl'>Card App</p>
            <p>OMG WOW OMEGALUL GIGACHAD KEKW</p>
            <p className="cursor-pointer" onClick={handleLogout} style={router.pathname === "/login" || router.pathname === "/signup" || router.pathname === "/password-reset" ? { display: "none" } : { display: "block" }}>Logout</p>
        </nav>
    );
}

export default NavBar;