const express = require('express'); //Nạp thư viện express vào code và lưu vào biến express
const port = process.env.PORT || 3001; //Chạy thư viện ở cổng nào
const app = express(); //gọi express dưới dạng thực thi hàm, (express là hàm) => trả về instances
                       //app là đối tượng chính diện diện cho app/ứng dụng nodeJs

//định nghĩa route - tuyến đường
app.get('/', (req, res) => res.send("Hello World!")); //arrow function

app.listen(port, () => console.log(`Server is running on port ${port}`));