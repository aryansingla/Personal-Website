import "./product.css";

const Product = ({ name, text, img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <h1 className="p-h1">{name}</h1>
        <p className="p-p">{text}</p>
      </a>
    </div>
  );
};

export default Product;
