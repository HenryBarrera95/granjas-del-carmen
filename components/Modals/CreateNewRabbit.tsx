import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_RABBIT } from "../../utils/graphql/mutations";
import UploadFile from "../UploadImage";
import axios from "axios";

const CreateNewRabbit = ({ handleCloseModal }: { handleCloseModal: any }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [createRabbit] = useMutation(CREATE_RABBIT);

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    // Subir el archivo
    const formData = new FormData();
    formData.append("file", selectedFile);
    await axios.post(
      "https://granjasdelcarmen.com/pages/api/storage-b2/images/upload",
      formData
    );

    // Obtener la URL del archivo subido
    const response = await axios.get(
      `https://granjasdelcarmen.com/pages/api/storage-b2/images/${selectedFile.name}`
    );
    const fileUrl = response.data.authorizationToken;

    // Pasar la URL del archivo a la mutación createRabbit
    createRabbit({ variables: { name, breed, weight, age, image: fileUrl } });
  };

  return (
    <div>
      <h2>Create a new rabbit</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          <label>Breed</label>
          <input
            value={breed}
            onChange={({ target }) => setBreed(target.value)}
          />
        </div>
        <div>
          <label>Weight</label>
          <input
            value={weight}
            onChange={({ target }) => setWeight(target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input value={age} onChange={({ target }) => setAge(target.value)} />
        </div>
        <UploadFile onFileSelect={setSelectedFile} />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default CreateNewRabbit;
