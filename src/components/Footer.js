import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='grid wide'>
        <div className='row'>
          <div className='col l-3 m-6 c-6'>
            <h2 className="footer_title">HƯỚNG DẪN MUA HÀNG</h2>
            <ul>
              <li>
                <a>Cách mua hàng</a>
              </li>
              <li>
                <a>Thông tin chung</a>
              </li>
              <li>
                <a>Giao hàng</a>
              </li>
              <li>
                <a>Cách trả lại hàng</a>
              </li>
            </ul>
          </div>
          <div className='col l-3 m-6 c-6'>
            <h2 className="footer_title">THEO DÕI CHÚNG TÔI</h2>
            <ul>
              <li>
                <a>Bảng tin</a>
              </li>
              <li>
                <a>FaceBook</a>
              </li>
              <li>
                <a>Tiktok</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
            </ul>
          </div>
          <div className='col l-3 m-6 c-6'>
            <h2 className="footer_title">CHÍNH SÁCH</h2>
            <ul>
              <li>
                <a>Chính sách bảo mật</a>
              </li>
              <li>
                <a>Chính sách vận chuyển</a>
              </li>
            </ul>
          </div>
          <div className='col l-3 m-6 c-6'>
            <h2 className="footer_title">CÔNG TY</h2>
            <ul>
              <li>
                <a>Giới thiệu</a>
              </li>
              <li>
                <a>Cửa hàng</a>
              </li>
              <li>
                <a>Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;