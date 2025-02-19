import Image from "next/image";
import Link from "next/link";
import puntaAltaMap from "@/public/punta-alta-map-ss.png";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl text-center">Colectiv App</h1>
      <p className="text-center">Aplicación de recorridos de transporte público</p>
      <Link
        href="/map"
        className="flex items-center gap-2 border border-gray-300 bg-gray-200 hover:bg-white transition-colors text-black rounded-md p-4 mt-4"
      >
        <Image
          src={puntaAltaMap}
          alt="Mapa de Punta Alta"
          width={200}
          height={200}
          className="mx-auto"
        />
        <p className="text-center text-xl font-bold">Ver mapa de Coronel Rosales</p>
      </Link>
    </section>
  );
}
