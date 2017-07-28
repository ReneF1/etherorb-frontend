import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {ConnectedRouter} from 'react-router-redux';
import {MuiThemeProvider} from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, grey50, white} from 'material-ui/styles/colors';
import App from './App';
import store, {history} from './store/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const orbTheme = getMuiTheme({
    palette: {
        color: grey50,
        backgroundColor: blue500,
    },
    appBar: {
        height: 50,
        backgroundColor: white,
        textColor: blue500,
        color: white
    },
    paper: {
        backgroundColor: white,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(orbTheme)}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
