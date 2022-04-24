import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyRoutes from "./routes";
import Layout from "components/Layout";

const Router = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Suspense fallback={<p> Loading...</p>}>
          <Routes>
            {MyRoutes.map((el) => {
              return <Route path={el.path} element={<el.element />} />;
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Layout>
  );
};

export default Router;
