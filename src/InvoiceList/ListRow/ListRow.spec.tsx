import { render, screen } from '@testing-library/react';
import ListRow from './ListRow';

describe('ListRow', () => {
  it('should render every child', () => {
    render(
      <ListRow>
        <p>Child</p>
        <p>Child</p>
        <p>Child</p>
      </ListRow>
    )

    const children = screen.getAllByText('Child')

    expect(children).toHaveLength(3)
  })
})
