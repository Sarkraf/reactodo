import ReactOnRails from 'react-on-rails';

import Home from '../bundles/Home/components/HomeServer';

// This is how react_on_rails can see the Home in the browser.
ReactOnRails.register({
  Home,
});
