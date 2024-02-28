import React from 'react';
import AsyncStatuses from '../2-capabilities/async-statuses.type';

type Props = Record<AsyncStatuses, (...args: any[]) => React.JSX.Element> & {
  read(): {
    status: AsyncStatuses;
  };
};

function AsyncComponent({ read, ...props }: Props) {
  const { status, ...other } = read();

  const Component = props[status];

  return <Component {...other} />;
}

export default AsyncComponent;
