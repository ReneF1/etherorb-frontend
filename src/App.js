import React, {Component} from "react"
import {Route, Switch} from "react-router-dom"
import "./styles/App.css"
import Landingpage from "./pages/landingpage"

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Landingpage}/>
                </Switch>
            </div>
        )
    }
}
export default App
