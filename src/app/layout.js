"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'
import Navbar from '../components/Navbar'
import NavbarAdmin from '../components/NavbarAdmin'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

const disable = ["/login"]

// export const metadata = {
//   title: 'NOC APP',
//   description: 'Generated by ilkom21',
// }

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname === "/Dashboard" 
        || pathname === "/Wilayah" 
        || pathname === "/Wilayah/Detail" 
        || pathname === "/Wilayah/DetailKeluarga" 
        || pathname === "/Wilayah/DetailKeluarga/KuisionerKesehatan/AnakSekolah"
        || pathname === "/Wilayah/DetailKeluarga/KuisionerKesehatan/Balita"  
        || pathname === "/Wilayah/DetailKeluarga/KuisionerKesehatan/Dewasa"  
        || pathname === "/Wilayah/DetailKeluarga/KuisionerKesehatan/IbuHamil"  
        || pathname === "/Wilayah/DetailKeluarga/KuisionerKesehatan/IbuMenyusui"  
        || pathname === "/Wilayah/DetailKeluarga/KuisionerKesehatan/Remaja"  
        || pathname === "/Wilayah/DetailKeluarga/KuisionerKesehatan/UsiaLanjut"  
        || pathname === "/Wilayah/DetailKeluarga/KuisionerUmum" 
        ? <NavbarAdmin/> : !disable.includes(pathname) && <Navbar/>}
        <div className='overflow-x-hidden overflow-y-hidden'>
          {children}
        </div>
        {!disable.includes(pathname) && <Footer/>}
      </body>
    </html>
  )
}
