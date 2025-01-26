import React from 'react'
// import HeroSection from '../Components/HeroSection'
import ShopProduct from '../../components/ShopProduct'
import CartProvider from '@/components/Cart/CartProvider'

const Page = () => {
  return (
    <div>
       {/* <HeroSection title='Our Shop' homeLink='/' currentPage='Shop ' backgroundImage='/starbg.png'  /> */}
<CartProvider>
      <ShopProduct/>
      </CartProvider>
    </div>
  )
}

export default Page