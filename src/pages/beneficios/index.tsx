import React, { FC } from 'react';
import MainLayout from '../../layout/mainLayout';
import './beneficios.css';
import { List, Avatar, } from "antd"
import { CheckCircleTwoTone } from "@ant-design/icons"

const data = [
    "Equilibrio intestinal",
    "Ajuda na digestão",
    "Fortalece o sistema imunológico",
    "Estimulante energético",
    "Poder desintoxicante e antioxidante ao corpo",
    "Promove o bem estar geral",
    "Contribui na perda de peso",
    "Estimulante energético",
]

const benefits: FC = () => {
    return (
        <>
            <div className="beneficios-container">
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
                        }} >Beneficios</span>
                    </div>
                </div>

                <div className="grid-list">
                    <div className="full-list">
                        <List
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    {<div className="list-items"> <CheckCircleTwoTone style={{ marginRight: "20px" }} twoToneColor="#52c41a" />{item}</div>}
                                </List.Item>
                            )}
                        >

                        </List>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainLayout(benefits)