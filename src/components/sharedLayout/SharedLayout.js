import { Outlet } from "react-router-dom";
import { Wraper } from "./SharedLayout.styled";

import { UserMenu } from "components/UserMenu/UserMenu";

export const SharedLayout = () => {
    return (
  
        <Wraper>
        <UserMenu />
         
        <Outlet />
        </Wraper>
   
 )
}