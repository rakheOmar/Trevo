import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
// COMPONENTS
import Navbar from "@/components/blocks/Navbar/Navbar";
import FooterSection from "@/components/Footer";
import Dashboard from "@/pages/Dashboard";
import ForgotPass from "@/pages/ForgotPass";
// PAGES
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SignUp from "@/pages/SignUp";
import TermsOfServices from "@/pages/TermsOfServices";

const DEFINED_ROUTES = [
  "/",
  "/privacy-policy",
  "/terms-of-services",
  "/login",
  "/signup",
  "/forgot-password",
  "/dashboard",
];

const NO_LAYOUT_ROUTES = ["/login", "/signup", "/forgot-password", "/dashboard"];

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const shouldShowLayout =
    DEFINED_ROUTES.includes(pathname) && !NO_LAYOUT_ROUTES.includes(pathname);

  return (
    <div className="w-full max-w-[1920px] mx-auto min-h-screen bg-background">
      {shouldShowLayout && <Navbar />}
      <main>{children}</main>
      <Toaster position="bottom-right" richColors />
      {shouldShowLayout && <FooterSection />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* UNPROTECTED */}
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-services" element={<TermsOfServices />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          {/* PROTECTED */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <SpeedInsights />
        <Analytics />
      </Layout>
    </Router>
  );
}

export default App;
