# BaiTap02-PhatTrienUngDungWeb
"Bài tập 2: Lập trình web - Nguyễn Hùng Lân - MSSV: K215480106030"

Nội Dung Bài Tập

Cài đặt Apache web server:

Stop IIS

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/81e9b82d-6c77-4d96-a536-3693fd43b553" />

Em đã tạm thời Disabled toàn hoàn IIS để tránh trường hợp tự động khởi động lại

<img width="630" height="30" alt="image" src="https://github.com/user-attachments/assets/39f26dc5-5922-41a1-9a6f-c6ac78679aac" />

Download và giải nén Apache

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d1d0817b-a0bc-4a59-8b21-9abe94786265" />

Cấu hình domain nguyenhunglan.com

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d2744bb9-b719-45cc-a94c-2cb8c4281e97" />

Kết Quả Chạy Apache

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ca403fa1-d7c0-477b-bb5b-2c2049516e08" />

Cài Node.js

<img width="1481" height="752" alt="image" src="https://github.com/user-attachments/assets/7baf0bd1-4787-4a93-824e-4ae19d2ceb47" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/64b71e38-4de0-48b9-b315-143e9a1a559d" />

Tải và cài đặt NSSM

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/870544ae-2322-40f7-aaae-03c37c1ba110" />

Tạo file run-nodered.cmd

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/59425f78-0013-4f4b-a7e4-54d9284775a1" />

Cài đặt Node-RED như dịch vụ với NSSM

<img width="1097" height="632" alt="image" src="https://github.com/user-attachments/assets/8a77e47e-d8ce-4813-aef5-94c978d1b899" />

Khởi động dịch vụ Node-RED

<img width="1097" height="639" alt="image" src="https://github.com/user-attachments/assets/f9662f4b-4275-4fdf-8c56-de5d39f731fe" />

giao diện Node-RED

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0653172e-6ba5-4d8e-8b26-92f646bb28eb" />

Tạo DB và data test trên MSSQL

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f2184213-9855-4550-9aea-69b219b1ca08" />

Cài thư viện Node-RED

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9a1b6741-7614-4fda-a38f-de70e6e3b81c" />

Nội dung file settings.js sau khi sửa

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ed693ddb-1f92-48a0-b35a-03b41e2d8aa4" />

Tạo API backend bằng Node-RED

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/97f18b05-06c3-46e7-8e30-0818dada26c6" />

Màn hình đã tạo API bằng Node-RED

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cebdd22b-9ab2-42c6-8ef9-c08b5dcd5eaa" />

Tạo giao diện frontend
Gồm có 3 file code

- index.html: Giao diện form tìm kiếm, thêm dấu ấn cá nhân (tên/MSSV/bài tập ở footer)
- nguyenhunglan.css: Trang trí
- nguyenhunglan.js: JS tiền xử lý (validate), gửi API, hậu xử lý (hiển thị table từ JSON)

<img width="910" height="225" alt="image" src="https://github.com/user-attachments/assets/5c84cfc1-2621-4b33-b05d-59f018e7ea30" />

Kết quả cuối cùng

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/85df8b34-e4b5-4eaf-9d62-c53e1fdc124a" />

# NHẬN XÉT BÀI LÀM CỦA MÌNH 
1: quá trình cài đặt các phần mềm và các thư viện như nào?

Quá trình cài đặt các phần mềm như Apache, Node.js, Node-RED và thư viện cho Node-RED khá phức tạp nhưng logic. Em nhận thấy cần chú ý đến quyền Admin khi chạy lệnh, path chính xác (như D:\Apache24, D:\nodejs\nodered), và kiểm tra error log (error.log cho Apache, log CMD cho Node-RED). 
Ví dụ, cài Apache yêu cầu chỉnh httpd.conf và vhosts.conf để bind domain, còn Node.js/Node-RED dùng npm install với --prefix để custom path, rồi dùng NSSM tạo service để chạy background. Thư viện Node-RED cài qua Manage Palette đơn giản, nhưng cần restart service để apply. Khó khăn lớn nhất là debug lỗi (như port in use, syntax error), giúp em hiểu tầm quan trọng của documentation (Apache docs, Node-RED forum) và tool như netstat để check port. Tổng thể, em hiểu rằng cài đặt cần theo thứ tự (stop IIS trước, install service sau), và linh hoạt path nếu ổ D không có.

2: cách sử dụng nodered để tạo api back-end như nào?

Node-RED rất trực quan với giao diện kéo-thả node, giúp tạo API nhanh mà không viết code phức tạp. Em học được cách dùng HTTP In để nhận GET request (URL /timkiem với query param q), Function node tiền xử lý (set msg.query từ msg.req.query.q), MSSQL node kết nối DB (config server, port, user/pass, query LIKE '%@query%'), và HTTP Response trả JSON (status 200, header application/json). Debug node hữu ích để xem data trung gian. Khó khăn là param type (NVarChar cho Unicode) và connection (localhost\SQLEXPRESS), nhưng sau fix lỗi connect (enable TCP/IP, firewall port 1433), API chạy mượt. Em hiểu Node-RED phù hợp cho IoT/API đơn giản, với flow dễ scale (thêm node cho thêm/sửa/xóa).

3: cách frond-end tương tác với back-end ra sao?

Frontend (HTML/CSS/JS) tương tác backend qua AJAX (XMLHttpRequest), gửi request GET đến API Node-RED và nhận JSON để update UI động mà không reload page. Trong nguyenhunglan.js, em dùng xhr.open('GET', url) để gửi query, onreadystatechange xử lý response (JSON.parse để parse data), rồi build table HTML từ JSON để hiển thị ở div#result. Pre-process ở JS (check input rỗng) và post-process (render table) giúp user experience tốt. Em hiểu CORS không vấn đề vì same domain (localhost), nhưng thực tế cần header nếu cross-domain. Khó khăn là debug Network tab F12 để xem request status (200 OK hay 404), giúp hiểu client-server flow: frontend gửi data, backend query DB trả JSON, frontend render.

JSON sẽ có dạng 

<img width="522" height="232" alt="image" src="https://github.com/user-attachments/assets/c58b8473-5330-4118-ad9b-72dec4d1d3c2" />

[

  {
  
    "ID": 1,
    
    "HoTen": "Nguyễn Hùng Lân",
    
    "MSSV": "K215480106030",
    
    "Diem": 9.5
    
  }
  
]

Nếu không tìm thấy kết quả, trả mảng rỗng: []
