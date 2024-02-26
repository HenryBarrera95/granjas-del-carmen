"use client";
import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();
  return (
    <div className="grid-cols-2">
      <h1 className="text-white text-4xl text-center">Granjas del Carmen</h1>
      <section className=" mx-auto grid-cols-2 space-y-3 space-x-3">
        <button
          className="text-white bg-blue-950 p-3 rounded-lg mx-auto col-span-1"
          onClick={() => router.push("/auth/login")}
        >
          Ingresar
        </button>
        <button
          className="text-white bg-blue-950 p-3 rounded-lg mx-auto col-span-1"
          onClick={() => router.push("/auth/register")}
        >
          Registrarse
        </button>
      </section>
    </div>
  );
}

export default HomePage;
