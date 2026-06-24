import { Link } from 'react-router'
import { ThemeToggle } from '../ThemeToggle'

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-lg font-bold text-slate-900 dark:text-white"
        >
          Backend Roadmap{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            · Approfondimenti
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="https://roadmap.sh/backend"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            roadmap.sh ↗
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
