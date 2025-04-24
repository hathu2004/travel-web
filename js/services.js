document.addEventListener('DOMContentLoaded', function(){
   
   document.querySelector('.add-to-cart-btn').addEventListener('click', function(){

      const tourData = document.getElementById('tour-data');
      const tourId = tourData?.dataset.id;
      const tourName = tourData?.dataset.name;
      const tourPrice = parseInt(tourData?.dataset.price, 10);
      
      // Lấy giỏ hàng từ localStorage hoặc tạo mới nếu chưa có
      let cart = JSON.parse(localStorage.getItem('cart'))||[];

      // Kiểm tra xem tour đã có trong giỏ hàng chưa
      const existingTour = cart.find(item => item.id === tourId);

      if(existingTour){
         existingTour.quantity +=1;
      } else {
         cart.push({
            id: tourId,
            name: tourName,
            price: tourPrice,
            quantity: 1
         });
      }

      // Lưu giỏ hàng mới vào localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Hien thi thong bao
      alert('Đã thêm tour vào giỏ hàng!');
   });
});