import { BrowserRouter as Router } from 'react-router-dom';

import ContextContainer from 'utils/context/context-container';

import { AdminHome } from 'pages';

export default function App() {
  return (
    <Router>
      <ContextContainer>
        <AdminHome />
      </ContextContainer>
    </Router>
  );
}
