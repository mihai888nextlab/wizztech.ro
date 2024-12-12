

export default function Header(){
    return (
        <header className="fixed top-0 right-0 left-0 h-[100px] bg-purple flex items-center justify-center">
            <nav className="w-[1400px] h-full grid grid-cols-2 items-center">
                <div>

                /* Wizztech Logo Img */
                <h1 className="text-2xl">WizzTech</h1>

                </div>

                <div className="flex justify-end">
                    <button className="text-white font-bold px-5 py-7 rounded-xl">Team</button>
                    <button className="text-white font-bold px-5 py-7 rounded-xl">Contact</button>
                </div>
            </nav>
        </header>
    );
}