import React, { FC, useState } from "react"
import { RouteProps, Link } from "react-router-dom"
import { Row, Col, Card, Modal, Button, message } from "antd"
import MainLayout from "../../layout/mainLayout"
import "./shop.css"
import PRODUCTS from "./products"
import { ShoppingCartOutlined } from "@ant-design/icons"



const Shop: FC = () => {
    const [showModal, setShowModal] = useState(false)

    const renderModal = () => setShowModal(true)

    const addedToCart = () => message.success("Produto adicionado ao carrinho!")

    return (
        <>
            <div className="shop">
                <div className="boxed">
                    <Row gutter={[16, 24]}>
                        {PRODUCTS.map((product, productIndex) => {
                            return (
                                <>
                                    <Col
                                        span={6}
                                        className="Product"
                                        key={productIndex}
                                    >
                                        <Link to={`/shop/${product.id}`}>
                                            <Card
                                                hoverable
                                                style={{ width: 250 }}
                                                cover={<img alt="image" src={product.img} style={{ width: "100%", height: "auto" }} />}
                                            >
                                                <h2 style={{ fontWeight: "bold" }}>{product.name}</h2>
                                                <h3>Preço: {product.price} €</h3>
                                                <h4>{product.description}</h4>
                                            </Card>
                                        </Link>
                                        <Button onClick={addedToCart}>Adicionar ao carrinho <ShoppingCartOutlined /></Button>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>

                </div>

            </div>
        </>
    )
}

export default MainLayout(Shop)