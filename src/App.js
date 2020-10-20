import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import PizzaBuilder from './container/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <PizzaBuilder />
        </Layout>
    </div>
  );
}

export default App;
