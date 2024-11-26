import ProtectedRoot from './auth/ProtectedRoot'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

type PageModule = {
  default: React.ComponentType
  loader?: () => Promise<any>
  action?: () => Promise<any>
  ErrorBoundary?: React.ComponentType
}

type Route = {
  path: string
  Element: React.ComponentType
  loader?: () => Promise<any>
  action?: () => Promise<any>
  ErrorBoundary?: React.ComponentType
}

const restricted: string[] = [
  '/dashboard',
  '/dashboard/analytics',
  '/dashboard/:id'
]

const App: React.FC = () => {
  const routes: Route[] = []

  const pages: Record<string, PageModule> = import.meta.glob(
    './pages/**/*.tsx',
    { eager: true }
  )

  for (const path of Object.keys(pages)) {
    // get only files inside /pages
    const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1]
    if (!fileName) continue

    // change any $ to : to comply with reactRouter parameters
    const normalizedPathName = fileName.includes('$')
      ? fileName.replace('$', ':')
      : fileName.replace(/\/index/, '')

    routes.push({
      // if index on pages root make it home
      path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
      Element: pages[path].default,
      loader: pages[path]?.loader,
      action: pages[path]?.action,
      ErrorBoundary: pages[path]?.ErrorBoundary
    })
  }

  const router = createBrowserRouter(
    routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: restricted.includes(rest.path) ? (
        <ProtectedRoot>
          <Element />
        </ProtectedRoot>
      ) : (
        <Element />
      ),
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> })
    }))
  )

  return <RouterProvider router={router} />
}

export default App
