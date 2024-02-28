import React from 'react';
import AsyncStatuses from '../../2-capabilities/async-statuses.type';

/** TESTING NOTE
 * Normally Props would be private for the component,
 * but in this case I think exposing is a good tradeoff to achieve testability
 */
export type Props = Record<
  AsyncStatuses,
  (...args: any[]) => React.JSX.Element
> & {
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
