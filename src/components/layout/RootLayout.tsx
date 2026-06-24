import { Outlet } from 'react-router'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function RootLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-8">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
