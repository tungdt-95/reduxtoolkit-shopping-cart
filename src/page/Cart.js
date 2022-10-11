import React from 'react';
// import React,{useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../store/cart-slice'
const Cart = () => {
    const quantity = useSelector(state => state.cart.totalQuan)
    const cartItems = useSelector((state) => state.cart.itemsList)
    const itemsList = useSelector((state) => state.cart.itemsList);
    let total = 0;
    itemsList.forEach((item) => {
        total += item.totalprice;
    });
    // const [ cart, setcart ] = useState([itemsList]);
    
    // useEffect ( () => {
    //     const datacart =  JSON.parse(localStorage.getItem('datacart'))
    //         if(datacart) setcart(datacart)
    // },[])
    // useEffect ( () => {
    //     localStorage.setItem('datacart',JSON.stringify(cart))
    // },[cart])
    return (
        <div className='grid wide'>
            <div className='row'>
                <div className='col l-9 m-12 c-12'>
                    <p className='quan_cart'>Bạn có {quantity} sản phẩm trong giỏ hàng</p>
                    <table>
                        <tr>
                            <th>Hình ảnh SP</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Tổng tiền</th>
                            <th>Xóa</th>

                        </tr>
                        {cartItems.map((product, index) => (
                            <CartItems product={product} key={index}></CartItems>
                        )
                        )}
                    </table>
                </div>
                <div className='col l-3 m-12 c-12'>
                    <table className='total'>
                        <tr>
                            <th>Thành Tiền:</th>
                            <th>{total}$</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
const CartItems = (props) => {
    const { id, img, title, quantity, price, totalprice } = props.product;

    const dispatch = useDispatch();
    const incrementCartItem = () => {
        dispatch(
            cartActions.AddToCart({
                title,
                id,
                price,
            })
        );
    };
    const decrementCartItems = () => {
        dispatch(cartActions.RemoveFromCart(id));
    };

    return (
            <tr className='product_cart' key={id}>             
                <td>
                    <img src={img} className="img_cart" alt='imgeror'></img>
                </td>
                <td className='cart_title'>{title}</td>
                <td>
                    <button onClick={decrementCartItems} className="cart-actions">
                        -
                    </button>
                    <label className='quantity'>{quantity}</label>
                    <button onClick={incrementCartItem} className="cart-actions">
                        +
                    </button>
                </td>
                <td>{price}$</td>
                <td>{totalprice}$</td>
                <td onClick={decrementCartItems} style={{ cursor: "pointer" }}>X</td>
            </tr>

    )
}
export default Cart;