import React, { useState } from "react";
import Head from "next/head";
import GenericModal from "../components/Modals/GenericModal";
import AlertBox from "../components/Alerts/AlertBox";
import ContentSection from "../components/Landing/ContentSection";
import WelcomeSection from "../components/Landing/WelcomeSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-poppins">
      <Head>
        <title>Granjas del Carmen</title>
        <link rel="icon" href="/Negativo BN.png" />
      </Head>
      {/* {isModalOpen && (
        <GenericModal
          title=""
          onClose={handleCloseModal}
          closeOnOutsideClick={true}
        >
          <AlertBox />
        </GenericModal>
      )} */}
      <WelcomeSection />
      <ContentSection />
    </div>
  );
}
