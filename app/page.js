import CustomSubstackWidget from "../components/CustomSubstrackWidget";

export default function Home() {
  return (
    <>
      <div className="flex flex-col text-center h-screen w-screen">
        <div className=" mt-24 pb-10">
          <h1 className=" text-6xl pb-2 pt-4">Felix Ramallo</h1>
          <h3 className=" text-2xl">
            Producto, innovación, medios y cultura digital
          </h3>
        </div>
        <h3 className=" text-2xl pb-2">Suscribite al Newsletter</h3>
        <CustomSubstackWidget />
      </div>
    </>
  );
}
