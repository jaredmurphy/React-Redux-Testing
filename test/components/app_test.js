import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  it('shows the correct text', () => {
    const component = renderComponent(App);
    expect(component).to.contain("Your Pleasant Ghost evironment is set up correctly.");
  });
});

