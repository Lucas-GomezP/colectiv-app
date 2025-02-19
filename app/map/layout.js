import Aside from "../components/Aside";

export default function MapLayout({ children }) {
  return (
    <section className="flex h-full">
      <Aside />
      {children}
    </section>
  );
}