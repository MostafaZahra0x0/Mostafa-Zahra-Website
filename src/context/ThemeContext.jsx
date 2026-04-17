import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark'
        }
        return 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    // DarkReader protection
    useEffect(() => {
        const style = document.createElement('style')
        style.id = 'darkreader-protection'
        style.textContent = `
            html, body, body * {
                forced-color-adjust: none !important;
                -webkit-force-color-adjust: none !important;
                color-scheme: normal !important;
            }
            html, body {
                filter: none !important;
            }
            svg[data-darkreader], #darkreader-shadow-document {
                display: none !important;
            }
        `
        document.head.appendChild(style)

        const removeInjectedStyles = () => {
            document.querySelectorAll('#darkreader-ui, #darkreader-shadow-document, [data-darkreader-match]').forEach(el => el.remove())
            document.querySelectorAll('svg[style*="position: fixed"]').forEach(el => {
                if (el.innerHTML.includes('feColorMatrix') || el.innerHTML.includes('feGaussianBlur')) {
                    el.remove()
                }
            })
        }

        const observer = new MutationObserver(removeInjectedStyles)
        observer.observe(document.documentElement, { childList: true, subtree: true })
        window.addEventListener('load', removeInjectedStyles)

        const darkReaderInterval = setInterval(() => {
            const shadowHost = document.querySelector('#darkreader-shadow-document')
            if (shadowHost) {
                const shadowRoot = shadowHost.shadowRoot || shadowHost
                shadowRoot.innerHTML = ''
            }
        }, 100)
        setTimeout(() => clearInterval(darkReaderInterval), 3000)

        return () => {
            style.remove()
            observer.disconnect()
        }
    }, [])

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
