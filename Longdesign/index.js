const data = [
  { 
    id: 0,
    name: 'Quán Cháo Lòng Bà Út',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `50.000 đồng - 100.000 đồng`,
    time: `sáng từ 10h00 - 14h00, chiều từ 16h00 - 21h00`,
    address: `46A Điinh Công Tráng, phường Tân Định, Quận 1`,
    about: `Hơn 80 năm nay, gánh cháo lòng Bà Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },

  { 
    id: 1,
    name: 'Quán bánh mì Hòa Mã',
    img: 'https://halotravel.vn/wp-content/uploads/2020/09/banh-mi-hoa-ma-1.jpg',
    price: `50.000 đồng - 60.000 đồng`,
    time: `6h00 - 10h00`,
    address: `53 Cao Thắng, quận 3`,
    about: `Bạn sẽ không khó để tìm đến tiệm bánh mì nhỏ mang tên Hòa Mã nằm trên đường Cao Thắng,
    quận 3. Theo lời kể lại của nhiều người thì đây là một trong những nơi bán bánh mì thịt
    đầu tiên ở Sài Gòn. Chủ nhân của nó là hai vợ chồng người Bắc di cư vào Nam từ trước
    những năm 50.`,
  },

  { 
    id: 2,
    name: 'Bánh đúc Phan Đăng Lưu',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `50.000 đồng - 100.000 đồng`,
    time: `sangs từ 10h00 - 14h00, chiều từ 16h00 - 21h00`,
    address: `46A Điinh Công Tráng, phường Tân Định, Quận 1`,
    about: `Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },

  { 
    id: 3,
    name: 'Bánh đúc Phan Đăng Lưu',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `55.000 đồng - 60.000 đồng`,
    time: `6h00 - 1h00`,
    address: `413 – 415 Nguyễn Trãi, phường 7, quận 5`,
    about: `Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },

  { 
    id: 4,
    name: 'Quán Cháo Lòng Bà Út',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `50.000 đồng - 100.000 đồng`,
    time: `sangs từ 10h00 - 14h00, chiều từ 16h00 - 21h00`,
    address: `46A Điinh Công Tráng, phường Tân Định, Quận 1`,
    about: `Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },

  { 
    id: 5,
    name: 'Quán Cháo Lòng Bà Út',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `50.000 đồng - 100.000 đồng`,
    time: `sangs từ 10h00 - 14h00, chiều từ 16h00 - 21h00`,
    address: `46A Điinh Công Tráng, phường Tân Định, Quận 1`,
    about: `Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },

  { 
    id: 6,
    name: 'Quán Cháo Lòng Bà Út',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `50.000 đồng - 100.000 đồng`,
    time: `sangs từ 10h00 - 14h00, chiều từ 16h00 - 21h00`,
    address: `46A Điinh Công Tráng, phường Tân Định, Quận 1`,
    about: `Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },

  { 
    id: 7,
    name: 'Quán Cháo Lòng Bà Út',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `50.000 đồng - 100.000 đồng`,
    time: `sangs từ 10h00 - 14h00, chiều từ 16h00 - 21h00`,
    address: `46A Điinh Công Tráng, phường Tân Định, Quận 1`,
    about: `Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },

  { 
    id: 8,
    name: 'Quán Cháo Lòng Bà Út',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `50.000 đồng - 100.000 đồng`,
    time: `sangs từ 10h00 - 14h00, chiều từ 16h00 - 21h00`,
    address: `46A Điinh Công Tráng, phường Tân Định, Quận 1`,
    about: `Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },

  { 
    id: 9,
    name: 'Quán Cháo Lòng Bà Út',
    img: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-07-14/Co-gi-trong-to-chao-long-qua-4-lan-chu-van-me-hoac-thuc-khach-1-1531557921-252-width660height371.jpg',
    price: `50.000 đồng - 100.000 đồng`,
    time: `sangs từ 10h00 - 14h00, chiều từ 16h00 - 21h00`,
    address: `46A Điinh Công Tráng, phường Tân Định, Quận 1`,
    about: `Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
    của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
    cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.`,
  },
]

const titles = document.getElementsByClassName("title-tag");
const tags = document.getElementsByClassName("tag");
for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("tag-active");
    current[0].className = current[0].className.replace("tag-active", "");
    this.className += " tag-active";
  });
}


`<div class="content">
<h1>Quán cháo lòng bà Út</h1>
<div class="item">
    <img class="title-img" src="./images/chaolongbaut.png">
    <div class="item-content">
        <p>Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc
            của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món
            cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.</p>
        <a href="#">Xem Thêm...</a>
        <ul>
            <li>Địa chỉ: 46A Đinh Công Tráng, phường Tân Định, quận 1</li>
            <li>Giờ mở cửa: sáng từ 10h00 -14h00, chiều từ 16h00 – 21h00</li>
            <li>Giá bán: 50.000 đồng – 100.000 đồng.</li>
        </ul>
    </div>
</div>
</div>`