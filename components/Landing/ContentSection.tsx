const ContentSection = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <img
          src="/cutrabbits-image.jpg"
          className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
          alt="image"
        />

        {/* <div className="mb-6 flex items-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg"
            className="mr-2 h-8 rounded-full"
            alt="avatar"
            loading="lazy"
          />
          <div>
            <span>
              Published <u>15.07.2020</u> by{" "}
            </span>
            <a href="#!" className="font-medium">
              Anna Maria Doe
            </a>
          </div>
        </div> */}

        <h1 className="mb-6 text-3xl font-bold">
          Conejo de Calidad: Nutrición Sana, Origen Confiable
        </h1>

        <p className="text-md">
          En Granjas del Carmen, nos enorgullece presentarte una alternativa
          nutricionalmente rica y deliciosa: la carne de conejo. Nuestros
          conejos son criados con cuidado y atención, garantizando no solo un
          sabor excepcional, sino también un perfil nutricional que respalda tu
          bienestar.
          <br />
          <br />
          Cada porción de carne de conejo de Granjas del Carmen es el resultado
          de prácticas agrícolas responsables y el compromiso con el bienestar
          animal. Nuestros conejos se crían en un entorno limpio y cómodo,
          promoviendo una vida saludable y feliz. Creemos en la transparencia, y
          es por eso que te ofrecemos una trazabilidad completa de nuestros
          productos, para que tengas plena confianza en la calidad que llega a
          tu mesa.
          <br />
          <br />
          Al elegir la carne de conejo de Granjas del Carmen, no solo estás
          seleccionando una opción deliciosa y magra, sino también apoyando la
          sostenibilidad ambiental. La producción eficiente de carne de conejo
          minimiza la huella ecológica, contribuyendo a un futuro más verde y
          saludable para todos.
          <br />
          <br />
          Te invitamos a descubrir el auténtico sabor y los beneficios
          nutricionales que solo Granjas del Carmen puede ofrecer. Únete a
          nosotros en esta jornada hacia una alimentación consciente y disfruta
          de la excelencia en cada bocado. ¡Bienvenido a Granjas del Carmen,
          donde la calidad y el sabor se encuentran en cada rincón de nuestra
          tierra!
        </p>
      </section>
    </div>
  );
};

export default ContentSection;
