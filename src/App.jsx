// Bringing in the required imports from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer'; 

function App() {
    return (
        <>
            {/* Include your navigation at the top */}
            <Nav />

            {/* Main content area */}
            <main className="mx-3">
                {/* Define your routes */}
                <Routes>
                    {/* Redirect the root path to /about */}
                    <Route path="/" element={<Navigate to="/about" />} />
                    
                    {/* Define the routes for different components */}
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>

            {/* Include the footer at the bottom */}
            <Footer /> 
        </>
    );
}

export default App;