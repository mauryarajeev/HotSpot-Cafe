// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var persons = document.getElementById('persons').value;
    var date = document.getElementById('date').value;

    // Format message for WhatsApp
    var message = `Hello, I would like to book a table.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nPersons: ${persons}\nDate: ${date}`;

    // Open WhatsApp with pre-filled message
    var whatsappURL = `https://api.whatsapp.com/send?phone=919554480869&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  });


  // Define the menu items
  const menuItems = [
    {
      category: 'pizza',
      name: 'Delicious Pizza',
      description: 'A tasty pizza with fresh ingredients.',
      price: '$20',
      image: 'images/f1.png'
    },
    {
      category: 'burger',
      name: 'Tasty Burger',
      description: 'A juicy burger with all the toppings.',
      price: '$15',
      image: 'images/f2.png'
    },
    {
      category: 'pasta',
      name: 'Delicious Pasta',
      description: 'Creamy pasta with a mix of fresh herbs.',
      price: '$18',
      image: 'images/f4.png'
    },
    {
      category: 'fries',
      name: 'French Fries',
      description: 'Crispy golden fries.',
      price: '$10',
      image: 'images/f5.png'
    },
    {
      category: 'pizza',
      name: 'Cheesy Pizza',
      description: 'A pizza loaded with cheese and flavor.',
      price: '$17',
      image: 'images/f3.png'
    }
  ];

  // Function to render menu items dynamically
  function renderMenuItems() {
    const menuContainer = document.getElementById('menuContainer');
    let menuHTML = '';

    menuItems.forEach(item => {
      menuHTML += `
        <div class="col-sm-6 col-lg-4 all ${item.category}">
          <div class="box">
            <div>
              <div class="img-box">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="detail-box">
                <h5>${item.name}</h5>
                <p>${item.description}</p>
                <div class="options">
                  <h6>${item.price}</h6>
                  <a href="">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
                      <g>
                        <g>
                          <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248s23.552,53.248,53.248,53.248s53.248-23.552,53.248-53.248
                          S374.784,338.862,345.6,338.862z"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                          C9.216,10.67,0,19.886,0,31.15s9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                          C457.728,97.71,450.56,86.958,439.296,84.91z"/>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    menuContainer.innerHTML = menuHTML;
  }

  // Render the menu items on page load
  document.addEventListener('DOMContentLoaded', renderMenuItems);