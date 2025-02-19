import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 mt-4 border-t py-2">
      <Link href="https://github.com/Lucas-GomezP/colectiv-app" target="_blank" className="flex items-center gap-2"><GitHubIcon /> Repositorio del proyecto</Link>
    </footer>
  )
}