import { Button, Text, Checkbox, Paper } from '@mantine/core'
import { useState, useEffect } from 'react'

export function CookiePopup() {
    const [opened, setOpened] = useState(false)
    const [analytics, setAnalytics] = useState(false)
    const [functional, setFunctional] = useState(false)
    const [marketing, setMarketing] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('cookies')
        if (!saved) {
            setOpened(true)
        } else {
            try {
                const parsed = JSON.parse(saved)
                setAnalytics(!!parsed.analytics)
                setFunctional(!!parsed.functional)
                setMarketing(!!parsed.marketing)
            } catch {
                setOpened(true)
            }
        }
    }, [])

    const finish = () => setOpened(false)

    const acceptAll = () => {
        localStorage.setItem(
            'cookies',
            JSON.stringify({ essential: true, analytics: true, functional: true, marketing: true })
        )
        finish()
    }

    const savePreferences = () => {
        localStorage.setItem(
            'cookies',
            JSON.stringify({ essential: true, analytics, functional, marketing })
        )
        finish()
    }

    if (!opened) return null

    return (
        <Paper
            shadow="lg"
            radius="md"
            className="fixed bottom-4 max-w-[500px] p-6 sm:left-4 left-4 right-4
             bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg
             text-center z-50 opacity-0 animate-fade-in-up" 
            >
            <Text className="text-[hsl(var(--muted-foreground))] mb-4">
                Usamos cookies esenciales para el funcionamiento del sitio y opcionales para mejorar tu experiencia.
            </Text>

            <div className="space-y-2 mb-4 text-left">
                <Checkbox checked disabled label="Cookies esenciales (siempre activas)" />
                <Checkbox
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.currentTarget.checked)}
                    label="Cookies analíticas"
                    className='text-[hsl(var(--foreground))]'
                />
                <Checkbox
                    checked={functional}
                    onChange={(e) => setFunctional(e.currentTarget.checked)}
                    label="Cookies funcionales"
                    className='text-[hsl(var(--foreground))]'

                />
                <Checkbox
                    checked={marketing}
                    onChange={(e) => setMarketing(e.currentTarget.checked)}
                    label="Cookies de marketing/publicidad"
                    className='text-[hsl(var(--foreground))]'
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                    onClick={acceptAll}
                    className={`
                    inline-flex items-center justify-center rounded-lg px-6 py-2 text-sm font-bold shadow-lg 
                    bg-[hsl(var(--primary))] text-[hsl(var(--background))] hover:text-[hsl(var(--background))] border-[hsl(var(--primary))]
                    transition duration-300 transform ease-in-out animate-pulse-shadow hover:shadow-2xl`}
                    >
                    Aceptar todas
                </Button>

                <Button
                    onClick={savePreferences}
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-2 text-sm font-bold shadow-lg 
                    border border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] bg-transparent
                    animate-pulse-shadow hover:shadow-2xl hover:bg-transparent`}
                    >
                    Guardar preferencias
                </Button>
            </div>
        </Paper>

    )
}

export default CookiePopup