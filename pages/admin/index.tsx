import React from "react";
import type { GetServerSideProps } from "next";
import { getSession } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res);
  const rabbits = await prisma.rabbit.findMany({});

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
      session: JSON.parse(JSON.stringify(session)),
      rabbits: JSON.parse(JSON.stringify(rabbits)),
    },
  };
};

const Admin = (session: any) => {
  console.log("session", session);
  return <div></div>;
};

export default Admin;
