import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { EstudiantesProvider } from "./context/EstudiantesProvider";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import HomeLayout from "./components/HomeLayout";
import LoginUsuario from "./pages/LoginUsuario";
import Confirmacion from "./pages/Confirmacion";
import SignInStudent from "./pages/SignInStudent";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EstudiantesProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />} errorElement={<ErrorPage />}>
            <Route index element={<h1>Home Page</h1>} />
            <Route path="/login" element={<LoginUsuario />} />
            <Route path="/registrar" element={<SignInStudent />} />
            <Route path="/confirmar/:id" element={<Confirmacion />} />
          </Route>

            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route index element={<Dashboard />} />
              <Route path="perfil" element={<h1 style={{marginLeft: '400px'}}>Perfil</h1>}/>
            </Route>
       

        </Routes>
        </EstudiantesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
