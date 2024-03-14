import React, { useState } from "react";
import type { GetServerSideProps } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { Rabbit } from "@prisma/client";
import prisma from "../../../lib/prisma";
// import AnimalsTable from "../../../components/Tables/AnimalsTable";
import CreateNewRabbit from "../../../components/Modals/CreateNewRabbit";

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
      rabbits: JSON.parse(JSON.stringify(rabbits)),
    },
  };
};

const Admin = ({ rabbits }: { rabbits: Rabbit[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <CreateNewRabbit handleCloseModal={handleCloseModal} />}
      {/* Rest of your component */}
    </>
  );
};
