import React, { FC, useState, useEffect } from 'react';
import './App.css';
import ReadString from "./ReadString";
import SetString from "./SetString";

const App: FC = ({ drizzle }) => {
  const [loading, setLoading] = useState(true);
  const [drizzleState, setDrizzleState] = useState(null);

  useEffect(() => {
    // subscribe to changes in the store
    const unsubscribe = drizzle.store.subscribe(() => {
      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();
      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        setDrizzleState(drizzleState);
        setLoading(false);
      }
    });

    return (): void => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <>"Loading Drizzle..."</>;
  } else {
    return <div className="App">
      <ReadString
        drizzle={drizzle}
        drizzleState={drizzleState}
      />
      <SetString
        drizzle={drizzle}
        drizzleState={drizzleState}
      />
    </div>;
  }
};

export default App;
