import Image from 'next/image'
import Header from '@/components/header/Header'
import Home from '@/components/home/Home'
import Menu from '@/components/menu/Menu'
import Healthy from '@/components/healthy/Healthy'
import About from '@/components/about/About'
import Testimoni from '@/components/about/Testimoni'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'


export default function App() {
  return (
    <main className={`
        bg-bg-fundo-lp flex flex-col items-center 
        justify-center overflow-hidden w-screen lg:w-full
    `}>

      <Header></Header>
      <Home></Home>
      <Menu></Menu>
      <Healthy></Healthy>
      <About></About>
      <Testimoni></Testimoni>
      <Contact></Contact>
      <Footer></Footer>

    </main>
  )
}
