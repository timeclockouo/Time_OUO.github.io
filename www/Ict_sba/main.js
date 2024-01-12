
$(document).ready(function () {
    // 捲軸偵測距離頂部超過 50 才顯示按鈕
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            if ($(".back-top").hasClass("hide")) {
                $(".back-top").toggleClass("hide");
            }
        } else {
            $(".back-top").addClass("hide");
        }
    });

    // 點擊按鈕回頂部
    $(".back-top").on("click", function (event) {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            500 // 回頂部時間為 500 毫秒
        );
    });
});

//UI-system
$(document).ready(function () {
    $('.dropdown-submenu a.dropdown-toggle').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});


function sen() {
    const targetElement = document.getElementById('sen');
    const windowHeight = window.innerHeight;
    const elementOffset = targetElement.offsetTop + 175;
    const targetPosition = elementOffset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}
function sh() {
    const targetElement = document.getElementById('sh');
    const windowHeight = window.innerHeight;
    const elementOffset = targetElement.offsetTop + 175;
    const targetPosition = elementOffset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}
function changeImage(input) {
    var selectedImage = input.value;
    document.getElementById("pic").src = selectedImage;

    // 更新圖片介紹
    var imageDescription = input.getAttribute("data-description");
    document.getElementById("imageDescription").textContent = imageDescription;

    // 移除之前選中的圖片邊框樣式
    var previousSelected = document.querySelector("#imageSelector .selected");
    if (previousSelected) {
        previousSelected.classList.remove("selected");
    }
    // 添加當前選中的圖片邊框樣式
    input.parentElement.classList.add("selected");
}
function pre() {
    var imageInputs = document.getElementsByName("image");
    var currentIndex = -1;
    for (var i = 0; i < imageInputs.length; i++) {
        if (imageInputs[i].checked) {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = imageInputs.length - 1;
    }
    var selectedImage = imageInputs[currentIndex].value;
    document.getElementById("pic").src = selectedImage;
    imageInputs[currentIndex].checked = true;

    updateImageDescription(imageInputs[currentIndex]);
}

function next() {
    var imageInputs = document.getElementsByName("image");
    var currentIndex = -1;
    for (var i = 0; i < imageInputs.length; i++) {
        if (imageInputs[i].checked) {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex < imageInputs.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var selectedImage = imageInputs[currentIndex].value;
    document.getElementById("pic").src = selectedImage;
    imageInputs[currentIndex].checked = true;

    updateImageDescription(imageInputs[currentIndex]);
}

function updateImageDescription(input) {
    var imageDescription = input.getAttribute("data-description");
    document.getElementById("imageDescription").textContent = imageDescription;
}

document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".slide");
    var captions = document.querySelectorAll(".slide .caption");
    var currentSlide = 0;
    var sliderInterval;

    function showSlide(index) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            captions[i].classList.remove("active");
        }
        slides[index].classList.add("active");
        captions[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // 初始顯示第一個輪播項目
    showSlide(currentSlide);

    // 設定輪播間隔時間（單位：毫秒）
    var interval = 5000;

    // 自動播放輪播器
    sliderInterval = setInterval(nextSlide, interval);

    var sliderContainer = document.querySelector(".slider-container");

    sliderContainer.addEventListener("mouseenter", function () {
        clearInterval(sliderInterval);
    });

    sliderContainer.addEventListener("mouseleave", function () {
        sliderInterval = setInterval(nextSlide, interval);
    });
});

var audio = new Audio('../music.mp3'); // 背景音樂檔的路徑

function music() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; // 將音樂播放進度重置為0
    }
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
$(document).ready(function () {
    

    $('.dropdown').on('mouseenter', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    }).on('mouseleave', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
});