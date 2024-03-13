import { useMutation } from "@apollo/client";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Gender } from "@prisma/client";

import GenericModal from "./GenericModal";
import { CreateRabbitMutation } from "../../utils/grphql/mutations";
import UploadImage from "../UploadImage";
import { uploadFile } from "../../pages/api/storage-b2/images";

type FormValues = {
  name: string;
  image: string;
  userId: string;
  gender: Gender;
  birthDate: Date;
};

type CreateNewRabbitProps = {
  handleCloseModal: () => void;
};

const CreateNewRabbit = ({ handleCloseModal }: CreateNewRabbitProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  console.log(selectedFile, uploadedFile);

  const [createRabbit, { loading, error }] = useMutation(CreateRabbitMutation, {
    onCompleted: () => reset(),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (selectedFile) {
      uploadFile(selectedFile);
    }
    const { name, image, userId, gender, birthDate } = data;
    const variables = {
      name,
      image,
      userId: "39efdcc0-9b07-4698-a0de-087153344f64",
      gender,
      birthDate: new Date(birthDate),
    };

    // console.log(variables);

    try {
      toast.promise(createRabbit({ variables }), {
        loading: "Creating new Rabbit..",
        success: "Rabbit successfully created!🎉",
        error: `Something went wrong 😥 Please try again -  ${error}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GenericModal
      title="Create a new rabbit"
      onClose={() => {
        handleCloseModal();
      }}
      closeOnOutsideClick={false}
    >
      <div className="mx-auto max-w-md">
        <Toaster />
        {/* <h1 className="text-3xl font-medium my-5">Create a new rabbit</h1> */}
        <form
          className="grid grid-cols-1 gap-y-6 shadow-lg p-8 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="block">
            <span className="text-primary">Name</span>
            <input
              placeholder="Name"
              {...register("name", { required: true })}
              name="name"
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 block">Foto</span>
            <UploadImage />
          </label>

          <label className="block">
            <span className="text-gray-700">Gender</span>
            <select
              {...register("gender", { required: true })}
              name="gender"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value={Gender.MALE}>Macho</option>
              <option value={Gender.FEMALE}>Hembra</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">BirthDate</span>
            <input
              placeholder="birthDate"
              {...register("birthDate", { required: true })}
              name="birthDate"
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>

          <button
            disabled={loading}
            type="submit"
            className="my-4 capitalize bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="w-6 h-6 animate-spin mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
                Creating...
              </span>
            ) : (
              <span>Create Rabbit</span>
            )}
          </button>
        </form>
      </div>
    </GenericModal>
  );
};

export default CreateNewRabbit;
