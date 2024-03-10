import React from "react";
import { Rabbit } from "@prisma/client";

const AnimalsTable = ({
  data,
  error = null,
  loading = false,
}: {
  data: any;
  error: any;
  loading: any;
}) => {
  return (
    <div className="items-center mx-auto">
      {!error && !loading && (
        <table className="table-auto mx-auto border text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rabbit: Rabbit) => (
              <tr key={rabbit.id}>
                <td>{rabbit.id}</td>
                <td>{rabbit.name}</td>
                <td className="px-4">{rabbit.gender}</td>
                <td>
                  <img className="shadow-sm w-40" src={rabbit.image ?? ""} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AnimalsTable;
