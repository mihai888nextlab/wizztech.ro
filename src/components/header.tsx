export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 h-[100px] flex items-center justify-center">
      <nav className="w-[1500px] h-full grid grid-cols-2 items-center">
        <div>
          <img src="logo.png" alt="" />
        </div>
      </nav>
    </header>
  );
}
