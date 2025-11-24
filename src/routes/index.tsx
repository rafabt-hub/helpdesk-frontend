import { Routes, Route, Navigate } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/Signup"
import { Clients } from "../pages/Clients"
import { Tickets } from "../pages/Tickets"
import { Services } from "../pages/Services"
import { NotFound } from "../pages/NotFound"
import { AdminLayout } from "../layouts/AdminLayout"
import { AuthLayout } from "../layouts/AuthLayout"
import { TechLayout } from "../layouts/TechLayout"
import { Technicians } from "../pages/Technicians"
import { TechProfile } from "../pages/TechProfile"
import { ClientLayout } from "../layouts/ClientLayout"
import { TicketsDetails } from "../pages/TicketsDetails"
import { NewTicket } from "../pages/NewTicket"


function getUserRole() {
   return "admin"; 
  // return "tech";
  // return "client";

  return null;
}

export function AppRoutes() {
  const role = getUserRole();

  if (!role) {
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login/admin" element={<SignIn userType="admin" />} />
          <Route path="login/tech" element={<SignIn userType="tech" />} />
          <Route path="login/client" element={<SignIn userType="client" />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  if (role === "admin") {
    return (
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Tickets />} />
          <Route path="tickets/:id" element={<TicketsDetails />} />
          <Route path="technicians" element={<Technicians />} />
          <Route path="technicians/:email" element={<TechProfile />} />
          <Route path="technicians/new" element={<TechProfile />} />
          <Route path="clients" element={<Clients />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  if (role === "tech") {
    return (
      <Routes>
        <Route path="/" element={<TechLayout />}>
          <Route index element={<Tickets />} />
          <Route path="tickets/:id" element={<TicketsDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  if (role === "client") {
    return (
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Tickets />} />
          <Route path="tickets/:id" element={<TicketsDetails />} />
          <Route path="tickets/new" element={<NewTicket />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return <NotFound />;
}
