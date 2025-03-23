import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '/app/graphql/client';
import Home from '../../Home/components/Home';
import Navbar from './Navbar';

// import TodoList from './TodoList';

const App = (props) => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
        <Navbar
          currentUser={props.currentUser}
          authenticityToken={props.authenticityToken}
        />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home {...props} />} />
              {/* <Route path="/todos" element={<TodoList {...props} />} /> */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
