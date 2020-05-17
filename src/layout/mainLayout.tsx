import React, { SFC } from "react"
import { RouteProps, Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import NavBar from "../components/navbar"

const { Header, Content, Footer } = Layout

const MainLayout = (Component: React.ComponentType<any>) => ({ children }: RouteProps) => {
    return (
        <>
            <Layout className="layout">
                <Head />
                <Content>
                    <div className="site-layout-content">
                        <Component>{children}</Component>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>
                    Kombucha
                </Footer>
            </Layout>
        </>
    )
}



const Head: SFC = () => {
    return (
        <>
            <Header id="header">
                <Link to="/"
                    className="logo"
                    style={{
                        display: 'flex',
                        padding: '0 16px',
                        height: '64px',
                        alignItems: 'center',
                    }}
                >
                    LOGO
            </Link>

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]} >

                    <Menu.Item key="home">
                        <Link to="/">
                            Home
                        </Link>
                    </Menu.Item>


                    <Menu.Item key="shop" >
                        <Link to="/shop">
                            Shop
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </>
    )
}

export default MainLayout