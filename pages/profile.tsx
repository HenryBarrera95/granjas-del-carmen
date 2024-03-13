import React from "react";
import prisma from "../lib/prisma";
import type { GetServerSideProps } from "next";
import { getSession } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/login",
      },
      props: {},
    };
  }

  const user = await prisma.user.findUnique({
    select: {
      name: true,
      email: true,
      role: true,
    },
    where: {
      email: session.user.email,
    },
  });

  if (!user || user.role !== "ADMIN") {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};

const profile = ({ user }: { user: any }) => {
  // console.log(user);
  return (
    <div className="text-center p-5 ">
      <img
        src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
        className="mx-auto w-32 rounded-full m-10"
        alt="Avatar"
        // onClick={() => (window.location.href = "api/auth/logout")}
      />
      <h1 className="text-3xl">Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <button
        // className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-black"
        className="bg-primary hover:bg-amber-900 text-primaryBg md:text-xl p-2 m-5 rounded"
        onClick={() => (window.location.href = "api/auth/logout")}
      >
        Logout
      </button>
    </div>
  );
};

export default profile;
