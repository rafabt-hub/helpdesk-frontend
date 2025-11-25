import { Routes, Route } from "react-router-dom"

import { Tickets } from "../pages/Tickets"
import { NotFound } from "../pages/NotFound"
import { NewTicket } from "../pages/NewTicket"
import { ClientLayout } from "../layouts/ClientLayout"
import { TicketsDetails } from "../pages/TicketsDetails"

export function ClientRoutes(){
  return (
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Tickets />} />
          <Route path="tickets/:id" element={<TicketsDetails />} />
          <Route path="tickets/new" element={<NewTicket />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}