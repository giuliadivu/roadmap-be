import { Link } from 'react-router'

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold text-slate-900">
          Backend Roadmap{' '}
          <span className="text-indigo-600">· Approfondimenti</span>
        </Link>
        <a
          href="https://roadmap.sh/backend"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-500 hover:text-slate-900"
        >
          roadmap.sh ↗
        </a>
      </div>
    </header>
  )
}
