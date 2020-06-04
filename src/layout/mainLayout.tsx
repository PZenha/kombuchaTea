import React, { SFC, useRef } from "react"
import { RouteProps, Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import SocialComponent from "../components/social-media"
import * as Scroll from "react-scroll"

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu
const scroll = Scroll.animateScroll

const contactEndRef = useRef<null | HTMLElement | any>(null)

const MainLayout = (Component: React.ComponentType<any>) => ({ children }: RouteProps) => {
    return (
        <>
            <Layout className="layout" style={{ backgroundColor: "white" }}>
                <Head />
                <Content>
                    <div className="site-layout-content">
                        <Component>{children}</Component>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: '#e6e6e6', marginTop: "30px" }} ref={contactEndRef}>
                    <div className="footer-content">
                    <Contacts />
                    <div className="footer-title">
                    KOMBUCHAI TEA <br></br>
                    Social Network
                    <SocialComponent />
                    </div>
                    </div>
                    
                    
                </Footer>
            </Layout>
        </>
    )
}



const Head: SFC = () => {
    return (
        <>
            <Header id="header" style={{ position: "sticky", top: 0, zIndex: 1 }}>
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

                    <Menu.Item key="Quem somos" onClick={() => scroll.scrollToBottom()}>
                        <Link to="/">
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

                    <Menu.Item key="contactos" onClick={() => scroll.scrollToBottom()}>
                        
                            Contactos
                        
                    </Menu.Item>


                </Menu>
            </Header>
        </>
    )
}

const Contacts: SFC = () =>{
    return(
        <>
        <div className="contacts">
            <span>Contactos</span>
            <span>Email: kombuchaitea@sapo.pt</span>
            <span>Telemóvel: 9254164846</span>
            <span>Morada: Rua S.Sebastião - 300 Porto</span>
        </div>
        </>
    )
}

export default MainLayout