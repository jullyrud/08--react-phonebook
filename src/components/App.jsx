
import { Routes, Route} from "react-router-dom"
import { Contacts } from "../pages/Contacts"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"

import { SharedLayout } from "./sharedLayout/SharedLayout"


export function App() {


return (
  
      <Routes>
            <Route path="/" element={<SharedLayout/> }>
                <Route index element={<Contacts />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </ Route>
        </Routes>
    ) 

}