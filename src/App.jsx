import { HashRouter, Routes, Route } from "react-router-dom";

import Admin from "@/pages/admin/page";
import LoginAdmin from "@/pages/admin/login/page";
import RoomsAdmin from "@/pages/admin/rooms/page";
import ReserVations from "@/pages/admin/reservations/page";
import Guests from "@/pages/admin/guests/page";
import Reports from "@/pages/admin/reports/page";
import Settings from "@/pages/admin/settings/page";

import Home from "@/pages/home/page";
import Rooms from "@/pages/rooms/page";
import Booking from "@/pages/booking/page";
import CheckStatus from "@/pages/check-status/page";
import Contact from "@/pages/contact/page";
import Login from "@/pages/login/page";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/rooms" element={<RoomsAdmin />} />
        <Route path="/admin/reservations" element={<ReserVations />} />
        <Route path="/admin/guests" element={<Guests />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />

        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/check-status" element={<CheckStatus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
