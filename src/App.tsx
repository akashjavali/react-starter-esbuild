import { BrowserRouter as Router } from 'react-router-dom';

import ContextContainer from '@Utils/context/context';

import { AdminHome } from '@Pages';

export default function App() {
  return (
    <Router>
      <ContextContainer>
        <AdminHome />
      </ContextContainer>
    </Router>
  );
}
