import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaUserGraduate } from 'react-icons/fa';
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
    const quantity = useSelector(state => state.cart.totalQuan)
    const [menu, setmenu] = useState(false);
    return (
        <header className='header'>
            <div className='grid'>
                <div className='row'>
                    <div className='col l-4'>
                        <div className='menu_moblie'>
                            <BiMenuAltRight onClick={() => setmenu(!menu)} style={{ fontSize: 30 }} />
                        </div>
                        <nav className={menu ? "active" : ""}>
                            <div className='menu_close'>
                                <GrClose onClick={() => setmenu(!menu)}  />
                            </div>
                            <ul>
                                <li className='menu_item'>
                                    <Link className='menu_link' to="./">Trang Chủ</Link>
                                </li>
                                <li className='menu_item'>
                                    <Link className='menu_link' to="/product">Sản Phẩm</Link>
                                </li>
                                <li className='menu_item'>
                                    <Link className='menu_link' to="/acses">Phụ kiện</Link>
                                </li>
                                <li className='menu_item'>
                                    <Link className='menu_link' to="/contact">Liên hệ</Link>
                                </li>
                            </ul>
                        </nav>


                    </div>
                    <div className='col l-4'>
                        <Link to='./'><h1 className='header_logo'>MrsimpleShop</h1></Link>
                    </div>
                    <div className='col l-4'>
                        <div className='header_icons'>
                            <span className='header_leng'>{quantity}</span>
                            <Link to="/cart" className='icon_cart'>
                                <FaShoppingCart />
                            </Link>
                            <FaSearch />
                            <FaUserGraduate />
                        </div>

                    </div>
                </div>

            </div>
        </header>

    );
};

export default Header;