import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PostHogProvider } from 'posthog-js/react'
import posthog from './analytics'

createRoot(document.getElementById('root')!).render(
    <PostHogProvider client={posthog}>
        <App />
    </PostHogProvider>
)