import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Tournaments from '../pages/Tournaments';
import Events from '../pages/Events';
import Blog from '../pages/Blog';
import Sponsors from '../pages/Sponsors';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import JobApplication from '../pages/JobApplication';
import Coaches from '../pages/Coaches';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/tournaments', element: <Tournaments /> },
      { path: '/events', element: <Events /> },
      { path: '/blog', element: <Blog /> },
      { path: '/sponsors', element: <Sponsors /> },
      { path: '/contact', element: <Contact /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/job-application', element: <JobApplication /> },
      { path: '/coaches', element: <Coaches /> },
    ],
  },
]);

export default router;