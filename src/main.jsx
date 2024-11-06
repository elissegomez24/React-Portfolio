import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import App from './App';
import Header from './pages/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '*', // Changed to wildcard path
    element: <App />, // The main wrapper component
    children: [
      {
        index: true, // Default route
        element: <Header />, // Header is the first component rendered
      },
      {
        path: 'about', // Relative path (no leading slash)
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'footer',
        element: <Footer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
