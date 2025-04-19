import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import {PageLoader} from '../components/ui'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Detail = lazy(() => import('../pages/Detail'))
const Favorites = lazy(() => import('../pages/Favorites'))
const Payment = lazy(() => import('../pages/Payment'))
const SearchResults = lazy(() => import('../pages/SearchResults'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Profile = lazy(() => import('../pages/Profile'))
const Map = lazy(() => import('../pages/Map'))
// const Register = lazy(() => import('../pages/Register'))
// const Login = lazy(() => import('../pages/Login'))
// const Cart = lazy(() => import('../pages/Cart'))
// const Orders = lazy(() => import('../pages/Orders'))
// const Contact = lazy(() => import('../pages/Contact'))
// const FAQ = lazy(() => import('../pages/FAQ'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} /> */}
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
