// ! Active Nav Links
const activeNavLinks = {
  activeNow: "Home",
  lastActive: null,
};

const inputLink = function (text) {
  if (activeNavLinks.activeNow == text) {
    return;
  } else if (activeNavLinks.activeNow != text) {
    activeNavLinks.lastActive = activeNavLinks.activeNow;
    activeNavLinks.activeNow = text;
  }
};

const addClassLink = function () {
  for (navLink of navLinks) {
    if (navLink.innerText == activeNavLinks.activeNow) {
      navLink.classList.add("active");
    }
  }
};

const removeClassLink = function () {
  for (navLink of navLinks) {
    if (navLink.innerText == activeNavLinks.lastActive) {
      navLink.classList.remove("active");
    }
  }
};

let navLinks = document.querySelectorAll(".nav-links li a");
console.log(navLinks);

for (navLink of navLinks) {
  navLink.addEventListener("click", function (event) {
    const target = event.target;
    console.log(target.innerText);

    inputLink(target.innerText);
    addClassLink();
    removeClassLink();
  });
}

// ! Nav slide with burger icon
const navSlide = function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const jumbotron = document.querySelector(".jumbotron");
  console.log(burger);
  console.log(nav);

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");

    //* if the window size is resized bigger than 768px and the absolute navbar still there, remove them
    window.addEventListener("resize", function (event) {
      let newWidth = window.innerWidth;

      if (newWidth > 768) {
        nav.classList.remove("nav-active");
      }
    });
  });
};

navSlide();

// ! Button Read More for About us

const aboutUsReadMore = function () {
  const readMoreCond = {
    isActive: false,
  };

  const btnReadMore = document.querySelector(".btn-read-more");
  const pAboutUs = document.querySelectorAll("#about-us .text p")[2];
  console.log(btnReadMore);

  const changeState = function () {
    if (readMoreCond.isActive == false) {
      readMoreCond.isActive = true;
    } else if (readMoreCond.isActive == true) {
      readMoreCond.isActive = false;
    }
  };

  const displayText = function () {
    if (readMoreCond.isActive == true) {
      let newP = document.createElement("p");
      newP.classList.add("new-p");
      newP.innerText =
        "Our goal is to introduce the best tourism destinations in Indonesia to all of the traveller over the world. So that they will be interested to have a tour in Indonesia with their friends or family. So what are you guys waiting for? come and join us!";
      newP.style.transition = "all 0.5s ease-in-out";
      pAboutUs.appendChild(newP);
      return;
    } else {
      return;
    }
  };

  const removeText = function () {
    if (readMoreCond.isActive == false) {
      const newP = document.querySelector(".new-p");
      newP.remove();
    } else {
      return;
    }
  };

  btnReadMore.addEventListener("click", function (event) {
    changeState();
    displayText();
    removeText();
  });
};

aboutUsReadMore();

// !  Button Read More for Tour 1
const toursReadMore1 = function () {
  const readMoreCondTour1 = {
    isActive: false,
  };

  const btnsReadMore = document.querySelectorAll("#tours .btn-read-more a")[0];
  const ul = document.querySelectorAll("#tours ul")[0];
  const programList = document.querySelectorAll(".program-list")[0];
  console.log(btnsReadMore);
  console.log(ul);
  console.log(programList);

  const changeState = function () {
    if (readMoreCondTour1.isActive == false) {
      readMoreCondTour1.isActive = true;
    } else if (readMoreCondTour1.isActive == true) {
      readMoreCondTour1.isActive = false;
    }
  };

  const displayText = function () {
    if (readMoreCondTour1.isActive == true) {
      let newPTour1 = document.createElement("p");
      newPTour1.classList.add("new-p-tour1");
      newPTour1.innerHTML =
        "The price : <span style='color:red;'><strong>Rp. 1.500.000,00</strong></span>";
      newPTour1.style = "font-size:20px;";
      programList.appendChild(newPTour1);
      return;
    } else {
      return;
    }
  };

  const removeText = function () {
    if (readMoreCondTour1.isActive == false) {
      const newPTour1 = document.querySelector(".new-p-tour1");
      newPTour1.remove();
    } else {
      return;
    }
  };

  btnsReadMore.addEventListener("click", function (event) {
    changeState();
    displayText();
    removeText();
  });
};

toursReadMore1();

// ! Button Read More for Tour 2

const toursReadMore2 = function () {
  const readMoreCondTour2 = {
    isActive: false,
  };

  const btnsReadMore = document.querySelectorAll("#tours .btn-read-more a")[1];
  const ul = document.querySelectorAll("#tours ul")[1];
  const programList = document.querySelectorAll(".program-list")[1];
  console.log(btnsReadMore);
  console.log(ul);
  console.log(programList);

  const changeState = function () {
    if (readMoreCondTour2.isActive == false) {
      readMoreCondTour2.isActive = true;
    } else if (readMoreCondTour2.isActive == true) {
      readMoreCondTour2.isActive = false;
    }
  };

  const displayText = function () {
    if (readMoreCondTour2.isActive == true) {
      let newPTour2 = document.createElement("p");
      newPTour2.classList.add("new-p-tour2");
      newPTour2.innerHTML =
        "The price : <span style='color:red;'><strong>Rp. 4.500.000,00</strong></span>";
      newPTour2.style = "font-size:20px;";
      programList.appendChild(newPTour2);
      return;
    } else {
      return;
    }
  };

  const removeText = function () {
    if (readMoreCondTour2.isActive == false) {
      const newPTour2 = document.querySelector(".new-p-tour2");
      newPTour2.remove();
    } else {
      return;
    }
  };

  btnsReadMore.addEventListener("click", function (event) {
    changeState();
    displayText();
    removeText();
  });
};

toursReadMore2();

// ! Button Read More for Tour 3
const toursReadMore3 = function () {
  const readMoreCondTour3 = {
    isActive: false,
  };

  const btnsReadMore = document.querySelectorAll("#tours .btn-read-more a")[2];
  const ul = document.querySelectorAll("#tours ul")[2];
  const programList = document.querySelectorAll(".program-list")[2];
  console.log(btnsReadMore);
  console.log(ul);
  console.log(programList);

  const changeState = function () {
    if (readMoreCondTour3.isActive == false) {
      readMoreCondTour3.isActive = true;
    } else if (readMoreCondTour3.isActive == true) {
      readMoreCondTour3.isActive = false;
    }
  };

  const displayText = function () {
    if (readMoreCondTour3.isActive == true) {
      let newPTour3 = document.createElement("p");
      newPTour3.classList.add("new-p-tour3");
      newPTour3.innerHTML =
        "The price : <span style='text-decoration: line-through;'>Rp. 5.000.000,00 </span> <br> <span style='color:red; font-size:24px'><strong> Rp. 2.500.000,00</strong></span>";
      newPTour3.style = "font-size:20px;";
      programList.appendChild(newPTour3);
      return;
    } else {
      return;
    }
  };

  const removeText = function () {
    if (readMoreCondTour3.isActive == false) {
      const newPTour3 = document.querySelector(".new-p-tour3");
      newPTour3.remove();
    } else {
      return;
    }
  };

  btnsReadMore.addEventListener("click", function (event) {
    changeState();
    displayText();
    removeText();
  });
};

toursReadMore3();
