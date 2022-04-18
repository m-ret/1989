import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <header>
        <h1>I am the about component</h1>
        <Link to="/">Take to main component</Link>
      </header>
    </div>
  );
};
