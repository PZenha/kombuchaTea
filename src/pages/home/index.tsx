import React, { FC } from "react"
import { Button, Card } from "antd"
import MainLayout from "../../layout/mainLayout"
import { Link } from "react-router-dom"
import "./home.css"

const Home: FC = () => {
    return (
        <>
            <div className="home" >
                <div className="logo-container">
                    <img src={require('../../assets/kombuchaLogo.png')} alt='komchuga logo' width="400" height="auto"></img>
                    <Card
                        bordered={false}
                        style={{ width: 500, height: '100%', textAlign: 'center', marginTop: '60px' }}
                    >
                        <span style={{
                            backgroundColor: '#221712',
                            padding: '18px',
                            fontSize: '20px',
                            letterSpacing: '10px',
                            color: 'white',
                            marginBottom: '20px'
                        }}>KOMBUCHAI TEA</span>

                        <p style={{ marginTop: '40px', fontWeight: 'bold', fontSize: '25px' }}>Venha descobrir os nossos produtos</p>
                        <Link to='/shop'>
                            <Button
                                type='primary'
                                style={{
                                    width: '100px',
                                    height: 'auto',
                                    fontSize: '20px',
                                    fontWeight: 'bold'
                                }}
                            >Loja</Button>
                        </Link>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default MainLayout(Home)

// Logotipo -> Quem Somos -> A kombucha (cascata/ o que e -> Como fazer -> Os Beneficios) -> Perguntas Frequentes -> loja -> contactos