import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Granjas del Carmen</title>
        <link rel="icon" href="/farm.png" />
      </Head>
      {/* <main className="hidden">GRANJAS DEL CARMEN</main> */}
      <div className="bg-amber-800 text-white mx-auto my-10 w-2/3 p-10 rounded-xl">
        <h1 className="text-center text-2xl font-extrabold mb-2">ALERTA</h1>
        <p className="text-center">
          PERSONAS INESCRUPULOSAS ESTAN HACIENDO USO DE NUESTRA INFORMACION PARA
          ESTAFAR PERSONAS, PIDIENDO SUMAS DE DINERO EN CUENTAS BANCARIAS QUE NO
          CORRESPONDEN A LAS NUESTRAS Y OFRECIENDO PRODUCTOS QUE NO OFRECEMOS
          NOSOTROS. <br />
          <br /> POR FAVOR TENGA PRECAUCION Y PROCURE ESTABLECER CONTACTO
          DIRECTO CON LAS PERSONAS DE LA GRANJA
          <br />
          <br />
          ACTUALMENTE NOSOTROS NO OFRECEMOS VENTA DE NINGUN ANIMAL NI PRODUCTO
          YA QUE NOS ENCONTRAMOS EN REESTRUCTURACION.
        </p>
      </div>
    </div>
  );
}
