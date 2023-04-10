const data = [
  {
    id: 0,
    name: 'Phá lấu bò Cô Thảo',
    img: 'https://pgdphurieng.edu.vn/wp-content/uploads/2023/03/2-cach-lam-pha-lau-heo-pha-lau-bo-ngon-nhu-o-quan-tai-nha-202112291545540967.jpg',
    timeOpen: '11:00',
    timeClose: '21:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 4',
    type: 'khác',
    kobiet: 'Miếng phá lấu được cô chủ chiên chín mềm, lá sách giòn, gan béo và nước chấm nước dừa càng làm nâng tầm món ăn thêm mấy phần cuốn hút. Khi ăn kèm bánh mì và chút nước mắm do chính cô Thảo pha chế thì ta mới cảm nhận hết được hương vị của nó.',
  },

  {
    id: 1,
    name: 'Quán bánh mì Hòa Mã',
    img: 'https://chefjob.vn/wp-content/uploads/2018/08/banh-mi-thit-sai-gon.jpg',
    timeOpen: '6:00',
    timeClose: '10:00',
    minPrice: 50000,
    maxPrice: 60000,
    address: 'Quận 3',
    type: 'Banhmi',
    kobiet: 'Quán ăn Sài Gòn mang tên Hòa Mã này là một trong những tiệm bánh mì chính gốc của Sài Gòn. Quán mở cửa lúc tờ mờ 6 giờ sáng thế mà luôn có một lượng lớn khách hàng cố định và có thể nhanh chóng bán hết chỉ trong vài giờ. Việc kinh doanh đã trải qua một vài thay đổi sau chục năm qua, tuy nhiên hương vị nguyên bản của bánh mì vẫn nhất quán, thậm chí còn càng in đậm trong lòng người dân Sài thành. Nhiều người đến quán không chỉ để thưởng thức món bánh mì trứ danh mà còn để tìm lại cảm giác xưa.',
  },

  {
    id: 2,
    name: 'Bánh đúc Ông Lưu',
    img: 'https://images.foody.vn/res/g1/638/s800/foody-banh-duc-phan-dang-luu-615-637474668866257954.jpg',
    timeOpen: '14:30',
    timeClose: '18:30',
    minPrice: 10000,
    maxPrice: 22000,
    address: 'Quận 6',
    type: 'khác',
    kobiet: 'Có nguồn gốc từ miền Bắc, bánh đúc nóng luôn khiến thực khách xuýt xoa vì độ thơm, dẻo của lớp bột được trộn đều với thịt chiên và nấm khi ăn bánh nóng hổi. Độ sần sật của bột trên lớp bột bánh đúc ở đây khá hấp dẫn, nấm thịt nhiều, gia vị vừa miệng, trộn thêm chút thơm bùi bùi của nhân đậu xanh nấu chín. Không còn nghi ngờ gì nữa, bạn sẽ nghiện món ăn này ngay tức khắc.',
  },

  {
    id: 3,
    name: 'Bánh mì Bà Điệp',
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaSEznamhyRxWgQN98saZOnGQKuqQGeYTiw&usqp=CAU`,
    timeOpen: '5:00',
    timeClose: '24:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 1',
    type: 'banhmi',
    kobiet: 'Với thâm niên vài chục năm gắn bó với Sài Gòn mà đây là một trong những quán bán bánh mì Sài Gòn nổi tiếng mà du khách nên tới thưởng thức một lần. Bạn sẽ được thưởng thức một món bánh mì giòn nóng thơm ngon cùng nhân là pate, đồ chua, hành,….với mức giá cực rẻ nên lúc nào quán cũng đông khách.',
  },

  {
    id: 4,
    name: 'Bánh mì cóc',
    img: `https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/10/Capture-44.png`,
    timeOpen: '5:00',
    timeClose: '20:30',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 2',
    type: 'banhmi',
    kobiet: 'Dù chỉ là một tiện bánh mì nhỏ song tiếng tăm đã bay khắp gần xa. Đây là một trong những tiệm bánh mì Sài Gòn nức tiếng mà bạn nên tới thưởng thức bởi ổ bánh mì ở đây nhìn vô cùng đặc biệt. Nó có hình tròn tròn chứ không phải là hình dài như những ổ bánh mì mà bạn thường thấy. Bên trong bánh mì là chả lụa, thịt, pate,…thơm ngon khiến người ăn chỉ cắn một miếng cũng ngập răng rồi.',
  },

  {
    id: 5,
    name: 'Bánh mì Huỳnh Hoa',
    img: `https://banhmihuynhhoa.vn/wp-content/uploads/2022/10/a4-1634199666-1236-1634199799.jpg`,
    timeOpen: '13:00',
    timeClose: '23:00',
    minPrice: 24000,
    maxPrice: 35000,
    address: 'Quận 1',
    type: 'banhmi',
    kobiet: 'Nếu bạn muốn được thưởng thức món bánh mì Sài Gòn ngon đúng điệu thì bạn có thể lựa chọn tiệm bánh mì Huỳnh Hoa. Tiệm bánh này được nhiều bạn trẻ yêu thích . Điểm khác biệt của món bánh mì ở quán chính là bạn sẽ được thưởng thức món thịt chả kẹp bánh mì. Một miếng bánh khi ăn vào sẽ được tràn ngập vị của pate, bơ, thịt jambon cùng vị béo ngậy hòa trộn với vỏ bánh mì tạo nên một mùi vị thơm bùi khác lạ. Bởi vậy mà tiệm bánh này lúc nào cũng đông du khách tới thưởng thức.',
  },

  {
    id: 6,
    name: 'Bánh mì Phúc Mập',
    img: 'https://kenh14cdn.com/203336854389633024/2022/7/27/4-1658908995132499168636.jpg',
    timeOpen: '6:00',
    timeClose: '11:00',
    minPrice: 20000,
    maxPrice: 40000,
    address: 'Quận 4',
    type: 'banhmi',
    kobiet: 'Được biết là một trong những quán bánh mì Sài Gòn nức tiếng từ lâu mà quán bánh mì Phúc Mập là một trong những quán đầu tiên bán món bánh mì kẹp thịt tại Sài Gòn. Các món kẹp như: pate, thịt, rau thơm,…đều mang hương vị đặc biệt riêng mà không quán nào có được. Cũng bởi vậy mà đây là một trong những quán bán bánh mì ngon ở Sài Gòn.',
  },

  {
    id: 7,
    name: 'Bánh mì Pháp Sẹo',
    img: 'https://vnn-imgs-f.vgcloud.vn/2021/10/08/10/loat-banh-mi-dat-khach-nhat-sai-gon-khach-chi-ca-tram-ngan-dat-ship-bang-taxi-1.jpg',
    timeOpen: '16:00',
    timeClose: '20:30',
    minPrice: 15000,
    maxPrice: 60000,
    address: 'Quận 5',
    type: 'banhmi',
    kobiet: 'Tiệm bánh là một trong những nơi bán bánh mì Sài Gòn ngon nức tiếng được người người ngợi khen. Hương vị thơm ngon trong ổ bánh mì cùng với những nguyên liệu ăn kèm được chế biến kỹ lưỡng mang vị đậm đà đặc biệt. Bởi vậy mà quán đã chinh phục được vị giác của mọi thực khách.',
  },

  {
    id: 8,
    name: 'Bánh mì Thạch Sanh',
    img: `https://static-images.vnncdn.net/files/publish/2022/9/15/banh-my-viet-nam-1632.jpg`,
    timeOpen: '17:00',
    timeClose: '24:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 6',
    type: 'banhmi',
    kobiet: 'Một trong những thương hiệu đã quen thuộc với người Sài Gòn – Như Lan. Đây là một tiệm bán bánh mì Sài Gòn thơm ngon mà khách du lịch trong và ngoài nước vô cùng yêu thích. Vỏ bánh giòn giòn bên tỏng có nhiều thịt: chả, dưa leo, pate,…mà ai ăn cũng không thể chê nhé.',
  },  

  {
    id: 9,
    name: 'Quán Út Hưng',
    img: 'https://inhat.vn/hcm/wp-content/uploads/2019/10/quan-bun-bo-sai-gon.jpg',
    timeOpen: '7:00',
    timeClose: '10:00',
    minPrice: 50000,
    maxPrice: 100000,
    address: 'Quận 3',
    type: 'bunbo',
    kobiet: 'Với tuổi đời hơn 20 năm, sau nhiều lần thay đổi địa điểm bán, đây là quán bún bò gây thương nhớ trong lòng người dân Sài Gòn vì được nấu đúng theo công thức cổ truyền của làng An Cựu Huế. Nước dùng thơm nồng mùi sả, được nấu trong nồi nhôm đáy tròn đúng kiểu Huế. Ngoài bò tái, bò bắp, tô bún cũng đầy ắp chả cua, chả tôm do quán tự làm ngon đặc sắc.',
  },

  {
    id: 9,
    name: 'Bún Bò Hồ Ếch',
    img: 'https://inhat.vn/hcm/wp-content/uploads/2019/10/quan-bun-bo-sai-gon-2-1024x683.jpg',
    timeOpen: '15:30',
    timeClose: '19:30',
    minPrice: 60000,
    maxPrice: 900000,
    address: 'Quận 2',
    type: 'bunbo',
    kobiet: 'Cái tên kế tiếp góp mặt trong danh sách này đó là Bún Bò Hồ Ếch - Quán bún bò Sài Gòn nổi tiếng. Tại quán có rất nhiều loại bún cho bạn lựa chọn như: bò tái, bò gân, nạm,… tô bún với nước dùng đậm đà, hương vị thơm ngậy, đầy ắp thịt khiến bất kì ai ghé quán cũng muốn quay trở lại để thưởng thức.',
  },

  {
    id: 9,
    name: 'Quán Ngự Bình',
    img: 'https://inhat.vn/hcm/wp-content/uploads/2019/10/quan-bun-bo-sai-gon-3-1024x768.jpg',
    timeOpen: '15:00',
    timeClose: '21:00',
    minPrice: 50000,
    maxPrice: 100000,
    address: 'Quận 6',
    type: 'bunbo',
    kobiet: 'Quán Ngự Bình phục vụ rất nhiều món đậm chất Huế như: bánh bèo, bánh khoái, bánh ướt,… và bún bò cũng không phải là ngoại lệ của quán. Hương vị bún tại đây được đánh giá chuẩn vị Huế xưa. Nước bún trong và thanh, sợi bún dai ngon. Thịt bò bắp được chọn lựa kĩ càng cùng rau sống tươi mát. Tất cả cùng hòa quyện trong một tô bún đong đầy vị Huế của bàn tay người đầu bếp nhiều năm kinh nghiệm.',
  },

  {
    id: 9,
    name: 'Bún Bò Cô Mai',
    img: 'https://inhat.vn/hcm/wp-content/uploads/2019/10/quan-bun-bo-sai-gon.jpg',
    timeOpen: '7:00',
    timeClose: '10:30',
    minPrice: 35000,
    maxPrice: 50000,
    address: 'Quận 4',
    type: 'bunbo',
    kobiet: 'Nổi tiếng với chất lượng bò bắp “siêu to khổng lồ”, bún bò cô Mai sẽ khiến bạn bất ngờ với chất lượng tô bún tại đây. Vì sự nổi tiếng về hương vị đặc sắc, đậm đà, bún ở quán rất nhanh hết nên thực khách phải đến từ rất sớm để thưởng thức món bún trứ danh này. Bạn còn chần chừ gì nữa mà không lên lịch rủ cạ cứng của mình đi và thưởng thức ngay nào.',
  },

  {
    id: 9,
    name: 'Quán Hạnh',
    img: 'https://inhat.vn/hcm/wp-content/uploads/2019/10/quan-bun-bo-sai-gon-5.jpg',
    timeOpen: '6:30',
    timeClose: '14:00',
    minPrice: 45000,
    maxPrice: 800000,
    address: 'Quận 5',
    type: 'bunbo',
    kobiet: 'Quán Hạnh đã tồn tại ở Sài Gòn hơn 30 năm do người Huế làm chủ. Nước bún đậm đà, được hầm từ xương bò, thanh và ngọt tự nhiên. Tại Quán Hạnh, bạn có thể lựa chọn bò bắp, chả, gân, cho phần bún của mình thêm hấp dẫn. Sợi bún dai, được trụng kĩ càng, ăn cùng nước dùng ngọt thanh đầy thịt cùng rau sống tươi ngon. Bạn hãy đến quán và thưởng thức ngay món ngon nổi tiếng này kẻo lỡ!!',
  },

  {
    id: 9,
    name: 'Bún Bò 44 Ngô Đức Kế',
    img: 'https://inhat.vn/hcm/wp-content/uploads/2019/10/quan-bun-bo-sai-gon-6.jpg',
    timeOpen: '6:00',
    timeClose: '14:00',
    minPrice: 20000,
    maxPrice: 55000,
    address: 'Quận 1',
    type: 'bunbo',
    kobiet: 'Bún bò 44 Ngô Đức Kế ở đây rất đặc sắc bởi mùi ruốc thơm thoang thoảng. Nước dùng của bún được hầm lâu với xương và gân bò, mang lại vị ngọt thanh cho bún. Ngoài ra, tô bún ở đây rất chất nhé, một tô rất to và đầy ắp được phục vụ mà cõ lẽ những bạn ăn yếu sẽ không hết nổi. Khi ăn tại đây bạn sẽ không phải nêm nếm gì nhiều đâu, vì vị bún đã ngon lắm rồi, bạn chỉ cần thêm một ít chanh và ớt là đã trở nên thơm ngon tuyệt hảo.',
  },

]

window.onscroll = function() {myFunction()};

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}