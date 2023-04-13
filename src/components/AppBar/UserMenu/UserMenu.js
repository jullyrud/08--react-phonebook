import { UserMenuWrap, NameAndBtnWrap, Tittle, NavLinkStyled} from "./UserMenu.styled"
// import { IoMdContacts } from "react-icons/io";
import { UserInformation } from "components/AppBar/UserInformation/UserInformation";
import { UserNavigation } from "components/AppBar/UserNavigation/UserNavigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "reduce/auth/authSelectors";


export const UserMenu = () => {
const isLogin = useSelector(selectIsLoggedIn)
 
    return (
        <UserMenuWrap>

            {/* <IoMdContacts size='5em' /> */}
            <NavLinkStyled to="/contacts"><Tittle>Phonebook</Tittle></NavLinkStyled>
            <NameAndBtnWrap>
                 { isLogin ?  <UserInformation /> : <UserNavigation />}
            </NameAndBtnWrap>
        </ UserMenuWrap>
        
    )
}

