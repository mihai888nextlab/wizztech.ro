
export default function Header(){
    return (
        <header className="fixed top-0 right-0 left-0 h-[100px] bg-black flex items-center justify-center">
            <nav className="w-[1500px] h-full grid grid-cols-2 items-center">
                <div className="flex items-center">

                <a href="">
                    <img src="/logo.jpg" className="h-[80px] mx-4"/>
                </a>
                <a href="">
                    <h1 className="text-2xl">WizzTech</h1>
                </a>
                </div>

                <div className="flex justify-end">
                    <button className="text-white font-bold px-5 py-7 rounded-xl">Team</button>
                    <button className="text-white font-bold px-5 py-7 rounded-xl">Contact</button>
                </div>
            </nav>
        </header>
    );
}