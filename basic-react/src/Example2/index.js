import React, { useContext, useState } from 'react';

const CounterContext = React.createContext(1);

const Counter2 = (props) => {
    const { get } = useContext(CounterContext);
    return (<h1>{get}</h1>);
}

const Counter = (props) => {
    return (<Counter2 />);
}

const Increment = () => {
    const { get, set } = useContext(CounterContext);
    return <button onClick={() => set(get + 1)} />;
}

const Decrement = () => {
    const { get, set } = useContext(CounterContext);
    return <button onClick={() => set(get - 1)} />;
}

const Example2 = () => {
    const [getCounter, setCounter] = useState(1);

    const value = {
        get: getCounter,
        set: setCounter
    }

  return (
    <div>
        <CounterContext.Provider value={value}>
            <Counter />
            <Increment />
            <Decrement />
        </CounterContext.Provider>
    </div>
  );
}

export default Example2;
