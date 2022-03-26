import React, { } from 'react';
import { useParams } from 'react-router-dom';
import { productdata } from './Products';
import { cartActions } from '../store/cart-slice';
import { useDispatch } from 'react-redux';
const ProductDetails = ({ id, img, title, price }) => {
  const { idp } = useParams();

  return (
    <div>
      {
        productdata.filter((item) => item.id == idp).map((product, index) => (
          <div className="grid wide" key={index}>
            <div className="details_list">
              <ProDetails product={product} key={index}></ProDetails>
            </div>
          </div>
        ))
      }
    </div>
  );
};
const ProDetails = (props) => {
  const { id, img, title, price, color, size, description } = props.product;
  const dispatch = useDispatch();
  const Addtocart = () => {
    dispatch(cartActions.AddToCart({
      id,
      img,
      title,
      price,
    }))
  }
  return (
    <div className='row'>
      <div className='details'>
        <div className="col l-4 center">
          <img src={img} className="details_img" alt="ha"></img>
        </div>
        <div className="col l-4">
          <h2 className="details_title">{title}</h2>
          <p className="details_price">{price}$</p>
          <div className="details_color">
            {
              color.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color }}>
                </button>
              ))
            }
          </div>
          <p className="details_size">
            {
              size.map((size, index) => (
                <button key={index}>{size}</button>
              ))
            }
          </p>
          <p className="details_des">{description}</p>

          <button className="details_btn" onClick={Addtocart}>THÊM VÀO GIỎ HÀNG</button>
          <button className="details_btn" onClick={Addtocart}>MUA NGAY</button>
        </div>
        <div className="col l-4">
          <img src={img} className="details_img" alt="ha"></img>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails;