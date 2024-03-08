import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { getSession } from "@auth0/nextjs-auth0";
import type { GetServerSideProps } from "next";
import { CreateRabbitMutation } from "../../utils/grphql/mutations";
import { Gender, Session } from "@prisma/client";

type FormValues = {
  name: string;
  image: string;
  userId: string;
  gender: Gender;
  birthDate: Date;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/login",
      },
      props: {},
    };
  }

  const user = await prisma.user.findUnique({
    select: {
      email: true,
      role: true,
    },
    where: {
      email: session.user.email,
    },
  });

  if (!user || user.role !== "ADMIN") {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [createRabbit, { loading, error }] = useMutation(CreateRabbitMutation, {
    onCompleted: () => reset(),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // console.log("data submit", data);
    const { name, image, userId, gender, birthDate } = data;
    const variables = {
      name,
      image,
      userId: "39efdcc0-9b07-4698-a0de-087153344f64",
      gender,
      birthDate: new Date(birthDate),
    };
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
    <div className="container mx-auto max-w-md py-12">
      <Toaster />
      <h1 className="text-3xl font-medium my-5">Create a new rabbit</h1>
      <form
        className="grid grid-cols-1 gap-y-6 shadow-lg p-8 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            placeholder="Name"
            {...register("name", { required: true })}
            name="name"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Image</span>
          <input
            placeholder="Image URL"
            {...register("image", { required: true })}
            defaultValue={"https://via.placeholder.com/150"}
            name="image"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
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
          className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
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
  );
};

export default Admin;
