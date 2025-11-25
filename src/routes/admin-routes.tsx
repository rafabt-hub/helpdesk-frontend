import { Routes, Route } from "react-router-dom"

import { Clients } from "../pages/Clients"
import { Tickets } from "../pages/Tickets"
import { NotFound } from "../pages/NotFound"
import { Services } from "../pages/Services"
import { TechProfile } from "../pages/TechProfile"
import { AdminLayout } from "../layouts/AdminLayout"
import { Technicians } from "../pages/Technicians"
import { TicketsDetails } from "../pages/TicketsDetails"

export function AdminRoutes(){
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
  )
}

