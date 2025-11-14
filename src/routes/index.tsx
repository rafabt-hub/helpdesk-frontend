import { Routes, Route } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/Signup"
import { NewTech } from "../pages/NewTech"
import { Clients } from "../pages/Clients"
import { Tickets } from "../pages/Tickets"
import { Services } from "../pages/Services"
import { NotFound } from "../pages/NotFound"
import { EditTech } from "../pages/EditTech"
import { AppLayout } from "../layouts/AppLayout"
import { AuthLayout } from "../layouts/AuthLayout"
import { Technicians } from "../pages/Technicians"
import { TicketsDetails } from "../pages/TicketsDetails"

// Mude para 'true' para testar a rota de admin e false para telas de login
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
        <Route path="tickets/:id" element={<TicketsDetails />} /> 
        <Route path="technicians" element={<Technicians />} />
        <Route path="/technicians/:email/edit" element={<EditTech />} />
        <Route path="/technicians/new" element={<NewTech />} />
        <Route path="clients" element={<Clients />} />
        <Route path="services" element={<Services />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}