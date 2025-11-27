import { Loading } from "../components/Loading"

import { AuthRoutes } from "./auth-routes"
import { AdminRoutes } from "./admin-routes"
import { ClientRoutes } from "./client-routes"
import { TechniciansRoutes } from "./technicians-routes"

const isLoading = false

const session = {
  user: {
    role: "",
  },
}

export function AppRoutes() {
  function Route() {
    switch (session.user.role) {
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
