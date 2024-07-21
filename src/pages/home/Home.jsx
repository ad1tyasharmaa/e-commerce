// import React from 'react'
// import { useContext } from "react"
import Layout from "../../components/layout/Layout"
import Front from "../../components/image/Front"
import Filter from "../../components/filter/Filter"
import ProductCard from "../../components/product_card/Product_card"
import Testimonial from "../../components/testimonial/Testimonial"
import Track from "../../components/track/Track"
// import Sign
// import myContext from "../../context/data/myContext"

const Home = () => {
//   const context=useContext(myContext)
//   console.log(context)
  return (
    <Layout>
      <Front/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home
