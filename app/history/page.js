import Footer from "../components/Footer";
import Header from "../components/Header";
import DATA from "../lib/data.json";

export default function HistoryPage() {
  const newChanges = DATA[0].changes
  const sortedChanges = newChanges.sort((a, b) => new Date(b.date) - new Date(a.date))
  return (
    <section className="max-w-4xl mx-auto px-2 flex flex-col h-full justify-between">
      <Header />
      <main className="flex flex-col items-center overflow-y-auto h-full mt-4">
        <h2 className="text-2xl mb-4">Historial de cambios</h2>
        <div className="flex flex-col gap-4">
          {sortedChanges.map((change) => {
            const date = new Date(change.date).toLocaleDateString()
            return (
              <div key={change.id} className="flex flex-col gap-4 border-y">
                <h3 className="font-semibold text-center">Cambio realizado el {date}</h3>
                <p className="px-2">{change.coment}</p>
              </div>
          )})}
        </div>
      </main>
      <Footer />
    </section>
  );
}