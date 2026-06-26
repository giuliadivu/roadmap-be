import { Outlet } from 'react-router'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function RootLayout() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />
      <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 gap-8 px-4">
        <Sidebar />
        <main className="min-w-0 flex-1 overflow-y-auto py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
