import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Page1 from './pages/Page1';
import Onboarding from './pages/Onboarding';
import Result from './pages/Result';

function App() {
  return (
    <Routes>
      {/* Onboarding은 Layout 없이 직접 렌더링 */}
      <Route path="/" element={<Onboarding />} />
      
      {/* 나머지 페이지들은 Layout으로 감싸기 */}
      <Route
        path="/index"
        element={
          <Layout>
            <Page1 />
          </Layout>
        }
      />
      <Route
        path="/result"
        element={
          <Layout>
            <Result />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
