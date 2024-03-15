import React from "react";
import { Rabbit } from "../../prisma/generated/client";

const tableHeaders = [
  { name: "Foto", key: "image" },
  { name: "Nombre", key: "name" },
  { name: "Sexo", key: "gender" },
  { name: "Madre", key: "mother" },
  { name: "Padre", key: "father" },
];

const ParentsAnimalsTable = ({
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
        <table className="table-auto mx-auto text-center bg-white border-none rounded-lg">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th className="p-2" key={header.key}>
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rabbit: Rabbit) => (
              <tr key={rabbit.id}>
                {tableHeaders.map((header) => (
                  <td key={header.key} className="px-2">
                    {header.key === "image" ? (
                      <img
                        className="w-40 my-2"
                        src={String(rabbit[header.key as keyof Rabbit]) ?? ""}
                      />
                    ) : String(rabbit[header.key as keyof Rabbit]) !==
                      "undefined" ? (
                      String(rabbit[header.key as keyof Rabbit])
                    ) : (
                      "Dato inexistente"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ParentsAnimalsTable;
