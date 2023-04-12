import { NavLink } from 'react-router-dom';

export const UserNavigation = () => {

    return (
        <>
        <NavLink to="/register">
        Register
        </NavLink>
        <NavLink  to="/login">
        Log In
        </NavLink>
        </>
    )
}