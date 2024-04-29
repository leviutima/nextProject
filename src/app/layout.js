import { Prompt } from 'next/font/google'
import { Aside } from '@/components/Aside/Index';
import './globals.css'

const prompt = Prompt ({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "nextProject",
  description: "My first project in next JS",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='appContainer'>
          <Aside/>
          {children}
        </div>
      </body>
    </html>
  );
}
