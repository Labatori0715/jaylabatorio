import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Jay Labatorio | Virtual Assistant, IT Support & Graphic Designer' },
      { name: 'description', content: 'Jay Labatorio provides reliable virtual assistance, IT support, data management, website maintenance, and professional graphic design for growing businesses.' },
      { name: 'theme-color', content: '#0b1224' },
      { property: 'og:title', content: 'Jay Labatorio | Digital Support Specialist' },
      { property: 'og:description', content: 'Organized, technical, and creative support for modern businesses.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=Newsreader:ital,opsz,wght@1,6..72,500&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>
}
