import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-2 flex flex-col h-full justify-between">
      <Header />
      <main className="flex flex-col items-center overflow-y-auto h-full mt-4 gap-4">
        <h2 className="text-2xl mb-4">Seccion de contacto</h2>
        <p>
          A continuacion se brindara un formulario de google forms para que pueda enviar sus sugerencias tanto sean de correcciones de recorridos como de paradas, asi tambien como de sugerencias para mejorar el sitio web.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScmFkh2iv52iSrFnF9bgfdp0INVp40Pi2MKkg309kvzYWNC6A/viewform?usp=dialog" target="_blank" className="text-xl underline text-blue-500 cursor-pointer bg-gray-200 p-2 rounded-md font-bold">Formulario de Peticiones</a>
        <br />
        <br />
        <br />
        <p>Contacto personal:</p>
        <a href="https://github.com/Lucas-GomezP" target="_blank" className="text-xl underline text-blue-500 cursor-pointer bg-gray-200 p-2 rounded-md font-bold">GitHub</a>
        <a href="https://www.linkedin.com/in/lucas-adrian-gomez-pe%C3%B1a-2157541bb/" target="_blank" className="text-xl underline text-blue-500 cursor-pointer bg-gray-200 p-2 rounded-md font-bold">Linkedin</a>
      </main>
      <Footer />
    </section>
  );
}