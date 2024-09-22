//---------------------------------------------------RUN SLIDER-----------------------------------------------------------------------

let slideIndex = 0;
showSlides();
                            
function showSlides() {
    let i;
        let slides = document.getElementsByClassName("container__slider-mySlides");
        let dots = document.getElementsByClassName("container__slider-dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}



//------------------------------------------------------CountDown-------------------------------------------------------------------

// Đặt thời gian đếm nguọc
var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

// Cập nhật đồng hồ đếm ngược mỗi giây.
var x = setInterval(function() {

  // Lấy thời gian hiện tại.
  var now = new Date().getTime();
    
  // Tính khoảng cách giữa thời gian hiện tại và thời gian đếm ngược.
  var distance = countDownDate - now;
    
  // Tính toán số giờ, phút và giây còn lại cho đến thời điểm đếm ngược.
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Hiển thị kết quả trên trang web trong một phần tử có id là “flast-deal-time”.
  document.getElementById("flast-deal-time").innerHTML ="_" +  hours + " | "
  + minutes + " | " + seconds + "_";
    
  // Kết thúc đếm ngược hiện thông báo Hết giờ
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("flast-deal-time").innerHTML = "EXPIRED";
  }
}, 1000);


//---------------------------------------------------------Modal-----------------------------------------------------------------
$(document).ready(function() {
    initEvents();
});

function initEvents() {
    $('.app_container-content-information--content-total .app_container-content-information-btn').click(function() {
        $('.popup').show()
    });

    $('.popup__footer .popup__btn-close').click(closePopup)

}

function closePopup() {
    $(this).parents(".popup").hide()
}
//----------------------------------------------------------check sigh Up------------------------------------------------------------