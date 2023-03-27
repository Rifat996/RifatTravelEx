$(document).ready(function(){
    // Adding smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      
      if (this.hash !== "") {
        // Preventing default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Adding hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } 
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })
  
let images = ["imgs/kjbkmed.jpg", "imgs/cable-carmed.jpg", "imgs/strbacki1.jpg"];
let currentIndex = 0;
const jumbotron = document.querySelector(".jumbotron");


function changeBackgroundImage() {
  
    jumbotron.style.opacity = 0;
    setTimeout(() => {
      jumbotron.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
      jumbotron.style.opacity = 1;
    }, 1000);
  
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 5000);



/***************************************/
const buttons = document.querySelectorAll("[id^='btn']");
const pricingList = document.getElementById("pricing");

buttons.forEach((button, index) => {
  const offerDetails = document.getElementById(`offer-details${index + 1}`);
  const closeBtn = document.getElementById(`closebtn${index + 1}`);
  const nextBtn = document.getElementById(`nextbtn${index + 1}`);

  offerDetails.style.display = "none";

  button.addEventListener("click", () => {
    if (offerDetails.style.display === "none") {
      offerDetails.style.display = "block";
      offerDetails.scrollIntoView({ behavior: "smooth" });
    } else {
      offerDetails.style.display = "none";
    }
  });

  closeBtn.addEventListener("click", () => {
    offerDetails.style.display = "none";
    pricingList.scrollIntoView({ behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    offerDetails.style.display = "none";
    pricingList.scrollIntoView({ behavior: "smooth" });
    const nextOfferDetails = document.getElementById(`offer-details${index + 2}`);
    if (nextOfferDetails) {
      nextOfferDetails.style.display = "block";
      nextOfferDetails.scrollIntoView({ behavior: "smooth" });
    }
  });
});



//-------------Card Functionality----------//
const cardData = [
  {
    title: "Cable-car ride above Sarajevo",
    imageSrc: "imgs/cable-carmed1.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Amazing Lukomir village hike",
    imageSrc: "imgs/lukomir-hike.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Una river rafting",
    imageSrc: "imgs/una-rafting.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Mostar Cliff Diving",
    imageSrc: "imgs/cliff-diving.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Sarajevo daily bike ride",
    imageSrc: "imgs/bike-sarajevo.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Olympic bobsleigh and luge hike",
    imageSrc: "imgs/olympic-bobsleigh.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "War Childhood Museum",
    imageSrc: "imgs/war-childhood.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Yellow Fortress",
    imageSrc: "imgs/yellow-fortress.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Vjetrenica Cave",
    imageSrc: "imgs/vjetrenica-cave.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Srebrenik Fortress",
    imageSrc: "imgs/srebrenik-fortress.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Bosnian Kingdom Tour",
    imageSrc: "imgs/ostrozac.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Mosque Tours",
    imageSrc: "imgs/sarena-dzamija.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Radimlja Necropolis",
    imageSrc: "imgs/radimlja-necropolis.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Gazi Husrev Bey School",
    imageSrc: "imgs/gazi-husrev.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Skakavac Waterfall hike",
    imageSrc: "imgs/skakavac.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Lunch with our local friends",
    imageSrc: "imgs/mokica1.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Prokosko lake tour",
    imageSrc: "imgs/prokosko-lake.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Bijambare Cave",
    imageSrc: "imgs/middle-cave.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Visit Lamb restaurants",
    imageSrc: "imgs/bosnian-lamb.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Coffee in Morica Han",
    imageSrc: "imgs/morica-han.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Tito's bunker visit",
    imageSrc: "imgs/tito-bunker.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Pocitelj town walk",
    imageSrc: "imgs/pocitelj.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    title: "Neretva Rafting",
    imageSrc: "imgs/neretva-rafting.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
]
const cardContainer = document.getElementById("cards-row");

const prevButton = document.querySelector('.prevbtn');
const nextButton = document.querySelector('.nextbtn');
let cardStartIndex = 0;

function updateCardDisplay() {
  // clearing existing cards
  cardContainer.innerHTML = '';
  // looping through the cardData array starting from the cardStartIndex
  for (let i = cardStartIndex; i < cardStartIndex + 5 && i < cardData.length; i++) {
    // creating a new card element
    const card = document.createElement("div");
    card.classList.add("card", "col-xs-12", "col-sm-3", "col-md-2");
    card.classList.add("fade-in");
    // creating the card image element
    const cardImg = document.createElement("img");
    cardImg.src = cardData[i].imageSrc;
    cardImg.classList.add("card-img-top", "img-responsive");
    // creating the card body element
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    // creating the card title element
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = cardData[i].title;
    // creating the card text element
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = cardData[i].text;
    // appending the elements to the card element
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    // appending the card element to the container
    cardContainer.appendChild(card);
  }

  // disabling the "Prev" button if we are on the first page of cards
  if (cardStartIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  // disabling the "Next" button if we are on the last page of cards
  if (cardStartIndex + 5 >= cardData.length) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function showNextCards() {
  cardStartIndex += 5;
  updateCardDisplay();
}

function showPrevCards() {
  cardStartIndex -= 5;
  if (cardStartIndex < 0) {
    cardStartIndex = 0;
  }
  updateCardDisplay();
}

prevButton.addEventListener('click', showPrevCards);
nextButton.addEventListener('click', showNextCards);

// initially displaying the first 5 cards
updateCardDisplay();






//WhatsApp Click to Chat option

const bookNowButtons = document.querySelectorAll("[id^='booking']");

// Defining the message that will be sent to WhatsApp
const message = "Hello, I'm interested in booking your tour.";

// Defining the phone number that will receive the message (including the country code)
const phoneNumber = "+38762069303";

// Iterating over all the book now buttons and attaching a click event listener to each one
bookNowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Constructing the WhatsApp URL with the predefined message and phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Opening the WhatsApp chat window in a new tab
    window.open(whatsappUrl, "_blank");
  });
});


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}