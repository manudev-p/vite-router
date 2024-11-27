import React from 'react'
import ProtectedRoot from './auth/ProtectedRoot'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Define the structure of a page module
type PageModule = {
  default: React.ComponentType
  loader?: () => Promise<any>
  action?: () => Promise<any>
  ErrorBoundary?: React.ComponentType
}

// Define the structure of a route
type Route = {
  path: string
  Element: React.ComponentType
  loader?: () => Promise<any>
  action?: () => Promise<any>
  ErrorBoundary?: React.ComponentType
}

// Import all page modules eagerly
const pages: Record<string, PageModule> = import.meta.glob('./pages/**/*.tsx', {
  eager: true
})

// Define restricted routes
const restricted: string[] = [
  '/dashboard',
  '/dashboard/analytics',
  '/dashboard/:id'
]

// Function to create a route list from the imported page modules
const createRouteList = (pages: Record<string, PageModule>): Route[] => {
  const routes: Route[] = []

  for (const path of Object.keys(pages)) {
    // Extract file name from path
    const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1]
    if (!fileName) continue

    // Normalize the path, replacing "$" with ":" and removing "/index"
    const normalizedPathName = fileName.includes('$')
      ? fileName.replace('$', ':')
      : fileName.replace(/\/index/, '')

    routes.push({
      path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
      Element: pages[path].default,
      loader: pages[path]?.loader,
      action: pages[path]?.action,
      ErrorBoundary: pages[path]?.ErrorBoundary
    })
  }

  return routes
}

// Main App component
const App: React.FC = () => {
  const routes = createRouteList(pages)

  // Create a router with route mapping
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
