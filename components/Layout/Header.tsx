import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        (menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed bg-white top-0 z-50 text-yellow-700 font-bold p-4 items-center w-full flex justify-between">
      <div className="flex items-center">
        <Link href={"/"}>
          <div className="flex items-center p-2 rounded-xl">
            <Image src="/farm.png" width={50} height={50} alt="logo" />
            <h1 className="text-xl mx-3">GRANJAS DEL CARMEN</h1>
          </div>
        </Link>
      </div>
      <div>
        <button
          className="lg:hidden p-2 bg-white rounded-xl"
          onClick={() => toggleMenu()}
        >
          <FiMenu />
        </button>
        <nav
          ref={menuRef}
          className={`absolute top-full left-0 w-full bg-white text-yellow-700 p-4 lg:static lg:bg-transparent lg:p-0 lg:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center">
            <li className="px-3 hover:bg-yellow-700 hover:text-white ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="px-3 hover:bg-yellow-700 hover:text-white ">
              <Link href={"/about"}>Contact</Link>
            </li>
            {isLoading && (
              // crear un spin de carga
              <li className="px-3 hover:bg-yellow-700 hover:text-white ">
                Loading...
              </li>
            )}
            {user ? (
              <>
                <li className="px-3 hover:bg-yellow-700 hover:text-white ">
                  <Link href={"/profile"}>Profile</Link>
                </li>
                <li className="px-3 hover:bg-yellow-700 hover:text-white ">
                  <Link href={"/admin/rabbits"}>Administracion</Link>
                </li>
              </>
            ) : (
              <li className="px-3 hover:bg-yellow-700 hover:text-white ">
                <Link href={"/api/auth/login"}>LogIn</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
