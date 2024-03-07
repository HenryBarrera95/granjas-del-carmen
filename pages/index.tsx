import Head from "next/head";

import { gql, useQuery } from "@apollo/client";
import { Rabbit } from "@prisma/client";

const AllRabbitsQuery = gql`
  query {
    Rabbits {
      id
      name
      image
      gender
      createdBy {
        id
      }
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(AllRabbitsQuery);

  console.log(data);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Head>
        <title>Granjas del Carmen</title>
        <link rel="icon" href="/farm.png" />
      </Head>
      <div className="bg-red-900 text-white my-10 mx-10 p-10 rounded-xl">
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
      <div className="items-center mx-auto grid grid-flow-col">
        {/* <h1 className="grid grid-cols-2 text-2xl font-bold text-center my-3">
          HOME PAGE
        </h1> */}
        {!error &&
          data.Rabbits.map((rabbit: Rabbit) => (
            <li key={rabbit.id} className="list-none rounded-lg bg-white m-5">
              <img className="shadow-sm w-96" src={rabbit.image ?? ""} />
              <p className="text-xl font-bold">{rabbit.name}</p>
              <p className="text-md">{rabbit.gender}</p>
              <p className="text-gray-600">{rabbit.id}</p>
            </li>
          ))}
      </div>
    </div>
  );
}
