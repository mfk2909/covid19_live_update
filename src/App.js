import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import Store from './store';

// COMPONENTS
import Routes from './components/routing/Routes';
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Fragment>
          <div className='App'>
            <header className='App-header'>
              <AppHeader />
            </header>
            <main className='App-main'>
              <Switch>
                <Route component={Routes} />
              </Switch>
            </main>
            <footer className='App-footer'>
              <AppFooter />
            </footer>
          </div>
          <div className='App-overlay'></div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
