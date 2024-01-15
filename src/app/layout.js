import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import { Footer, Navbar } from '@/components'



export const metadata = {
  title: 'PSM-Nepal',
  description: 'PSM-Nepal is personal Blog web application.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-black font-serif bg-[#e8f0fe] min-h-screen'>
        <Navbar />
        <div className='pt-16 px-6 md:px-12 text-justify'>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </div>
        <Footer />
      </body>
    </html>
  )
}
