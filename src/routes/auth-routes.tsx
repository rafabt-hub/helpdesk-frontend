import { Routes, Route } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/Signup"
import { NotFound } from "../pages/NotFound"
import { AuthLayout } from "../layouts/AuthLayout"

export function AuthRoutes(){
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
  )
}