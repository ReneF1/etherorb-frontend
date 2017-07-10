import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import "./styles/index.css"
import registerServiceWorker from "./registerServiceWorker"
import {MuiThemeProvider} from "material-ui/styles"
import App from "./App"



ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
