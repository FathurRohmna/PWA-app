import React from "react"
import { Navigate } from "react-router-dom"

interface Props {
  isAllowance: boolean
  redirectPath: string
  children: React.ReactNode | React.ReactChildren
}

export const ProtectedRoute = ({
  isAllowance,
  redirectPath,
  children
}: Props) => {
  if (!isAllowance) {
    return <Navigate to={redirectPath} replace />
  }

  return (
    <>
      {children}
    </>
  )
}