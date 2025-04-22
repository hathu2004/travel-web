// login
document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");
  const signupForm = document.getElementById("signup-form");
  const signinForm = document.getElementById("signin-form");

  // Chuyển đổi giữa form đăng nhập và đăng ký
  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  // Xử lý form đăng ký
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset errors
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";

    // Get values
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Simple validation
    let isValid = true;

    if (name === "") {
      document.getElementById("name-error").textContent =
        "Vui lòng nhập họ tên";
      isValid = false;
    }

    if (email === "") {
      document.getElementById("email-error").textContent =
        "Vui lòng nhập email";
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("email-error").textContent = "Email không hợp lệ";
      isValid = false;
    }

    if (password === "") {
      document.getElementById("password-error").textContent =
        "Vui lòng nhập mật khẩu";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("password-error").textContent =
        "Mật khẩu phải có ít nhất 6 ký tự";
      isValid = false;
    }

    if (confirmPassword === "") {
      document.getElementById("confirm-password-error").textContent =
        "Vui lòng xác nhận mật khẩu";
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById("confirm-password-error").textContent =
        "Mật khẩu không khớp";
      isValid = false;
    }

    if (isValid) {
      // Kiểm tra xem email đã tồn tại chưa
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.email === email);
      
      if (userExists) {
          document.getElementById('email-error').textContent = 'Email này đã được đăng ký';
      } else {
          // Lưu thông tin người dùng vào localStorage
          users.push({ name, email, password });
          localStorage.setItem('users', JSON.stringify(users));
          alert("Đăng ký thành công!");
          signupForm.reset();
          container.classList.remove("right-panel-active");
         
      }
  }

  });

  // Xử lý form đăng nhập
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset errors
    document.getElementById("signin-email-error").textContent = "";
    document.getElementById("signin-password-error").textContent = "";

    // Get values
    const email = document.getElementById("signin-email").value.trim();
    const password = document.getElementById("signin-password").value;

    // Simple validation
    let isValid = true;

    if (email === "") {
      document.getElementById("signin-email-error").textContent =
        "Vui lòng nhập email";
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("signin-email-error").textContent =
        "Email không hợp lệ";
      isValid = false;
    }

    if (password === "") {
      document.getElementById("signin-password-error").textContent =
        "Vui lòng nhập mật khẩu";
      isValid = false;
    }

    if (isValid) {
      // Lấy danh sách người dùng từ localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Tìm người dùng có email và mật khẩu khớp
      const user = users.find(user => user.email === email && user.password === password);
      
      if (user) {
          // Lưu thông tin người dùng đăng nhập hiện tại vào sessionStorage
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          
          // Trong ứng dụng thực tế, bạn sẽ dùng:
          window.location.href = 'index.html';
      } else {
         alert("Email hoặc mật khẩu không chính xác"); 
      }
  }
  });

  // Hàm kiểm tra email hợp lệ
  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
