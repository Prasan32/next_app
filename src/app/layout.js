import { Poppins } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import { Footer, Navbar } from '@/components'

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });



export const metadata = {
  title: 'PSM-Nepal',
  description: 'PSM-Nepal is personal Blog web application.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`text-black ${poppins.className} bg-[#e8f0fe] w-full overflow-y-scroll no-scrollbar tracking-wide`}>
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
