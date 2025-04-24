document.addEventListener('DOMContentLoaded', function(){
   const cartItemsContainer = document.getElementById('cart-items');
   const cartContainer = document.getElementById('cart-container');
   const emptyCart = document.getElementById('empty-cart');

   // Lấy giỏ hàng từ localStorage
   let cart = JSON.parse(localStorage.getItem('cart'))|| [];

   // Hiển thị giỏ hàng
   displayCart();

   // Xử lý sự kiện thanh toán
   document.querySelector('.checkout-btn').addEventListener('click', function() {
          alert('Đang chuyển hướng đến trang thanh toán...');
   });

   function displayCart(){
      if (cart.length === 0){
         cartContainer.style.display = 'none';
         emptyCart.style.display = 'block';
         return;
      }

      cartContainer.style.display = 'grid';
      emptyCart.style.display = 'none';

      // Xóa nội dung cũ
      cartItemsContainer.innerHTML = '';

      // Thêm các mục vào giỏ hàng (table body)
      cart.forEach((item) =>{
         const cartItemHTML = `
         <tr class="cart-item">
            <td data-label="Tour">
                <h3 class="cart-tour-title">${item.name}</h3>
            </td>
            <td data-label="Giá" class="cart-price">${formatCurrency(item.price)}</td>
            <td data-label="Số lượng">
              <div class="cart-quantity">
                <div class="quantity-btn minus">-</div>
                <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                <div class="quantity-btn plus">+</div>
              </div>
            </td>
            <td data-label="Tổng cộng" class="cart-subtotal">${formatCurrency(item.price*item.quantity)}</td>
            <td data-label="Xóa">
              <button class="remove-btn"><i class="fas fa-trash"></i></button>
            </td>
         </tr>
         `;
         cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
         
         // Thêm sự kiện cho các nút mới
         const newItem = cartItemsContainer.lastElementChild;
         newItem.querySelector('.remove-btn').addEventListener('click', function() {
            this.closest('.cart-item').remove();
            const itemId = item.id;
            cart = cart.filter(item => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartTotal(); 
            if(cart.length===0){location.reload(); }                  
         });

         newItem.querySelector('.plus').addEventListener('click', function() {
         const input = this.parentElement.querySelector('.quantity-input');
         input.value = parseInt(input.value) + 1;
         item.quantity = input.value;
         localStorage.setItem('cart', JSON.stringify(cart));
         updateCartTotal();
         });

         newItem.querySelector('.minus').addEventListener('click', function() {
         const input = this.parentElement.querySelector('.quantity-input');
         if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
            item.quantity = input.value;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartTotal();
         }
         });
      });

      updateCartTotal();
   }

   // Hàm cập nhật tổng tiền
   function updateCartTotal() {
      let total = 0;
      document.querySelectorAll('.cart-item').forEach(item => {
      const price = parseInt(item.querySelector('.cart-price').textContent.replace(/\D/g, ''));
      const quantity = parseInt(item.querySelector('.quantity-input').value);
      const itemTotal = price * quantity;
      
      item.querySelector('.cart-subtotal').textContent = formatCurrency(itemTotal);
      total += itemTotal;
      });
      
      document.querySelector('.summary-value').textContent = formatCurrency(total);
      document.querySelector('.vat').textContent = formatCurrency(total*0.1);
      document.querySelector('.total-amount').textContent = formatCurrency(total*0.9-500000);
   }

   // Hàm định dạng tiền tệ
   function formatCurrency(amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
   }
})