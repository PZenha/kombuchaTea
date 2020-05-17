import React, { FC } from "react"
import { Button } from "antd"
import MainLayout from "../../layout/mainLayout"
import "./home.css"

const Home: FC = () => {
    return (
        <>
            <div className="home" >
                <div className="title">
                    <span>Kombucha</span>
                </div>
            </div>
        </>
    )
}

export default MainLayout(Home)