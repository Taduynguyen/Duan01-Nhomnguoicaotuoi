const data = [
    {
        tenQuan: '',
        diaDiem: '',
        moCua: '5h30',
        dongCua: '12h30',
        monAn: '',
        giaTien: '',
        mieuTa: '',
    }
];


// Hiển thị các quán theo khung thời gian tùy chọn (mặc định sẽ là các quán đang mở)

const currentTime = new Date();     // Lấy ra thời gian trên máy tính
const currenHour = currentTime.getHours();     // Lấy ra số giờ
const currenMinutes = currentTime.getMinutes();    // Lấy ra số phút


const timeString = data.moCua;
const parts = timeString.split(h);
console.log(parts);
const hours = parseInt(parts[0]);
const minutes = parseInt(parts[1]);
const totalMinutes = hours * 60 + minutes;


const timeString2 = data.dongCua;
const parts2 = timeString2.split(h);
console.log(parts);
const hours2 = parseInt(parts[0]);
const minutes2 = parseInt(parts[1]);
const totalMinutes2 = hours2 * 60 + minutes2;