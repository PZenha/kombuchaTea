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

                <div className="quemSomos-container">
                    <h1>Quem somos</h1>
                    <span>
                        A Kombuchai Tea nasceu de um projeto no âmbito de uma unidade curricular no fim de uma Licenciatura em Biorrecursos em simbiose com a ânsia de dar a conhecer ao mercado mais jovem o nosso produto, a kombucha.<br></br>
                        Formada por duas sócias gerentes Inês e Catarina, duas colegas de curso, registaram a empresa como Kombuchai Tea, Lda , sendo esta uma sociedade por quotas.<br></br>
                        Esta empresa não se baseia só no âmbito de vendermos o nosso produto final, mas também de comercializar todo um kit para que possam fazer gerar a kombucha na vossa própria casa.<br></br>
                        Kombuchai Tea pretende agregar todo o sentido da palavra sustentabilidade com o respeito pelo meio ambiente favorecendo simultaneamente a nossa saúde e a de quem consome esta bebida.
                </span>
                </div>
            </div>
        </>
    )
}

export default MainLayout(Home)

// Logotipo -> Quem Somos -> A kombucha (cascata/ o que e -> Como fazer -> Os Beneficios) -> Perguntas Frequentes -> loja -> contactos