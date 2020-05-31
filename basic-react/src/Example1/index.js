import React from 'react';
import Original from './original';
import HooksVersion from './hooksVersion';

const Example1 = () => {
  return (
    <div>
        <h1>Original Version</h1>
        <Original />
        <h1>Hooks Version</h1>
        <HooksVersion />
        <h3>Wow they're the same!</h3>
    </div>
  );
}

export default Example1;
