// faq.js
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  });
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Lấy giá trị từ các input
    const firstName = document.querySelector('input[placeholder="First name"]').value.trim();
    const lastName = document.querySelector('input[placeholder="Last name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const phone = document.querySelector('input[placeholder="Phone number"]').value.trim();
    const teamSize = document.querySelectorAll('select')[0].value;
    const location = document.querySelectorAll('select')[1].value;
    const message = document.querySelector('textarea').value.trim();
  
    // Kiểm tra dữ liệu đầu vào
    if (!firstName || !lastName || !email || !phone || teamSize === 'Team size' || location === 'Location' || !message) {
        messageBox.style.color = 'red';
        messageBox.textContent = 'Vui lòng điền đầy đủ thông tin.';
        return;
      }
    // Reset form
    form.reset(); // Đặt lại các trường
});
// xu ly bo loc

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const faqItems = document.querySelectorAll(".faq-item");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Bỏ class active khỏi tất cả nút
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const text = button.textContent.toLowerCase();

      // Xác định loại category
      let category = "";
      if (text.includes("tất cả") || text.includes("all")) {
        category = "all";
      } else if (text.includes("đặt tour & thanh toán (booking & payment)")) {
        category = "booking-payment";
      } else if (text.includes("chính sách huỷ & hoàn tiền (cancellation & refund)")) {
        category = "cancellation-refund";
      } else if (text.includes("visa & giấy tờ (visa & documents)")) {
        category = "visa-documents";
      } else if (text.includes("hỗ trợ khách hàng (customer support)")) {
        category = "customer-support";
      }

      // Hiển thị/ẩn các câu hỏi
      faqItems.forEach(item => {
        const itemCategory = item.dataset.category;
        if (category === "all" || itemCategory === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
// Hàm tìm kiếm câu hỏi
document.getElementById('faq-search').addEventListener('input', function(event) {
  let searchQuery = event.target.value.toLowerCase();
  
  // Lấy tất cả các câu hỏi
  let faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
      let question = item.querySelector('.faq-question').textContent.toLowerCase();
      
      // Kiểm tra nếu câu hỏi chứa từ khóa tìm kiếm
      if (question.includes(searchQuery)) {
          item.style.display = 'block';  // Hiển thị câu hỏi
      } else {
          item.style.display = 'none';   // Ẩn câu hỏi nếu không khớp
      }
  });
});


