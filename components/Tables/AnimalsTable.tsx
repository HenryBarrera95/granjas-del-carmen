import React from "react";
import { Rabbit } from "@prisma/client";

const AnimalsTable = ({
  data,
  error,
  loading,
}: {
  data: any;
  error: any;
  loading: any;
}) => (
  <div className="items-center mx-auto grid grid-flow-col">
    {!error &&
      !loading &&
      data.Rabbits.map((rabbit: Rabbit) => (
        <li key={rabbit.id} className="list-none rounded-lg bg-white m-5">
          <img className="shadow-sm w-96" src={rabbit.image ?? ""} />
          <p className="text-xl font-bold">{rabbit.name}</p>
          <p className="text-md">{rabbit.gender}</p>
          <p className="text-gray-600">{rabbit.id}</p>
        </li>
      ))}
  </div>
);

export default AnimalsTable;
