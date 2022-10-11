import React from 'react';

const Contact = () => {
    return (
        <div className='grid wide'>
            <div className='flex'>
                <div className="company">
                    <h2>chi nhánh công ty</h2>
                    <h3>MRSIMPLE CRESCENT MALL</h3>
                    <p>3F-37 Crescent Mall 101 Tôn Dật Tiên, Tân Phong, Quận 7, Thành phố Hồ Chí Minh</p>
                    <h3>MRSIMPLE HÀ NỘI</h3>
                    <p>L3-15 Vincom Phạm Ngọc Thạch, 2 Phạm Ngọc Thạch, Trung Tự, Đống Đa, Hà Nội</p>
                    <h3>MRSIMPLE VŨNG TÀU</h3>
                    <p>42 Ba Cu, Phường 1, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu</p>
                </div>
                <div>
                    <h2 className='contact_title'>LIÊN HỆ VỚI CÔNG TY</h2>
                    <h4>Email</h4>
                    <p>mrsimplestyle@gmail.com</p>
                    <h4>Liên kết mạng xã hội</h4>
                    <p>Facebook: MrsimpleStyle</p>
                    <p className="ins">Instagram: @MrsimpleStyle_store</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;