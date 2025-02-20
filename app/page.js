import Image from "next/image";
import Link from "next/link";
import puntaAltaMap from "@/public/punta-alta-map-ss.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto px-2 flex flex-col h-full justify-between">
      <Header />
      <main className="flex flex-col items-center overflow-y-auto h-full mt-4">
        <Link
          href="/map"
          className="flex items-center gap-2 border border-gray-300 bg-gray-200 hover:bg-white transition-colors text-black rounded-md p-4 mt-4"
        >
          <div className="size-36">
            <Image
              src={puntaAltaMap}
              alt="Mapa de Punta Alta"
              width={250}
              height={250}
              className="object-cover h-full w-full rounded-md"
              priority
            />
          </div>
          <p className="text-center text-xl font-bold">Ver mapa de Coronel Rosales</p>
        </Link>
      </main>
      <Footer />
    </section>
  );
}
