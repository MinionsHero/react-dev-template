import React from 'react';
import HelloWorld from '@components/HelloWorld';
import '@styles/Home.scss';

export default function Home() {
  return (
    <div className="home">
      <div>Hello React!</div>
      <div>
        <HelloWorld />
      </div>
    </div>
  );
}