import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {ConnectedRouter} from 'react-router-redux';
import {MuiThemeProvider} from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import store, {history} from './store/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const orbTheme = getMuiTheme({
    palette: {
        primary1Color: '#4527a0',
        accent1Color: '#ff3823',
    }
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={orbTheme}>
            <ConnectedRouter history={history}>
                <HttpsRedirect>
                <App/>
                </HttpsRedirect>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
