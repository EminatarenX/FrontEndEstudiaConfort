
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
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import HomeLayout from "./components/HomeLayout";
import LoginUsuario from "./pages/LoginUsuario";
import Confirmacion from "./pages/Confirmacion";
import SignInStudent from "./pages/SignInStudent";
import Habitacion from "./pages/Habitacion";
import Perfil from "./pages/Perfil";
import AdminLayout from "./components/Layout";
import AdminInicio from "./pages/AdminInicio";
import AdminHabitaciones from "./pages/AdminHabitaciones";
import PrivateAdmin from "./components/PrivateAdmin";


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EstudiantesProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />} errorElement={<ErrorPage />}>
            <Route index element={<Index/>} />
            <Route path="/login" element={<LoginUsuario />} />
            <Route path="/registrar" element={<SignInStudent />} />
            <Route path="/confirmar/:id" element={<Confirmacion />} />
            <Route path="*" element={<NotFound/>}/>
          </Route>

            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route index element={<Dashboard />} />
              <Route path="perfil" element={<Perfil/>}/>
              <Route path="habitacion" element={<Habitacion/>} />
            </Route>

          <Route path="/admin" element={<PrivateAdmin/>}>
            <Route index element={<AdminInicio/>}/>
            <Route path="habitaciones" element={<AdminHabitaciones/>}/> 
          </Route>

        </Routes>
        </EstudiantesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
