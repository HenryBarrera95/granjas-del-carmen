import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const session = true;
  return (
    <header className="grid grid-cols-3 bg-orange-900 text-white p-4 items-center">
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
        <Link className="rounded-lg bg-green-800 p-2 mx-1" href={"/"}>
          Home
        </Link>
        <Link className="rounded-lg bg-green-800 p-2 mx-1" href={"/about"}>
          Contact
        </Link>
        {session ? (
          <Link className="rounded-lg bg-green-800 p-2 mx-1" href={"/profile"}>
            Profile
          </Link>
        ) : (
          <Link className="rounded-lg bg-green-800 p-2 mx-1" href={"/"}>
            SignIn
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
