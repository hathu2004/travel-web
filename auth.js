    document.addEventListener('DOMContentLoaded', function() {
        // Lấy thông tin người dùng từ sessionStorage
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        const authSection = document.getElementById('auth-section');
        if (currentUser) {
          // Hiển thị thông tin người dùng và nút đăng xuất
          const firstLetter = currentUser.name.charAt(0).toUpperCase();
          authSection.innerHTML = `
              <a href="index.html" class="btn btn-outline" onclick="logout()">Đăng Xuất</a>
              <a href="cart.html" class="btn btn-primary"> Giỏ Hàng (0)</a>             
          `;                             
        } else {
          // Hiển thị nút đăng nhập
          authSection.innerHTML = `
                <a href="login.html" class="btn btn-outline">Đăng Nhập</a>
                <a href="#" class="btn btn-primary" onclick="alert('Vui lòng đăng nhập để xem giỏ hàng')"; return false;> Giỏ Hàng (0)</a>
              `; 
        }        
    });

    function logout() {
        // Xóa thông tin đăng nhập hiện tại
        sessionStorage.removeItem('currentUser');
    }
