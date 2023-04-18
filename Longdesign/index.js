const data = [
  {
    id: 0,
    name: 'Quán cháo lòng bà Út',
    img: 'https://disaigon.com/wp-content/uploads/2022/12/Quan-chao-long-Ba-Ut-1.jpg',
    price: '50.000 đồng – 100.000 đồng',
    time: 'sáng từ 10h00 -14h00, chiều từ 16h00 – 21h00',
    address: '46A Đinh Công Tráng, phường Tân Định, quận 1',
    about: 'Hơn 80 năm nay, gánh cháo lòng Cô Út trên đường Cô Giang – quận 1, là địa chỉ quen thuộc của thực khách ở Sài Gòn. Với hương vị đậm đà, vừa vặn mà ai ăn cũng khen nức nở món cháo của bà. Đây là một trong các quán ăn ngon Sài Gòn mà bạn nên thưởng thức.',
    type: 'viahe'
  },

  {
    id: 1,
    name: 'Quán bánh mì Hòa Mã',
    img: 'https://static.riviu.co/960/image/2021/01/26/5257f4dab439775f1a1b81ba45f2efde_output.jpeg',
    price: '50.000 đồng – 60.000 đồng',
    time: '6h00 – 10h00',
    address: '53 Cao Thắng, quận 3',
    about: 'Bạn sẽ không khó để tìm đến tiệm bánh mì nhỏ mang tên Hòa Mã nằm trên đường Cao Thắng, quận 3. Theo lời kể lại của nhiều người thì đây là một trong những nơi bán bánh mì thịt đầu tiên ở Sài Gòn. Chủ nhân của nó là hai vợ chồng người Bắc di cư vào Nam từ trước những năm 50.',
    type: 'viahe'
  },

  {
    id: 2,
    name: 'Bánh đúc Phan Đăng Lưu',
    img: 'https://static.riviu.vn/image/2019/10/28/ea3ab35c9ad040c2af7e2031df1428ae_output.jpeg',
    price: '55.000 đồng – 60.000 đồng',
    time: '6h00 – 1h00 đêm',
    address: '413 – 415 Nguyễn Trãi, phường 7, quận 5',
    about: 'Nổi tiếng về độ lâu đời và hương vị món ăn này ở Sài Gòn thì phải kể đến hàng bánh đúc Phan Đăng Lưu. Bánh ở đây hấp dẫn ở độ dẻo dai của bột, thịt nấm đủ đầy và nêm nếm vừa miệng. Hòa quyện thêm chút bùi bùi, thơm thơm cho bánh còn có đậu xanh nấu nhuyễn.',
    type: 'viahe'
  },

  {
    id: 3,
    name: 'Lẩu cua Khôi',
    img: 'https://afamilycdn.com/2017/photo-1-1512837957154.jpg',
    price: '200.000 đồng - 450.000 đồng',
    time: '9h00 - 22h00',
    address: '15A, Tôn Thất Tùng, Phạm Ngũ Lão,  Quận 1',
    about: 'Nhắc đến những quán ăn Sài Gòn thì không thể không nhắc đến thương hiệu của quán này. Cua đảm bảo tươi ngon, khi chín ánh màu đỏ tươi bắt mắt, chỉ cần nhìn thôi đã không kiềm được mà muốn thưởng thức. Nước lẩu gia truyền được nêm nếm đến độ vừa vặn, béo và ngọt tự nhiên của cua chính là sự đặc biệt mà không nơi đâu có được.',
    type: 'quanan'
  },

  {
    id: 4,
    name: 'Ốc nhớ Sài Gòn',
    img: 'https://reviewvilla.vn/wp-content/uploads/2022/06/Oc-nho-Sai-Gon-14.jpg',
    price: '150.000 đồng - 500.000 đồng',
    time: '16h00 – 0h00',
    address: '181 Nguyễn Thị Đặng, Tân Thới Hiệp, quận 12',
    about: 'Có thể nói ốc là món ăn vỉa hè không thể thiếu trong các cuộc vui chơi về đêm của thành phố không ngủ. Và nhắc tới ốc, tới quán ăn Sài Gòn, người ta lại truyền tai nhau về Ốc nhớ. Không gian quán thoáng mát và thiết kế khá đơn giản.',
    type: 'quanan'
  },

  {
    id: 5,
    name: 'Sủi cảo Thiên Thiên',
    img: 'https://images.foody.vn/res/g4/30086/s800/foody-sui-cao-hem-191-ha-ton-quyen-837-637186293390876770.jpg',
    price: '60.000 đồng - 100.000 đồng',
    time: '14h00 – 1h30',
    address: '197 Hà Tôn Quyền, phường 4, quận 11',
    about: 'Sủi cảo được yêu thích do lớp nhân đầy đặn, nước dùng thanh thanh, nguyên liệu chế biến tươi và chất lượng. Do được nấu theo cách thức ăn của người Hoa nên quý khách có thể sẽ thấy nước dùng nhạt, hãy thêm nước tương theo khẩu vị của mình sẽ cảm nhận món ăn ngon miệng hơn.',
    type: 'quanan'
  },

  {
    id: 6,
    name: 'Nhà hàng Maison Mận-Đỏ',
    img: 'https://cardtot.com/wp-content/uploads/2019/12/man_900_1_0.jpg',
    price: '500.000 đồng - 1.500.000 đồng',
    time: '11h00 - 22h00',
    address: '27J Đ. Trần Nhật Duật, Phường Tân Định, Quận 1',
    about: 'Maison Mận-Đỏ phục vụ đa dạng các món ăn Âu Á Việt, trong đó được chia làm 2 loại. Một là món ăn Việt được chế biến theo phong cách Việt đương đại, nổi bật bởi các món như cơm chiên tỏi bò Wagyu Nhật, bò ngũ vị nướng lá lốt,... Và hai là các món Âu với công thức nước sốt riêng đặc biệt, ngon nhất là tôm hùm phô mai, sườn cừu Úc, gan ngỗng Pháp, steak bò Úc,...',
    type: 'nhahang'
  },

  {
    id: 7,
    name: 'Ân Nam Quán',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/17/9d/62/c5/ban-ti-c.jpg',
    price: '120.000 đồng - 200.000 đồng',
    time: '11h00 - 23h00',
    address: ' 59 Nguyễn Bỉnh Khiêm, P. Đa Kao, Quận 1',
    about: 'Thực đơn của chuỗi Ân Nam Quán có tới hơn 80 món ăn đặc sản nổi tiếng của miền Trung, đặc biệt là các món ăn có nguồn gốc từ thành phố Đà Nẵng. Từ những nguyên liệu đơn giản, gần gũi, các món ăn tại đây luôn được lòng thực khách, đặc biệt với món Gà lên mâm.',
    type: 'nhahang'
  },

  {
    id: 8,
    name: 'Nhà hàng Út Cà Mau',
    img: 'https://images.foody.vn/res/g17/163500/s800/foody-ut-ca-mau-dac-san-cua-bien-dien-bien-phu-689-636616459950190129.jpg',
    price: '150.000 đồng - 220.000 đồng',
    time: '11h00 - 22h00',
    address: '512 Đ. Nguyễn Thị Minh Khai, Phường 2, Quận 3',
    about: 'Món ăn nổi bật và đặc sắc nhất trong thực đơn của nhà hàng là cua Cà Mau. Loại cua này là món ăn được nhiều người săn đón bởi lớp thịt thơm, dày và chắc nịch. Chính cái tên đã làm nên thương hiệu và mang món ăn của Cà Mau đến gần với người Sài Gòn hơn.',
    type: 'nhahang'
  },
]

const titleContent = document.getElementById('title-content');
const titles = document.getElementsByClassName("title-tag");
const tags = document.getElementsByClassName("tag");

for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("tag-active");
    current[0].className = current[0].className.replace(" tag-active", "");
    this.className += " tag-active";
  });
}

function createCard(cardInfo) {
  const {name, img, price, time, address, about} = cardInfo;

  return `
    <div class="content">
      <h1>${name}</h1>
      <div class="item">
          <img class="title-img" src="${img}">
          <div class="item-content">
              <p>${about}</p>
              <a href="#">Xem Thêm...</a>
              <ul>
                  <li>Địa chỉ: ${address}</li>
                  <li>Giờ mở cửa: ${time}</li>
                  <li>Giá bán: ${price}</li>
              </ul>
          </div>
      </div>
    </div>`
  ;
}

function renderData(data) {
  let str = '';

  data.forEach(element => {
      const newCardString = createCard(element);
      str += newCardString;
  });

  titleContent.innerHTML = str;
}

<<<<<<< Updated upstream
const dataViahe = data.filter(data.type === 'viahe');
=======
renderData(data);

const dataViahe = data.filter(data => data.type === 'viahe');
>>>>>>> Stashed changes
console.log(dataViahe);