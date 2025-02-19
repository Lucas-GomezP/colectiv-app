import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="px-2 py-1 rounded-md bg-gray-200 text-black font-bold hover:bg-white transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}