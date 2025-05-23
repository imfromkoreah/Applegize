import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Page1 from "./pages/Page1";
import Onboarding from "./pages/Onboarding";
import Result from "./pages/Result"; // Result 컴포넌트 import 추가

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
