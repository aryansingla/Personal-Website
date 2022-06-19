import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import betaimage from "../../img/betaimage.png";
import projectbg1 from "../../img/projectbg1.png";
const ProductList = () => {
  return (
    <>
    <div className="pl" id="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some of My Projects</h1>
        <div className="pl-subtitle">Have a look</div>
        <div className="pl-seperatorblob2">
            <div></div>
          </div>
        <div className="pl-seperatorline2"></div>
      </div>
      <div className="pl-list" style={{backgroundImage:`url(${projectbg1})`}}>
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            text={item.text}
            name={item.name}
          />
        ))}
      </div>
      <div className="pl-desgin">
      <div className="certificate">
     <img src={betaimage} alt="" />
   </div>
   </div>
    </div>
    
   </>
  );
};

export default ProductList;
