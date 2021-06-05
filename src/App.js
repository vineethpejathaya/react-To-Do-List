import React from 'react';
import './style.css';
import Header from './Components/Header';
import List from './Components/List';

export default function App() {
  return (
    <div className="container">
      <Header />
      <List />
    </div>
  );
}
