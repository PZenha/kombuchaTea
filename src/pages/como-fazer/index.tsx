import React, { FC } from 'react';
import MainLayout from '../../layout/mainLayout';
import './como-fazer.css';

const HowToDoIt: FC = () => {
    return (
        <>
            <div className="howto-container">
                <div className="grid-image">
                    <div className="grid-title">
                        <span style={{
                            backgroundColor: '#221712',
                            padding: '18px',
                            fontSize: '40px',
                            letterSpacing: '8px',
                            color: 'white',
                            marginBottom: '20px',
                            opacity: "97%"
                        }} >Como fazer</span>
                    </div>
                </div>

                <div className="grid-text">
                    <div className="first-icon">
                        <img src={require("../../assets/add_cha_verde.png")} alt="add cha verde"
                            style={{ width: "150px", height: "auto" }} />
                        <h2>Adicionar chá verde biologico</h2>
                        <span>Em água filtrada a ferver adicionar o chá verde biológico durante 10 a 15 minutos</span>
                    </div>

                    <div className="second-icon">
                        <img src={require("../../assets/add_sugar.png")} alt="add sugar"
                            style={{ width: "150px", height: "auto" }} />
                        <h2>Adicionar açucar</h2>
                        <span>Adicionar o açúcar biológico até dissolver</span>
                    </div>

                    <div className="third-icon">
                        <img src={require("../../assets/esperar_arrefecer.png")} alt="wait"
                            style={{ width: "150px", height: "auto" }} />
                        <h2>Esperar até arrefecer</h2>
                        <span>Deixar o chá arrefecer até atingir uma temperatura inferior a 30ºC para não prejudicar na adição da cultura </span>
                    </div>

                    <div className="fourth-icon">
                        <img src={require("../../assets/scoby.png")} alt="scoby"
                            style={{ width: "150px", height: "auto" }} />
                        <h2>Adicionar SCOBY</h2>
                        <span>Adicionar o SCOBY e o starter e deixar que a fermentação aconteça durante 1 -3 semanas </span>

                    </div><div className="fifth-icon">
                        <img src={require("../../assets/final.png")} alt="final"
                            style={{ width: "150px", height: "auto" }} />
                        <h2>E voilá</h2>
                        <span>Depois disso, é só conservar no frigorífico e saborear! </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout(HowToDoIt)