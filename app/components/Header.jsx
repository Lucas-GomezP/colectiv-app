import NavLink from "../ui/NavLink";

export default function Header() {
  return (
    <header className="flex flex-col py-2 border-b">
      <h1 className="text-3xl text-center">Colectiv App</h1>
      <p className="text-center">Aplicación de recorridos de transporte público</p>
      <nav className="mt-4">
        <ul className="flex md:flex-row flex-col items-center justify-center gap-2">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/history">Historial de cambios</NavLink>
          <NavLink href="/about">Información</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
        </ul>
      </nav>
    </header>
  )
}
