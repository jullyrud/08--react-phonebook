
import { Routes, Route} from "react-router-dom"
import { Contacts } from "../pages/Contacts"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"

import { SharedLayout } from "./AppBar/sharedLayout/SharedLayout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { refreshUser } from "reduce/auth/authOperations"
import { selectIsRefreshing } from "reduce/auth/authSelectors"

export function App() {
    const dispatch = useDispatch()
    const isRefreshing = useSelector(selectIsRefreshing)

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])

return !isRefreshing && (
  
      <Routes>
            <Route path="/" element={<SharedLayout/> }>
                <Route index element={<Contacts />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </ Route>
        </Routes>
    ) 

}