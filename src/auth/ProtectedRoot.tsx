import React, { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// A function that determines if the user is authenticated
const isAuthenticated = (): boolean => {
  // Replace with your actual authentication logic
  return Boolean(localStorage.getItem('authToken'))
}

// Define the props type for the ProtectedRoot component
interface ProtectedRootProps {
  children: ReactNode
}

const ProtectedRoot: React.FC<ProtectedRootProps> = ({ children }) => {
  const location = useLocation()

  // Redirect to the login page or another route if the user is not authenticated
  if (!isAuthenticated())
    return <Navigate to="/login" state={{ from: location }} replace />

  // If authenticated, render the protected children
  return <>{children}</>
}

export default ProtectedRoot
