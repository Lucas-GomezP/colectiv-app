import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoBox from "../ui/InfoBox";
import OrdenanzaView from "../ui/OrdenanzaView";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-2 flex flex-col h-full justify-between">
      <Header />
      <main className="flex flex-col items-center overflow-y-auto h-full mt-4 gap-4">
        <h2 className="text-2xl mb-4">Informacion sobre el proyecto</h2>
        <InfoBox title="Espiritu del proyecto">
          <p>
            Este proyecto fue creado con el fin de ayudar a la comunidad de la ciudad de Punta Alta a tener un mejor acceso a la informacion de los recorridos y paradas de transporte publico.
            <br />
            <br />
            Todo el proyecto es realizado sin fines de lucro y por una sola persona.
            <br />
            <br />
            Cualquier propuesta de mejora, modificacion de recorridos o paradas puede ser enviada a traves del formulario en la seccion de contacto. Toda sugerencia es bienvenida.
          </p>
        </InfoBox>
        <InfoBox title="¿Como se crearon los recorridos y paradas?">
          <p>
            El archivo con la informacion tanto de los recorridos como de las paradas fue creado con un proyecto paralelo a este.
            <br />
            <br />
            Ese proyecto es el {`"Creador de recorridos"`} observar en los siguientes enlaces.
            <br />
            <br />
          </p>
          <div className="flex flex-col gap-2 items-center">
            <a href="https://github.com/Lucas-GomezP/create-routes-app" target="_blank" className="underline cursor-pointer text-blue-500">Repositorio del proyecto</a>
            <a href="https://route-create-app.vercel.app/" target="_blank" className="underline cursor-pointer text-blue-500">Creador de rutas (pagina del proyecto)</a>
          </div>
        </InfoBox>
        <InfoBox title="¿De donde se obtiene la información de los recorridos y las paradas?">
          <p><i>Toda la información tanto de los recorridos como de las paradas esta extraida de la ordenanza 4.236 de la ciudad de Punta Alta</i></p>
          <OrdenanzaView />
        </InfoBox>
      </main>
      <Footer />
    </section>
  );
}