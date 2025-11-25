import { Routes, Route } from "react-router-dom"


import { Tickets } from "../pages/Tickets"
import { NotFound } from "../pages/NotFound"
import { TechLayout } from "../layouts/TechLayout"
import { TicketsDetails } from "../pages/TicketsDetails"

export function TechniciansRoutes(){
  return (
    <Routes>
       <Route path="/" element={<TechLayout />}>
       <Route index element={<Tickets />} />
       <Route path="tickets/:id" element={<TicketsDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )   
}