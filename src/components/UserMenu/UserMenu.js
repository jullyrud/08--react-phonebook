import { UserMenuWrap, Name, NameAndBtnWrap, Btn} from "./UserMenu.styled"
import { IoMdContacts } from "react-icons/io";

export const UserMenu = () => {
    return (
        <UserMenuWrap>
            <IoMdContacts size='5em' />
               <h1>Phonebook</h1>
            <NameAndBtnWrap>
            <Name>mango@mail.com</Name>
            <Btn>Logout</Btn>
        </NameAndBtnWrap>
        </ UserMenuWrap>
        
    )
}

