import React, { useState } from "react";
import Head from "next/head";
import GenericModal from "../components/Modals/GenericModal";
import AlertBox from "../components/Alerts/AlertBox";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Granjas del Carmen</title>
        <link rel="icon" href="/farm.png" />
      </Head>
      {isModalOpen && (
        <GenericModal
          title=""
          onClose={handleCloseModal}
          closeOnOutsideClick={true}
        >
          <AlertBox />
        </GenericModal>
      )}
      <main className="bg-slate-50 container mx-auto rounded-xl">
        <h1 className="text-2xl text-center text-orange-900 font-semibold py-3">
          ACERCA DE NOSOTROS
        </h1>
        <section className="flex p-5">
          <p className="text-xl px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img className="rounded-3xl"  width={250} src="/ternerocerca-image.jpg" alt="Granjas del Carmen" />
        </section>
      </main>
    </div>
  );
}
