import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { AdminRoutes } from "./AdminRoutes";

// Mude para 'false' para ver a tela de login.
// Mude para 'true' para ver o painel do admin.
const isAuthenticated = true; 

export function Routes() {
  return (
    <BrowserRouter>
      {isAuthenticated ? <AdminRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}