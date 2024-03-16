import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import UploadFile from "../UploadImage";
import axios from "axios";
import GenericModal from "./GenericModal";
import { CREATE_RABBIT } from "../../utils/graphql/mutations";

type FormData = {
  name: String;
  gender: String;
  birthDate: Date;
};

const CreateNewRabbit = ({ handleCloseModal }: { handleCloseModal: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [createRabbit] = useMutation(CREATE_RABBIT);
  console.log(selectedFile, "selectedFile");

  const onSubmit = async (data: FormData) => {
    console.log(data);
    if (!selectedFile) {
      return;
    }

    // Subir el archivo
    const formData = new FormData();
    console.log(formData, "formData");

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

    createRabbit({
      variables: { ...data, image: fileUrl, userId: "yourUserId" },
    });
  };

  return (
    <GenericModal onClose={handleCloseModal} title="Modal Title">
      <h2>Create a new rabbit</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Sexo</label>
          <input type="" {...register("gender", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        {/* <div>
          <label>Peso</label>
          <input name="gender" ref={register({ required: true })} />
          {errors.gender && <span>This field is required</span>}
        </div> */}
        <div>
          <label>Fecha de nacimiento</label>
          <input type="date" {...register("birthDate", { required: true })} />
          {errors.birthDate && <span>This field is required</span>}
        </div>
        <input
          type="file"
          onChange={(e) =>
            setSelectedFile((e.target as HTMLInputElement).files?.[0] || null)
          }
        />
        <button type="submit">Send</button>
      </form>
    </GenericModal>
  );
};

export default CreateNewRabbit;
