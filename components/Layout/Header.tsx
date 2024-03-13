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
    <header className="fixed bg-white top-0 z-50 text-yellow-700 px-3 items-center w-full flex justify-between">
      <div className="flex items-center">
        <Link href={"/"}>
          <div className="p-3">
            <Image src="/Positivo.png" width={80} height={80} alt="logo" />
            {/* <h1 className="text-xl mx-3">GRANJAS DEL CARMEN</h1> */}
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
          className={`absolute top-full left-0 w-full bg-white text-primary p-4 lg:static lg:bg-transparent lg:p-0 lg:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center">
            <Link href={"/"}>
              <li className="p-3 rounded hover:bg-primary hover:text-primaryBg">
                Inicio
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="p-3 rounded hover:bg-primary hover:text-primaryBg">
                Contacto
              </li>
            </Link>
            {isLoading ? (
              // crear un spin de carga
              <li className="p-3 rounded hover:bg-primary hover:text-primaryBg">
                Cargando...
              </li>
            ) : user ? (
              <>
                <li className="p-3 rounded hover:bg-primary hover:text-primaryBg">
                  <Link href={"/profile"}>Mi Perfil</Link>
                </li>
                <li className="p-3 rounded hover:bg-primary hover:text-primaryBg ">
                  <Link href={"/admin/rabbits"}>Administracion</Link>
                </li>
              </>
            ) : (
              <li className="p-3 rounded hover:bg-primary hover:text-primaryBg ">
                <Link href={"/api/auth/login"}>Iniciar Sesion</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
