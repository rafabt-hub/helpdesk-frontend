import { Routes, Route } from "react-router-dom"

import { AppLayout } from "../layouts/AppLayout"
import { AuthLayout } from "../layouts/AuthLayout"
import { Tickets } from "../pages/Tickets"
import { Technicians } from "../pages/Technicians"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/Signup"
import { NotFound } from "../pages/NotFound"

// Mude para 'true' para testar a rota de admin.
const isAuthenticated = true; 

export function AppRoutes() {
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
         <Route index element={<SignIn />} />
         <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Tickets />} /> 
        <Route path="technicians" element={<Technicians />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}