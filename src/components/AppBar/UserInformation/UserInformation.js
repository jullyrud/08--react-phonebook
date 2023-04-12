import { Name, UserInformationWrap} from "../UserMenu/UserMenu.styled"
import { logOut } from 'reduce/auth/authOperations'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { selectUser } from "reduce/auth/authSelectors"

export const UserInformation = () => {
    const dispatch = useDispatch()  
    const {name} = useSelector(selectUser)
    
    const onHandleClick = (evt) => {
     dispatch(logOut())
}
    return (
        <UserInformationWrap>
            <Name>hello, {name}</Name>
            <button onClick={onHandleClick}>Logout</button>
        </UserInformationWrap>
    )
}