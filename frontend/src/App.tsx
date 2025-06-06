import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GapPage from './pages/GapPage';
import LovePage from './pages/LovePage';
import ConflictPage from './pages/ConflictPage';
import OnboardingPage from './pages/OnboardingPage';
import ResultPage from './pages/ResultPage';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <Routes>
      {/* Onboarding은 Layout 없이 직접 렌더링 */}
      <Route path="/" element={<OnboardingPage />} />

      {/* 나머지 페이지들은 Layout으로 감싸기 */}
      <Route
        path="/preset/gap"
        element={
          <Layout>
            <GapPage />
          </Layout>
        }
      />
      <Route
        path="/preset/conflict"
        element={
          <Layout>
            <ConflictPage />
          </Layout>
        }
      />
      <Route
        path="/preset/love"
        element={
          <Layout>
            <LovePage />
          </Layout>
        }
      />
      <Route
        path="/loading"
        element={
          <Layout>
            <LoadingPage />
          </Layout>
        }
      />
      <Route
        path="/result"
        element={
          <Layout>
            <ResultPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
