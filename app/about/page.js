import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoBox from "../ui/InfoBox";
import OrdenanzaView from "../ui/OrdenanzaView";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-2 flex flex-col h-full justify-between">
      <Header />
      <main className="flex flex-col items-center overflow-y-auto h-full mt-4">
        <h2 className="text-2xl mb-4">Informacion sobre el proyecto</h2>
        <div>
        <InfoBox title="¿De donde se obtiene la información de los recorridos y las paradas?">
          <p><i>Toda la información tanto de los recorridos como de las paradas esta extraida de la ordenanza 4.236 de la ciudad de Punta Alta</i></p>
          <OrdenanzaView />
        </InfoBox>
        </div>
      </main>
      <Footer />
    </section>
  );
}