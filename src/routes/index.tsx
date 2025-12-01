import { useAuth } from "../hooks/useAuth"

import { Loading } from "../components/Loading"
import { AuthRoutes } from "./auth-routes"
import { AdminRoutes } from "./admin-routes"
import { ClientRoutes } from "./client-routes"
import { TechniciansRoutes } from "./technicians-routes"

export function AppRoutes() {
  const { session, isLoading } = useAuth()

  function Route() {
    switch (session?.user.role) {
      case "admin":
        return <AdminRoutes />
      case "technician":
        return <TechniciansRoutes />
      case "client":
        return <ClientRoutes />
    
      default:
        return <AuthRoutes />
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Route />
  )
}
