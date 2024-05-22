import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import $ from 'jquery';

const Main = () => {
  const videoSrc = useRef('');

  useEffect(() => {
    // Spinner
    const spinner = () => {
      setTimeout(() => {
        const spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
          spinnerElement.classList.remove('show');
        }
      }, 1);
    };
    spinner();

    // Fixed Navbar
    const handleScroll = () => {
      const fixedTop = document.querySelector('.fixed-top');
      if (window.innerWidth < 992) {
        if (window.scrollY > 55) {
          fixedTop.classList.add('shadow');
        } else {
          fixedTop.classList.remove('shadow');
        }
      } else {
        if (window.scrollY > 55) {
          fixedTop.classList.add('shadow');
          fixedTop.style.top = '-55px';
        } else {
          fixedTop.classList.remove('shadow');
          fixedTop.style.top = '0';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Back to top button
    const handleBackToTop = () => {
      const backToTop = document.querySelector('.back-to-top');
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    };
    window.addEventListener('scroll', handleBackToTop);

    document.querySelector('.back-to-top').addEventListener('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });

    // Testimonial carousel
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 2000,
      center: false,
      dots: true,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 1 },
        992: { items: 2 },
        1200: { items: 2 },
      },
    });

    // Vegetable carousel
    $('.vegetable-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      center: false,
      dots: true,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 },
      },
    });

    // Modal Video
    $('.btn-play').click(function () {
      videoSrc.current = $(this).data('src');
    });

    $('#videoModal').on('shown.bs.modal', () => {
      $('#video').attr('src', `${videoSrc.current}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`);
    });

    $('#videoModal').on('hide.bs.modal', () => {
      $('#video').attr('src', videoSrc.current);
    });

    // Product Quantity
    document.querySelectorAll('.quantity button').forEach((button) => {
      button.addEventListener('click', () => {
        const input = button.parentElement.parentElement.querySelector('input');
        const oldValue = parseFloat(input.value);
        let newVal;
        if (button.classList.contains('btn-plus')) {
          newVal = oldValue + 1;
        } else {
          newVal = oldValue > 0 ? oldValue - 1 : 0;
        }
        input.value = newVal;
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleBackToTop);
    };
  }, []);

  return null;
};

export default Main;
