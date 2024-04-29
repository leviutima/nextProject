import { Aside } from '@/components/Aside/Index';
import './globals.css'

export const metadata = {
  title: "nextProject",
  description: "My first project in next JS",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className='appContainer'>
          <Aside/>
          {children}
        </div>
      </body>
    </html>
  );
}
