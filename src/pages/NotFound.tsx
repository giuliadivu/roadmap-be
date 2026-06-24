import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <p className="text-5xl font-bold text-slate-300 dark:text-slate-700">
        404
      </p>
      <h1 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
        Pagina non trovata
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        La sezione che cerchi non esiste (ancora).
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        Torna alla home
      </Link>
    </div>
  )
}
