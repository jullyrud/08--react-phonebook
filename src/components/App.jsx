
import { Routes, Route} from "react-router-dom"
import { Contacts } from "../pages/Contacts"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"

import { SharedLayout } from "./AppBar/sharedLayout/SharedLayout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { refreshUser } from "reduce/auth/authOperations"
import { selectIsRefreshing } from "reduce/auth/authSelectors"

import { PrivateRoute } from './PrivateeRoute';
import { RestrictedRoute } from './RestrictedRoute';


export function App() {
    const dispatch = useDispatch()
    const isRefreshing = useSelector(selectIsRefreshing)

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])

return !isRefreshing && (
  
    <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route  path="/contacts" element={ <PrivateRoute redirectTo="/login" component={<Contacts />} />} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}/>
            <Route path="/login" element={ <RestrictedRoute redirectTo="/contacts" component={<Login />} />}/>
        </ Route>
    </Routes>
    ) 

}