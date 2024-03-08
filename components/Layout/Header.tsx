import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user } = useUser();
  // const session = true;
  // console.log(user);
  return (
    <header className="grid grid-cols-3 bg-orange-900 text-white p-4 items-center w-full">
      <Link className="flex items-center" href={"/"}>
        <Image
          // className="mx-auto"
          src="/farm.png"
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="text-xl mx-3">GRANJAS DEL CARMEN</h1>
      </Link>
      <nav className="col-start-3 mx-auto">
        <Link
          className="rounded-lg font-semibold hover:bg-white hover:text-black hover:animate-pulse p-2 mx-1"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="rounded-lg font-semibold hover:bg-white hover:text-black hover:animate-pulse p-2 mx-1"
          href={"/about"}
        >
          Contact
        </Link>
        {user ? (
          <>
            <Link
              className="rounded-lg font-semibold hover:bg-white hover:text-black hover:animate-pulse p-2 mx-1"
              href={"/profile"}
            >
              Profile
            </Link>
            {user.role === "ADMIN" && (
              <Link
                className="rounded-lg font-semibold hover:bg-white hover:text-black hover:animate-pulse p-2 mx-1"
                href={"/admin"}
              >
                Administracion
              </Link>
            )}
          </>
        ) : (
          <Link
            className="rounded-lg font-semibold hover:bg-white hover:text-black hover:animate-pulse p-2 mx-1"
            href={"/api/auth/login"}
          >
            LogIn
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
