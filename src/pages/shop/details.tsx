import React, { useEffect } from 'react';
import { RouteComponentProps, match, withRouter } from 'react-router-dom';
import MainLayout from '../../layout/mainLayout';
import './shop.css';
import PRODUCTS from "./products"
import { Card, Row, Col } from "antd"

interface ProductDetailProps {
  id: string
}

export const ProductDetail: React.FC<RouteComponentProps<ProductDetailProps>> = ({ match }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(match.params.id);
  const product = PRODUCTS.find((el) => el.id === match.params.id)

  return (
    <>
      <Row>
        <Col span={12}>
          <img alt={product?.id} src={product?.img} style={{ width: "80%", height: "auto" }} />
        </Col>

        <Col span={12}>
          <div className="descContainer">


            <span>{product?.name}</span>



            <Card style={{}}>
              {product?.longDesc}
            </Card>


          </div>
        </Col>
      </Row>
    </>
  )
};

export default MainLayout(withRouter(ProductDetail));
