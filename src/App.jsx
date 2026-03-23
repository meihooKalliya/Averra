import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import ManageSubscription from "./pages/ManageSubscription";
import TestimonialsPage from "./pages/TestimonialsPage";
import SingleBlogPost from "./pages/SingleBlogPost";
import BlogArchivePage from "./pages/BlogArchivePage";
import FeaturesPage from "./pages/FeaturesPage";
import ContactPage from "./pages/ContactPage";
import SupportLegalPage from "./pages/SupportLegalPage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardPage from "./pages/DashboardPage";
import LeadsPage from "./pages/dashboard/LeadsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider, useAuth } from "./context/AuthContext";
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // Or a spinner
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

const MainLayout = () => (
  <div className="text-zinc-400 bg-[#0b1120] text-base p-4">
    <NavBar />
    <div className="">
      <Outlet />
      <Footer />
    </div>
    {/* AI Chat Widget - appears on all public pages */}
    <ChatWidget />
  </div>
);

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Averra | Autonomous AI Sales Teams";
        break;
      case "/about":
        document.title = "About Us | Averra";
        break;
      case "/features":
        document.title = "Platform Features | Averra";
        break;
      case "/pricing":
        document.title = "Pricing | Averra";
        break;
      case "/testimonials":
        document.title = "Wall of Love | Averra";
        break;
      case "/contact":
        document.title = "Contact Sales | Averra";
        break;
      case "/blog":
      case "/blog/archive":
        document.title = "Blog | Averra";
        break;
      case "/login":
        document.title = "Login | Averra";
        break;
      case "/signup":
        document.title = "Get Started | Averra";
        break;
      case "/dashboard":
        document.title = "Dashboard | Averra";
        break;
      default:
        if (location.pathname.startsWith("/blog/")) {
          document.title = "Blog Post | Averra";
        } else {
          document.title = "Averra | Autonomous AI Sales Teams";
        }
        break;
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <TitleUpdater />
        <Routes>
          {/* Auth Routes with Morphing Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          {/* Dashboard - Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/dashboard/leads" element={<ProtectedRoute><LeadsPage /></ProtectedRoute>} />
          <Route path="/dashboard/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
          <Route path="/dashboard/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
          <Route path="/dashboard/security" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />

          {/* Public Website - Wrapped in MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/archive" element={<BlogArchivePage />} />
            <Route path="/blog/:id" element={<SingleBlogPost />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/support" element={<SupportLegalPage />} />
            <Route path="/subscription" element={<ManageSubscription />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;


