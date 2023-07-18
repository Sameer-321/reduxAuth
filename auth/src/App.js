import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public route */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protect routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>

      {/* react hook form practice */}
      <Route path="/rhf" element={<Layout />}>
        {/* public route */}
      </Route>
    </Routes>
  );
};

export default App;
