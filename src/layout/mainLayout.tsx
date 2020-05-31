import React, { SFC } from "react"
import { RouteProps, Link } from "react-router-dom"
import { Layout, Menu } from "antd"

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu

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
                        marginRight: '20px',
                        color: 'white',
                        fontWeight: 'bold',
                        letterSpacing: '4px',
                        fontSize: '20px',
                        borderBottom: '2px solid white'
                    }}
                >
                    KOMBUCHAI TEA
                </Link>

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]} >

                    <Menu.Item key="Quem somos" >
                        <Link to="/quemsomos">
                            Quem Somos
                        </Link>
                    </Menu.Item>

                    <SubMenu title="A Kombucha" >
                        <Menu.Item key="O que é">
                            <Link to="/oquee">
                                O que é
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="Como Fazer">
                            <Link to="/comofazer">
                                Como Fazer
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="Os beneficios">
                            <Link to="/osbeneficios">
                                Os beneficios
                        </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="faq" >
                        <Link to="/faq">
                            Perguntas Frequentes
                        </Link>
                    </Menu.Item>


                    <Menu.Item key="shop" >
                        <Link to="/shop">
                            Loja
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="contactos" >
                        <Link to="/contactos">
                            Contactos
                        </Link>
                    </Menu.Item>


                </Menu>
            </Header>
        </>
    )
}

export default MainLayout