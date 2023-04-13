import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const UserMenuWrap = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid white;
    align-items: center
` 
export const Name = styled.p`
font-size: 18px;

 margin: 5px 0;
` 
export const Tittle = styled.h2`
color: white;
` 
export const NameAndBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
` 
export const UserInformationWrap = styled.div`
max-width: 120px;
text-align: center;
` 
export const NavLinkStyled = styled(NavLink)`
text-decoration:none;
color: white; 
font-size: 22px;
margin-bottom: 5px; 
&:hover {
    color: grey;
  }
`
