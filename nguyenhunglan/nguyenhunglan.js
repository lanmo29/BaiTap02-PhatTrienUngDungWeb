document.getElementById("searchForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<p>Đang tìm kiếm...</p>";

  try {
    const response = await fetch(`http://localhost:1880/timkiem?q=${encodeURIComponent(name)}`);
    const data = await response.json();

    if (data.length === 0) {
      resultDiv.innerHTML = `<p>Không tìm thấy sinh viên nào tên <b>${name}</b>.</p>`;
    } else {
      let html = `<h3>Kết quả tìm kiếm:</h3>`;
      data.forEach((sv) => {
        html += `
          <div class="student-card">
            <p><b>Họ tên:</b> ${sv.HoTen}</p>
            <p><b>MSSV:</b> ${sv.MSSV}</p>
            <p><b>Điểm:</b> ${sv.Diem}</p>
          </div>
          <hr>
        `;
      });
      resultDiv.innerHTML = html;
    }
  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">Lỗi khi kết nối API: ${err.message}</p>`;
  }
});
