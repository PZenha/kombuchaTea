import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={require("../pages/home").default} />
            <Route path="/shop" exact component={require("../pages/shop").default} />
            <Route path="/oquee" exact component={require("../pages/oquee").default} />
            <Route path="/comofazer" exact component={require("../pages/como-fazer").default} />
            <Route path="/osbeneficios" exact component={require("../pages/beneficios").default} />
            <Route path="/faq" exact component={require("../pages/faq").default} />
            <Route path="/shop/:id" component={require("../pages/shop/details").default} />
        </Switch>
    </Router>
)

export default Routes