import { Routes, Route } from "react-router"

import { Technicians } from "../pages/Technicians"
import { NotFound } from "../pages/NotFound"
import { AppLayout } from "../layouts/AdminLayout"

export function TechniciansRoutes() {
  return (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Technicians />} />
    </Route>
    
    <Route path="*" element={<NotFound />} />
    </Routes>
  )

}