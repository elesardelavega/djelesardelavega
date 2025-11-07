import { MantineProvider } from '@mantine/core'
import type { ReactNode } from 'react'

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <MantineProvider theme={{ fontFamily: 'var(--font-sans)', headings: { fontFamily: 'var(--font-serif)' }, }}>
            {children}
        </MantineProvider>
    );
};
