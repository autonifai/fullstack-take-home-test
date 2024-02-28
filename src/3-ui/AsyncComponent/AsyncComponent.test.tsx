import React from 'react';
import { render, screen } from '@testing-library/react';
import CUD, { Props } from '.';
import AsyncStatuses from '../../2-capabilities/async-statuses.type';

const Loading = () => <>Waiting</>;
const Failure = () => <>Failure</>;
const Success = () => <>Ok</>;

type WrapProps = {
  read: Props['read'];
};

function Wrap({ read }: WrapProps) {
  return (
    <CUD read={read} pending={Loading} error={Failure} success={Success} />
  );
}

describe('<AsyncComponent/>', () => {
  it.each<[AsyncStatuses, RegExp]>([
    ['pending', /waiting/i],
    ['error', /failure/i],
    ['success', /ok/i],
  ])('shows expected text for %s', (status, text) => {
    const read = () => ({ status });

    render(<Wrap read={read} />);
    const linkElement = screen.getByText(text);
    expect(linkElement).toBeInTheDocument();
  });
});
