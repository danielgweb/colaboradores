import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from "./Login/Login";
import Editor from "./Colaboradores/Editor/Editor";
import Colaboradores from "./Colaboradores/Colaboradores";
import { isAuthenticated } from "../services/auth/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <PrivateRoute path="/colaboradores" component={Colaboradores} />
                <PrivateRoute path="/editor" component={Editor} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root
