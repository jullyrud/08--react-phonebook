
import { NavLinkStyled} from "../UserMenu/UserMenu.styled"


export const UserNavigation = () => {

    return (
        <>
        <NavLinkStyled to="/register">
        Register
        </NavLinkStyled>
        <NavLinkStyled  to="/login">
        Log In
        </NavLinkStyled>
        </>
    )
}