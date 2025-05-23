import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/index';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Onboarding />
          </Layout>
        }
      />
      <Route
        path="/index"
        element={
          <Layout>
            <Index />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
