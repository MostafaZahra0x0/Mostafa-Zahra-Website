import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Portfolio from './sections/Portfolio/Portfolio'
import Projects from './sections/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)
    const closeMobileMenu = () => setMobileMenuOpen(false)

    return (
        <ThemeProvider>
            <Navbar onMenuToggle={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} />
            <ThemeToggle />
            <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

            <main>
                <Hero />
                <About />
                <Portfolio />
                <Projects />
            </main>

            <Footer />
        </ThemeProvider>
    )
}

export default App
