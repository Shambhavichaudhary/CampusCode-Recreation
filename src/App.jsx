import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx';
import Events from './pages/Events/Events.jsx';
import MyEvents from './pages/MyEvents/MyEvents.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
/**
 * In the original site every page was its own HTML file and opened scrolled to the top.
 * In a single-page app the browser keeps the old scroll position, so we reset it
 * whenever the route (pathname) changes. Hash links like "#about" are not affected.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/**
 * App = the route table. One URL -> one page component.
 *   Original file                        ->  URL
 *   Dashboard/index.html (landing)       ->  /
 *   Login/index.html                     ->  /login
 *   Register/index.html                  ->  /register
 *   Student-Dashboard/index.html         ->  /student
 *   Student-Dashboard/Events.html        ->  /student/events
 *   Student-Dashboard/My-Events.html     ->  /student/my-events
 */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
         <Route path="/student" element={<StudentDashboard />} />
         <Route path="/student/events" element={<Events />} />
         <Route path="/student/my-events" element={<MyEvents />} />
        </Route>
      </Routes>
    </>
  );
}
