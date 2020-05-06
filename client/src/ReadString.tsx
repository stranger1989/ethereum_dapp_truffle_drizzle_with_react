import React, { FC, useState, useEffect } from 'react';

const ReadString: FC = ({ drizzle, drizzleState }) => {
  const [dataKey, setDataKey] = useState(null);
  const [myString, setMyString] = useState(null);

  useEffect(() => {
    const contract = drizzle.contracts.MyStringStore;
    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["myString"].cacheCall();
    // save the `dataKey` to local component state for later reference
    setDataKey(dataKey);
  }, []);

  useEffect(() => {
    const { MyStringStore } = drizzleState.contracts;
    const myString = MyStringStore.myString[dataKey];
    setMyString(myString);
  });

  // if it exists, then we display its value
  return <p>My stored string: {myString && myString.value}</p>;
};

export default ReadString;
