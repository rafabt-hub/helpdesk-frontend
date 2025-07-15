import { Routes, Route } from "react-router"

import { Tickets } from "../pages/Tickets"
import { NotFound } from "../pages/NotFound"
import { AppLayout } from "../layouts/AppLayout"
import { Technicians } from "../pages/Technicians"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
       <Route path="/" element={<Tickets />} />
       <Route path="/technicians" element={<Technicians />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}