import React, { FC } from 'react';
import useCounter from '../hooks/useCounter';

import Card from './Card';

const ForwardCounter: FC = () => {
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
