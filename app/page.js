"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomSubstackWidget from "../components/CustomSubstrackWidget";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const redirect = () => {
    router.push("https://felixramallo.substack.com/");
  };
  const suscribe = () => {
    const data = {
      first_url: "https://felixramallo.substack.com/",
      first_referrer: "",
      current_url: "https://felixramallo.substack.com/",
      current_referrer: "",
      referral_code: "",
      source: "cover_page",
      referring_pub_id: "",
      additional_referring_pub_ids: "",
      email: input,
    };
    fetch("https://felixramallo.substack.com/api/v1/free", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        // Aquí puedes manejar la respuesta exitosa de la solicitud
      })
      .catch((error) => {
        console.error("Error:", error);
        // Aquí puedes manejar cualquier error que ocurra durante la solicitud
      });
  };
  return (
    <>
      <div className="flex flex-col text-center h-screen w-screen">
        <div className=" mt-40 pb-10">
          <h1 className=" text-6xl pb-2 pt-4">Felix Ramallo</h1>
          <h3 className=" text-2xl mx-3">
            Producto, innovación, medios y cultura digital
          </h3>
        </div>
        <div className="flex items-center gap-2 w-fit mx-auto text-center pb-28">
          <h3 className=" text-lg">Suscribite al newsletter aca 👉</h3>
          <button
            className=" bg-red-600 py-1 px-4 border-2 border-red-600 rounded-md text-white"
            onClick={redirect}
          >
            Suscribite
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
{
  /* <CustomSubstackWidget /> */
}
{
  /* <div className="border-red-600">
          <input
            type="email"
            value={input}
            placeholder="Escribe tu correo electrónico"
            className=" border-2 rounded-tl-md rounded-bl-md border-red-600 px-5 py-2 focus:outline-none text-gray-500 w-96"
            onChange={handleChange}
          ></input>
          <button
            onClick={suscribe}
            className=" bg-red-600 py-2 px-5 border-2 border-red-600 rounded-tr-md rounded-br-md text-white"
          >
            Suscribir
          </button>
        </div> */
}
