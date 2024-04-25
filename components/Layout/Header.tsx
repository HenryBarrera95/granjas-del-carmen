// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, isLoading } = useUser();
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         menuRef.current &&
//         (menuRef.current as HTMLElement).contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       window.addEventListener("click", handleClickOutside);
//     }

//     return () => {
//       window.removeEventListener("click", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <header className="fixed bg-white top-0 z-50 text-yellow-700 px-3 items-center w-full flex justify-between">
//       <div className="flex items-center">
//         <Link href={"/"}>
//           <div className="p-3">
//             <Image src="/Positivo.png" width={80} height={80} alt="logo" />
//           </div>
//         </Link>
//       </div>
//       <div>
//         <button
//           className="lg:hidden p-2 bg-white rounded-xl"
//           onClick={() => toggleMenu()}
//         >
//           <FiMenu />
//         </button>
//         <nav
//           ref={menuRef}
//           className={`absolute top-full left-0 w-full bg-white text-primary p-4 lg:static lg:bg-transparent lg:p-0 lg:flex ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           <ul className="flex flex-col lg:flex-row items-center">
//             <Link href={"/"}>
//               <li className="p-3 rounded hover:bg-primary hover:text-primaryBg">
//                 Inicio
//               </li>
//             </Link>
//             <Link href={"/about"}>
//               <li className="p-3 rounded hover:bg-primary hover:text-primaryBg">
//                 Contacto
//               </li>
//             </Link>
//             {isLoading ? (
//               // crear un spin de carga
//               <li className="p-3 rounded hover:bg-primary hover:text-primaryBg">
//                 Cargando...
//               </li>
//             ) : user ? (
//               <>
//                 <Link href={"/profile"}>
//                   <li className="p-3 rounded hover:bg-primary hover:text-primaryBg">
//                     Mi Perfil
//                   </li>
//                 </Link>
//                 <Link href={"/admin/rabbits"}>
//                   <li className="p-3 rounded hover:bg-primary hover:text-primaryBg ">
//                     Administracion
//                   </li>
//                 </Link>
//               </>
//             ) : (
//               <Link href={"/api/auth/login"}>
//                 <li className="p-3 rounded hover:bg-primary hover:text-primaryBg ">
//                   Iniciar Sesion
//                 </li>
//               </Link>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user, isLoading } = useUser();
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 flex z-50 py-1 px-3 bg-mainbg">
      <Link className="" href="#">
        <GranjaIcon />
        <span className="sr-only">
          Granjas del Carmen - conejos y venta de conejos
        </span>
      </Link>
      <div className="w-full text-right items-center">
        <button
          className="lg:hidden p-2 rounded-xl"
          onClick={() => toggleMenu()}
        >
          {!isOpen ? (
            <FiMenu className="text-primary" />
          ) : (
            <FiX className="text-primary" />
          )}
        </button>
        <nav
          ref={menuRef}
          className={`w-full my-3 bg-mainbg text-[12px] text-primary space-y-2
          lg:space-y-0 lg:flex lg:space-x-3 lg:justify-end
          ${isOpen ? "block" : "hidden"}`}
        >
          <Link
            className="font-medium hover:underline underline-offset-4 block"
            href={"/"}
          >
            Inicio
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4 block"
            href={"/about"}
          >
            Contacto
          </Link>
          {isLoading ? (
            // crear un spin de carga
            <div className="font-medium hover:underline underline-offset-4 block">
              Cargando...
            </div>
          ) : user ? (
            <>
              <Link
                href={"/profile"}
                className="font-medium hover:underline underline-offset-4 block"
              >
                Mi Perfil
              </Link>
              <Link
                href={"/admin/rabbits"}
                className="font-medium hover:underline underline-offset-4 block"
              >
                Administracion
              </Link>
            </>
          ) : (
            <Link
              href={"/api/auth/login"}
              className="font-medium hover:underline underline-offset-4 block"
            >
              Iniciar Sesion
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

function GranjaIcon() {
  return <Image src="/Positivo.png" alt="logo" width={75} height={75} />;
}

export default Header;
