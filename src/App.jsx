import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import CityList from "./components/cityList/CityList";
import AppLayout from './pages/AppLayout';
import CountriesList from "./components/CountryList";
import City from './components/city/City';
import Form from "./components/form/Form";
import { CitiesProvider } from "./contexts/CitiesProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element=<Homepage /> />
            <Route path="product" element=<Product /> />
            <Route path="pricing" element=<Pricing /> />
            <Route path="login" element=<Login /> />
            <Route path="app" element=<ProtectedRoute><AppLayout /></ProtectedRoute>>
              <Route index element=<Navigate replace to='cities' /> />
              <Route path="cities" element=<CityList /> />

              <Route path="cities/:id" element=<City /> />
              <Route path="countries" element=<CountriesList /> />
              <Route path="form" element=<Form /> />
            </Route>
            <Route path="*" element=<PageNotFound /> />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App
