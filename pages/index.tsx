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
        <h1 className="text-2xl text-center text-orange-900 font-semibold pt-3">
          ¡Bienvenido a Granjas del Carmen!
        </h1>
        <section className="md:flex p-3 text-center">
          <p className="text-lg px-5">
            En Granjas del Carmen, nos enorgullece ofrecer productos lácteos,
            avícolas y cunícolas de la más alta calidad. Desde nuestros inicios,
            nos hemos dedicado a cultivar un ambiente donde la tradición, la
            pasión por la agricultura y el compromiso con la excelencia se
            entrelazan para brindarte alimentos frescos y nutritivos.
            <br />
            <br />
            Fundada con la visión de proporcionar a las familias opciones
            saludables y deliciosas, Granjas del Carmen ha crecido hasta
            convertirse en un referente en la producción y comercialización de
            productos provenientes de nuestras granjas. Nos destacamos por
            nuestro compromiso con prácticas agrícolas sostenibles y éticas,
            asegurando que cada producto que llega a tu mesa cumpla con los más
            altos estándares de calidad.
          </p>
          <img
            className="rounded-3xl mx-auto m-2"
            width={250}
            src="/ternerocerca-image.jpg"
            alt="Granjas del Carmen"
          />
        </section>
      </main>
    </div>
  );
}
