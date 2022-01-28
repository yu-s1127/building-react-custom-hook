import React, { FC } from 'react';
import useCounter from '../hooks/useCounter';
import Card from './Card';

const BackwardCounter: FC = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
