const data = [
  {
    id: 0,
    name: 'Phá lấu bò cô Thảo',
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
    name: 'Bánh đúc Phan Đăng Lưu',
    img: 'https://images.foody.vn/res/g1/638/s800/foody-banh-duc-phan-dang-luu-615-637474668866257954.jpg',
    timeOpen: '14:30',
    timeClose: '18:30',
    minPrice: 10000,
    maxPrice: 22000,
    address: 'Quận Phú Nhuận',
    type: 'khác',
    kobiet: 'Có nguồn gốc từ miền Bắc, bánh đúc nóng luôn khiến thực khách xuýt xoa vì độ thơm, dẻo của lớp bột được trộn đều với thịt chiên và nấm khi ăn bánh nóng hổi. Độ sần sật của bột trên lớp bột bánh đúc ở đây khá hấp dẫn, nấm thịt nhiều, gia vị vừa miệng, trộn thêm chút thơm bùi bùi của nhân đậu xanh nấu chín. Không còn nghi ngờ gì nữa, bạn sẽ nghiện món ăn này ngay tức khắc.',
  },

  {
    id: 3,
    name: 'Phá lấu bò cô Thảo',
    img: 
    timeOpen: '11:00',
    timeClose: '21:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 4',
    type: 'khác',
    kobiet: '',
  },

  {
    id: 4,
    name: 'Phá lấu bò cô Thảo',
    img: 
    timeOpen: '11:00',
    timeClose: '21:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 4',
    type: 'khác',
    kobiet: '',
  },

  {
    id: 5,
    name: 'Phá lấu bò cô Thảo',
    img:
    timeOpen: '11:00',
    timeClose: '21:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 4',
    type: 'khác',
    kobiet: '',
  },

  {
    id: 6,
    name: 'Phá lấu bò cô Thảo',
    img:
    timeOpen: '11:00',
    timeClose: '21:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 4',
    type: 'khác',
    kobiet: '',
  },

  {
    id: 7,
    name: 'Phá lấu bò cô Thảo',
    img:
    timeOpen: '11:00',
    timeClose: '21:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 4',
    type: 'khác',
    kobiet: '',
  },

  {
    id: 8,
    name: 'Phá lấu bò cô Thảo',
    img:
    timeOpen: '11:00',
    timeClose: '21:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 4',
    type: 'khác',
    kobiet: '',
  },

  {
    id: 9,
    name: 'Phá lấu bò cô Thảo',
    img:
    timeOpen: '11:00',
    timeClose: '21:00',
    minPrice: 10000,
    maxPrice: 30000,
    address: 'Quận 4',
    type: 'khác',
    kobiet: '',
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