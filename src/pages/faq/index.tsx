import React, { FC } from 'react';
import MainLayout from '../../layout/mainLayout';
import './faq.css';
import { Collapse, } from "antd"
import { CaretRightOutlined } from "@ant-design/icons"

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const faq: FC = () => {
    return (
        <>
            <div className="faq-container">
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
                        }} >Perguntas Frequentes</span>
                    </div>
                </div>

                <div className="grid-faq">
                    <div className="full-faq">
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            className="site-collapse-custom-collapse"
                        >
                            <Panel header="O que é o SCOBY?" key="1" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>Do inglês “Symbiotic Culture of Bacteria and Yeast”, pode-se dizer que é a mãe da Kombucha, converte a combinação a água, o chá e o açúcar em Kombucha pelo processo de fermentação.</p>
                            </Panel>
                            <Panel header="Porque a kombucha precisa de açúcar?" key="2" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>O açúcar é a fonte de carbono para que haja fermentação, a cultura da Kombucha consome o açúcar e transforma-o em ácidos orgânicos, frutose e glicose.</p>
                            </Panel>
                            <Panel header="A kombucha pode conter álcool?" key="3" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>Do processo de fermentação pode resultar uma quantidade residual de álcool (menos do que 0,5%), uma parte do processo da fermentação é transformação de açúcar em álcool pelas leveduras e o álcool em ácidos orgânicos pelas bactérias.</p>
                            </Panel>
                            <Panel header="A kombucha contém cafeína?" key="4" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>Sim, mas uma quantidade pequena porque parte da cafeína também é consumida pelos microoganismos vivos da cultura. </p>
                            </Panel>
                            <Panel header="Qual a validade da kombucha? " key="5" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>Sendo uma bebida viva que enquanto está no frigorífico o seu processo de fermentação é estabilizado. <br></br>
                                Fechada e dentro do frigorífico pode durar 3 meses, mas depois de aberta, deve-se beber numa semana. </p>
                            </Panel>
                            <Panel header="O que podem ser os sedimentos que se encontram no fundo da garrafa?" key="6" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>Os depósito no fundo da garrafa são restos de levedura, é um sinal revelador de que é kombucha de verdade, saudável e viva.</p>
                            </Panel>
                            <Panel header="Sou vegan, intolerante ao glúten ou à lactose posso beber kombucha?" key="7" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>Sim, a kombucha é uma bebida feita com chá, especiarias e frutas, tudo de origem vegetal. </p>
                            </Panel>
                            <Panel header="Qual a quantidade que devo beber?" key="8" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>Não existe uma quantidade certa. <br></br>
Se for a primeira vez começa com uma dose pequena de 200mL, mas o mais importante para sentires os benefícios da bebida é consumi-la todos os dias, equilibradamente.  </p>
                            </Panel>
                            <Panel header="Quando posso beber kombucha?" key="9" className="site-collapse-custom-panel">
                                <p style={{ color: "black" }}>Pode ser consumido antes, depois e durante as refeições. <br></br>
Há quem goste de beber em jejum para ajudar no processo de digestão ou como bebida energética antes ou depois de uma atividade física.</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainLayout(faq)