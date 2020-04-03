import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Launches } from './components/Launches/Launches';

import './App.css';
import { LaunchDetail } from './components/Launches/LaunchDetail';
import { Provider } from 'react-redux';
import store from './store';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Launches} />
            <Route
              exact
              path="/launch-detail/:flightNumber"
              component={LaunchDetail}
            />
          </div>
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
