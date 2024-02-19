import { Outlet } from "react-router-dom"

import Header from "../Components/Header"

function RootLayout(){
    return(
     <>  
     <Header/> 
     <Outlet/>
    </>)
}

export default RootLayout