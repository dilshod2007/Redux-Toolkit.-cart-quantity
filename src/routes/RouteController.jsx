import { Routes, Route } from "react-router-dom"
import Nav from "../components/Nav"
import Home from './home/Home'
import Cart from "./cart/Cart"
import Single from "./single/Single"
const RouteController = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/single/:id" element={<Single />} />
            </Routes>
        </>
    )
}

export default RouteController