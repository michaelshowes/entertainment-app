import Navbar from './components/navbar/navbar';
import styles from './main.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="page-container">
          <Navbar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
