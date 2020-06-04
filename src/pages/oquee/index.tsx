import React, { FC } from 'react';
import MainLayout from '../../layout/mainLayout';
import './oquee.css';

const whatIs: FC = () => {
    return (
        <>
            <div className="whatis-container">
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
                        }} >O que é</span>
                    </div>
                </div>

                <div className="grid-text">
                    <div className="full-text">
                        <span>
                            Kombucha é simplesmente um chá fermentado, este que surgiu já há milhares de anos no leste da Ásia no ano de 221 a.C. mas que poderá por nosso meio chegar aos mais jovens e tornar-se numa bebida do futuro. <p></p>
                            Pode ser feito apenas com 3 ingredientes, um chá verde, açúcar e um SCOBY. <br></br>
                            SCOBY vem do inglês symbiotic culture of bacteria and yeast ou seja, uma cultura de bactérias probióticas e leveduras que vão levar a cabo o processo de fermentação, aqui vão ser produzidas enzimas, vitaminas, ácidos orgânicos com benefícios à nossa saúde. <br></br>
                            Esta bebida é gaseificada naturalmente pelo processo da fermentação e probiótica, não contendo lactose nem glúten podendo assim ser consumida por vegans e vegetarianos. <p></p>
                            Para os grandes amantes do produto, podemos reinventar o sabor desta bebida e assim dispomos de quatro novos sabores estes são: gengibre e limão, frutos silvestres, hibisco e o sabor original.
                    </span>
                    </div>
                </div>

                <div className="grid-icons">
                    <img src={require("../../assets/vegan.png")} alt="" />
                    <img src={require("../../assets/vegetariano.png")} alt="" />
                    <img src={require("../../assets/sem_gluten.png")} alt="" />
                    <img src={require("../../assets/sem_lactose.png")} alt="" />
                    <img src={require("../../assets/biologico.png")} alt="" />
                </div>

            </div>
        </>
    )
}

export default MainLayout(whatIs)