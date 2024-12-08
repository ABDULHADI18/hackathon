import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/header";
import Herosection from "./components/Hero/hero";
import Editors from "./components/Editors/editors";
import ProductCard from "./components/Product_Card/product_card";
import GreenDiv from "./components/greendiv/greendiv";
import Whitediv from "./components/whitediv/whitediv";
import Footer from "./components/Footer/Footer";


export default function Home(){
  return(
    <div>
      <Navbar />
      <Header />
      <Herosection />
      <Editors />
      <ProductCard />
      <GreenDiv /> 
      <Whitediv />    
      <Footer />
    </div>
  )
}
