import React from "react"
import SideBar from "../components/SideBar"
import { Outlet } from "react-router-dom"
const RootLayout = () => {
    return (
        <div >
            <div className="main">
                <SideBar />
                <div className="container">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}
export default RootLayout