document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử DOM
    const workplaceSelect = document.getElementById('workplace');
    const jobLocationSelect = document.getElementById('job-location');
    const searchForm = document.querySelector('.search-form');
    
    // Dữ liệu job mẫu (bao gồm các job hiện có và các job mới)
    const jobsData = [
      {
        title: "Hướng dẫn viên du lịch",
        workplace: "ha-noi",
        position: "tour-guide",
        location: "Hà Nội",
        description: "Chịu trách nhiệm hướng dẫn khách tham quan các địa điểm du lịch nổi tiếng tại Hà Nội.",
        requirements: "Kỹ năng giao tiếp tốt, yêu thích công việc hướng dẫn viên du lịch.",
        benefits: "Mức lương hấp dẫn, thưởng theo hiệu suất công việc, hỗ trợ ăn uống và di chuyển."
      },
      {
        title: "Nhân viên điều hành tour",
        workplace: "da-nang",
        position: "tour-operator",
        location: "Đà Nẵng",
        description: "Quản lý và điều phối các tour du lịch, đảm bảo lịch trình và dịch vụ tốt cho du khách.",
        requirements: "Kinh nghiệm trong việc tổ chức và quản lý tour, kỹ năng giao tiếp tốt.",
        benefits: "Lương cao, thưởng lễ tết, chế độ bảo hiểm đầy đủ."
      },
      {
        title: "Nhân viên đặt vé",
        workplace: "hue",
        position: "ticketing-staff",
        location: "Huế",
        description: "Xử lý các yêu cầu đặt vé cho khách hàng, đảm bảo tính chính xác và kịp thời.",
        requirements: "Kỹ năng tổ chức và làm việc chi tiết, khả năng làm việc dưới áp lực cao.",
        benefits: "Môi trường làm việc chuyên nghiệp, lương cơ bản và thưởng theo doanh thu."
      },
      {
        title: "Nhân viên tư vấn du lịch",
        workplace: "ho-chi-minh",
        position: "travel-consultant",
        location: "Hồ Chí Minh",
        description: "Tư vấn, giới thiệu các tour du lịch phù hợp với nhu cầu của khách hàng tại Hồ Chí Minh.",
        requirements: "Kỹ năng giao tiếp, am hiểu về các điểm du lịch.",
        benefits: "Lương căn bản + hoa hồng, chế độ bảo hiểm đầy đủ, cơ hội thăng tiến."
      },
      {
        title: "Nhân viên bán tour",
        workplace: "phu-quoc",
        position: "tour-sales",
        location: "Phú Quốc",
        description: "Chịu trách nhiệm bán các tour du lịch, duy trì mối quan hệ với khách hàng cũ và tìm kiếm khách hàng mới.",
        requirements: "Kỹ năng bán hàng, chăm sóc khách hàng tốt, có đam mê với ngành du lịch.",
        benefits: "Lương cơ bản + hoa hồng, chế độ thưởng theo hiệu quả công việc."
      },
      {
        title: "Quản lý khách sạn",
        workplace: "nha-trang",
        position: "hotel-manager",
        location: "Nha Trang",
        description: "Quản lý mọi hoạt động tại khách sạn, từ việc quản lý nhân viên đến kiểm soát chất lượng dịch vụ.",
        requirements: "Kinh nghiệm trong ngành khách sạn, kỹ năng lãnh đạo và quản lý đội ngũ.",
        benefits: "Lương hấp dẫn, bảo hiểm sức khỏe, cơ hội thăng tiến trong nghề nghiệp."
      },
      {
        title: "Nhân viên lễ tân khách sạn",
        workplace: "sa-pa",
        position: "hotel-receptionist",
        location: "Sa Pa",
        description: "Đón tiếp khách, hỗ trợ khách hàng về các dịch vụ của khách sạn, giải quyết các yêu cầu trong suốt kỳ nghỉ của khách.",
        requirements: "Ngoại hình dễ nhìn, kỹ năng giao tiếp tốt, nhiệt tình và thân thiện.",
        benefits: "Môi trường làm việc chuyên nghiệp, thưởng lễ tết và bảo hiểm đầy đủ."
      },
      // Các job mới
      {
        title: "Nhân viên chăm sóc khách hàng",
        workplace: "ha-noi",
        position: "customer-service",
        location: "Hà Nội",
        description: "Chăm sóc khách hàng trước, trong và sau chuyến đi, giải quyết các vấn đề phát sinh.",
        requirements: "Kỹ năng giao tiếp tốt, có khả năng giải quyết vấn đề hiệu quả.",
        benefits: "Mức lương cơ bản + thưởng, hỗ trợ ăn trưa và di chuyển."
      },
      {
        title: "Quản lý lữ hành",
        workplace: "da-nang",
        position: "travel-agency-manager",
        location: "Đà Nẵng",
        description: "Quản lý và phát triển các chương trình tour du lịch, điều phối nhân viên và đảm bảo chất lượng dịch vụ.",
        requirements: "Kinh nghiệm làm việc trong ngành lữ hành, kỹ năng lãnh đạo và quản lý.",
        benefits: "Lương cao, thưởng theo hiệu suất công việc, chế độ bảo hiểm đầy đủ."
      },
      {
        title: "Nhân viên marketing du lịch",
        workplace: "hue",
        position: "tourism-marketing",
        location: "Huế",
        description: "Xây dựng và thực hiện các chiến lược marketing cho các tour du lịch và dịch vụ du lịch khác.",
        requirements: "Kỹ năng marketing tốt, hiểu biết về ngành du lịch và xu hướng thị trường.",
        benefits: "Lương cơ bản + thưởng theo doanh thu, bảo hiểm sức khỏe và du lịch hàng năm."
      },
      {
        title: "Nhân viên tổ chức sự kiện du lịch",
        workplace: "ha-noi",
        position: "event-organizer",
        location: "Hà Nội",
        description: "Chịu trách nhiệm lên kế hoạch và tổ chức các sự kiện du lịch, hội nghị và hội thảo liên quan đến ngành du lịch.",
        requirements: "Kỹ năng tổ chức sự kiện, khả năng làm việc dưới áp lực cao.",
        benefits: "Mức lương cạnh tranh, cơ hội tham gia các sự kiện lớn."
      },
      {
        title: "Nhân viên quản lý dịch vụ khách sạn",
        workplace: "da-nang",
        position: "hotel-service-manager",
        location: "Đà Nẵng",
        description: "Quản lý các dịch vụ tại khách sạn như giặt ủi, dọn phòng, và các dịch vụ khác để đảm bảo chất lượng phục vụ khách hàng.",
        requirements: "Kỹ năng quản lý tốt, có kinh nghiệm trong ngành dịch vụ khách sạn.",
        benefits: "Chế độ đãi ngộ tốt, bảo hiểm y tế, và cơ hội thăng tiến trong công việc."
      },
      {
        title: "Nhân viên chăm sóc khách hàng du lịch",
        workplace: "ho-chi-minh",
        position: "tour-customer-service",
        location: "Hồ Chí Minh",
        description: "Hỗ trợ khách hàng trong suốt chuyến đi, giải đáp thắc mắc và xử lý các vấn đề phát sinh.",
        requirements: "Khả năng giao tiếp tốt, có kinh nghiệm làm việc trong ngành du lịch.",
        benefits: "Lương ổn định, chế độ phúc lợi đầy đủ."
      },
      {
        title: "Nhân viên bảo vệ khu du lịch",
        workplace: "nha-trang",
        position: "tour-security",
        location: "Nha Trang",
        description: "Đảm bảo an ninh tại khu du lịch, giám sát các hoạt động và bảo vệ tài sản của khách du lịch.",
        requirements: "Có kinh nghiệm làm bảo vệ, sức khỏe tốt và thái độ nghiêm túc.",
        benefits: "Mức lương ổn định, chế độ bảo hiểm đầy đủ, thưởng theo kết quả công việc."
      },
      {
        title: "Nhân viên phục vụ tại nhà hàng du lịch",
        workplace: "sa-pa",
        position: "restaurant-staff",
        location: "Sa Pa",
        description: "Phục vụ khách hàng tại nhà hàng trong các khu du lịch, đảm bảo cung cấp dịch vụ tốt nhất cho khách.",
        requirements: "Kỹ năng giao tiếp tốt, ngoại hình ưa nhìn, nhiệt tình.",
        benefits: "Lương cơ bản + tiền tip, chế độ đãi ngộ tốt, hỗ trợ ăn ở."
      },
      {
        title: "Nhân viên bảo trì cơ sở vật chất du lịch",
        workplace: "phu-quoc",
        position: "maintenance-staff",
        location: "Phú Quốc",
        description: "Bảo trì các công trình và cơ sở vật chất tại các khu du lịch, đảm bảo chúng luôn trong tình trạng hoạt động tốt.",
        requirements: "Có kinh nghiệm bảo trì, sửa chữa thiết bị, công trình cơ sở vật chất.",
        benefits: "Lương ổn định, thưởng theo hiệu quả công việc, chế độ phúc lợi đầy đủ."
      },
      {
        title: "Nhân viên hỗ trợ khách du lịch quốc tế",
        workplace: "ho-chi-minh",
        position: "international-tour-support",
        location: "Hồ Chí Minh",
        description: "Hỗ trợ khách quốc tế trong việc đặt tour, dịch vụ, và các thủ tục liên quan đến chuyến đi.",
        requirements: "Ngoại ngữ tốt, am hiểu về các dịch vụ du lịch quốc tế.",
        benefits: "Mức lương hấp dẫn, thưởng theo doanh thu, cơ hội học hỏi từ khách quốc tế."
      },
      {
        title: "Nhân viên tổ chức tour chuyên nghiệp",
        workplace: "da-nang",
        position: "professional-tour-organizer",
        location: "Đà Nẵng",
        description: "Tổ chức và lập kế hoạch cho các tour du lịch chuyên nghiệp, từ việc lựa chọn điểm đến đến việc liên hệ với các đối tác.",
        requirements: "Kinh nghiệm tổ chức tour du lịch, khả năng làm việc nhóm và độc lập.",
        benefits: "Lương cao, thưởng theo kết quả công việc, chế độ phúc lợi đầy đủ."
      },
      {
        title: "Nhân viên quay phim, chụp ảnh du lịch",
        workplace: "hue",
        position: "tour-media",
        location: "Huế",
        description: "Quay phim, chụp ảnh các cảnh đẹp, các hoạt động du lịch để tạo ra sản phẩm truyền thông cho các tour du lịch.",
        requirements: "Kỹ năng quay phim, chụp ảnh, có sáng tạo và yêu thích công việc sáng tạo.",
        benefits: "Lương ổn định, chế độ bảo hiểm đầy đủ, cơ hội thăng tiến trong nghề nghiệp."
      },
      {
        title: "Nhân viên tư vấn visa du lịch",
        workplace: "sa-pa",
        position: "visa-consultant",
        location: "Sa Pa",
        description: "Tư vấn và hỗ trợ khách hàng trong việc xin visa du lịch, giải đáp các thắc mắc liên quan đến thủ tục visa.",
        requirements: "Hiểu biết về các quy trình xin visa, kỹ năng tư vấn tốt.",
        benefits: "Lương hấp dẫn, thưởng theo kết quả công việc, hỗ trợ ăn ở cho nhân viên."
      },
      {
        title: "Nhân viên hỗ trợ đặt phòng khách sạn",
        workplace: "nha-trang",
        position: "hotel-booking-staff",
        location: "Nha Trang",
        description: "Hỗ trợ khách hàng trong việc đặt phòng khách sạn, đảm bảo thông tin đặt phòng chính xác và kịp thời.",
        requirements: "Kỹ năng giao tiếp tốt, quen thuộc với các hệ thống đặt phòng trực tuyến.",
        benefits: "Lương cơ bản + hoa hồng, chế độ bảo hiểm sức khỏe, cơ hội thăng tiến trong nghề nghiệp."
      },
      {
        title: "Nhân viên logistics cho tour du lịch",
        workplace: "ho-chi-minh",
        position: "tour-logistics",
        location: "Hồ Chí Minh",
        description: "Quản lý vận chuyển, lưu trú, và các dịch vụ khác trong tour du lịch để đảm bảo hoạt động suôn sẻ.",
        requirements: "Kinh nghiệm trong ngành logistics, có khả năng làm việc với các đối tác vận chuyển.",
        benefits: "Lương cơ bản, chế độ bảo hiểm đầy đủ, cơ hội thăng tiến trong công ty."
      }
    ];
  
    // Xử lý sự kiện submit form
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Ngăn form reload trang
      
      const selectedWorkplace = workplaceSelect.value;
      const selectedPosition = jobLocationSelect.value;
      
      // Lọc job phù hợp
      const matchedJobs = jobsData.filter(job => 
        job.workplace === selectedWorkplace && 
        job.position === selectedPosition
      );
      
      // Hiển thị kết quả
      displayResults(matchedJobs);
    });
  
    // Hàm hiển thị kết quả
    /**
     * Hiển thị kết quả tìm kiếm công việc
     * @param {Array} jobs - Mảng các job phù hợp với tìm kiếm
     */
    function displayResults(jobs) {
      // Xóa kết quả cũ nếu có
      const oldResults = document.querySelector('.job-results');
      if (oldResults) oldResults.remove();
      
      // Tạo container kết quả
      const resultsContainer = document.createElement('div');
      resultsContainer.className = 'job-results';
      
      if (jobs.length === 0) {
        resultsContainer.innerHTML = '<p>Không tìm thấy công việc phù hợp.</p>';
      } else {
        // Tạo HTML cho mỗi job
        const jobsHTML = jobs.map(job => `
          <div class="job">
            <div class="job-info">
              <div class="left">
                <h2>${job.title}</h2>
              </div>
              <div class="right">
                <p><strong>Địa điểm:</strong> ${job.location}</p>
                <p><strong>Mô tả công việc:</strong> ${job.description}</p>
                <p><strong>Yêu cầu:</strong> ${job.requirements}</p>
                <p><strong>Quyền lợi:</strong> ${job.benefits}</p>
              </div>
            </div>
          </div>
        `).join('');
        
        resultsContainer.innerHTML = jobsHTML;

      }
      
      // Thêm kết quả vào container #results
      const resultsParent = document.getElementById('results') || searchForm.parentNode;
      resultsParent.appendChild(resultsContainer);
    }
});
document.getElementById('search-btn').addEventListener('click', function () {
    const location = document.getElementById('location').value;
    const jobPosition = document.getElementById('job-position').value;
    const applyBtn = document.getElementById('apply-btn');
  
    // Giả lập tìm kiếm công việc (thay bằng logic tìm kiếm thực tế của bạn)
    const jobExists = searchJobs(location, jobPosition);
  
    // Hiển thị hoặc ẩn nút Ứng Tuyển dựa trên kết quả
    if (jobExists) {
      applyBtn.style.display = 'block';
    } else {
      applyBtn.style.display = 'none';
    }
  });
  
  // Hàm giả lập tìm kiếm (thay bằng API hoặc truy vấn thực tế của bạn)
  function searchJobs(location, jobPosition) {
    const jobs = [
      { location: 'Đà Nẵng', position: 'Nhân viên tổ chức tour chuyển nghiệp' },
      // Thêm dữ liệu công việc khác
    ];
  
    return jobs.some(job => job.location === location && job.position === jobPosition);
  }
  
  // Tùy chọn: Thêm chức năng cho nút Ứng Tuyển
  document.getElementById('apply-btn').addEventListener('click', function () {
    alert('Bạn đã ứng tuyển công việc!');
    // Thêm logic ứng tuyển, ví dụ: chuyển hướng đến form ứng tuyển
  });