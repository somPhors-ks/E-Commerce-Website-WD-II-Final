//
import {
  getProducts,
  pushProduct,
  pushUser,
  getUser,
  pushCartMessage,
  getCartMessage,
} from "../data.js";

const products = getProducts();
const user = getUser();
const messages = getCartMessage();

// Change Page
const btnChangePage = document.querySelectorAll("ul li button");

btnChangePage.forEach((btn) => {
  btn.addEventListener("click", function () {
    btnChangePage.forEach((b) => {
      b.style.backgroundColor = "#e7e7e750";
      b.style.color = "#000000";

      this.style.backgroundColor = "#000000cc";
      this.style.color = "#fefefe";
    });
  });
});

const productBtn = document.getElementById("productBtn");
const serviceBtn = document.getElementById("serviceBtn");
const aboutUsBtn = document.getElementById("aboutUsBtn");
const contactBtn = document.getElementById("contactBtn");

const productsPage = document.querySelector(".productsPage");
const servicesPage = document.querySelector(".servicesPage");
const aboutUsPage = document.querySelector(".aboutUsPage");
const contactUsPage = document.querySelector(".contactUsPage");

productBtn.onclick = () => {
  productsPage.style.display = "flex";
  servicesPage.style.display = "none";
  aboutUsPage.style.display = "none";
  contactUsPage.style.display = "none";
};
serviceBtn.onclick = () => {
  productsPage.style.display = "none";
  servicesPage.style.display = "flex";
  aboutUsPage.style.display = "none";
  contactUsPage.style.display = "none";
};
aboutUsBtn.onclick = () => {
  productsPage.style.display = "none";
  servicesPage.style.display = "none";
  aboutUsPage.style.display = "flex";
  contactUsPage.style.display = "none";
};
contactBtn.onclick = () => {
  productsPage.style.display = "none";
  servicesPage.style.display = "none";
  aboutUsPage.style.display = "none";
  contactUsPage.style.display = "flex";
};

//Team Member Pop Up
const teamMenberLink = document.getElementById("teamMenberLink");
const teamMemberPopup = document.getElementById("teamMemberPopup");
const teamCloseBtn = document.getElementById("teamCloseBtn");

teamMenberLink.onclick = () => {
  teamMemberPopup.style.transform = "scale(1)";
};
teamCloseBtn.onclick = () => {
  teamMemberPopup.style.transform = "scale(0)";
};

//Cart Pop Up
const getCartPopup = document.getElementById("getCartPopup");
const getCartBtn = document.getElementById("getCartBtn");
const cartPopupCloseBtn = document.getElementById("cartPopupCloseBtn");

getCartBtn.onclick = () => {
  getCartPopup.style.transform = "scale(1)";
};
cartPopupCloseBtn.onclick = () => {
  getCartPopup.style.transform = "scale(0)";
};

// Notification Pop Up
const notificationBtn = document.getElementById("notificationBtn");
const notificationTopup = document.getElementById("notificationTopup");
const notiCloseBtn = document.getElementById("notiCloseBtn");

notificationBtn.onclick = () => {
  notificationTopup.style.transform = "scale(1)";
};
notiCloseBtn.onclick = () => {
  notificationTopup.style.transform = "scale(0)";
};

// Sign Up Pop Up
const signInBtn = document.getElementById("signInBtn");
const signUpTopup = document.getElementById("signUpTopup");
const signUpCloseBtn = document.getElementById("signUpCloseBtn");

signInBtn.onclick = () => {
  signUpTopup.style.transform = "scale(1)";
};
signUpCloseBtn.onclick = () => {
  signUpTopup.style.transform = "scale(0)";
};

// Sign Up Value
const btnShowPass = document.getElementById("btnShowPass");
const btnhidePass = document.getElementById("btnhidePass");

const btnhideComPass = document.getElementById("btnhideComPass");
const btnShowComPass = document.getElementById("btnShowComPass");

const singInConfirm = document.getElementById("singInConfirm");

const emailInput = document.getElementById("emailInput");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPassInput = document.getElementById("confirmPassInput");

btnhidePass.style.display = "none";
btnhideComPass.style.display = "none";
// Password
btnShowPass.onclick = () => {
  btnhidePass.style.display = "inline";
  btnShowPass.style.display = "none";

  passwordInput.type = "text";
};
btnhidePass.onclick = () => {
  btnhidePass.style.display = "none";
  btnShowPass.style.display = "inline";

  passwordInput.type = "password";
};
// Confirm password
btnShowComPass.onclick = () => {
  btnhideComPass.style.display = "inline";
  btnShowComPass.style.display = "none";

  confirmPassInput.type = "text";
};
btnhideComPass.onclick = () => {
  btnhideComPass.style.display = "none";
  btnShowComPass.style.display = "inline";

  confirmPassInput.type = "password";
};

const regexName = /^[a-zA-Z ]{2,}$/;
const regexEmail = /^[\w\.-]+@([\w-]+\.)+[A-Za-z]{2,}$/;
const regexPass =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#^()_+\-\.]{8,}$/;

let name = false;
let email = false;
let pass = false;
let rePass = false;
let readySignUp = false;

singInConfirm.onclick = () => {
  if (regexEmail.test(emailInput.value)) {
    emailInput.style.border = "solid 2px #1fb14b4d";
    email = true;
  } else {
    emailInput.style.border = "solid 2px #bf2020cb";
    email = false;
  }

  if (regexName.test(usernameInput.value)) {
    usernameInput.style.border = "solid 2px #1fb14b4d";
    name = true;
  } else {
    usernameInput.style.border = "solid 2px #bf2020cb";
    name = false;
  }

  if (regexPass.test(passwordInput.value)) {
    passwordInput.style.border = "solid 2px #1fb14b4d";
    pass = true;
  } else {
    passwordInput.style.border = "solid 2px #bf2020cb";
    pass = false;
  }

  if (
    regexPass.test(confirmPassInput.value) &&
    confirmPassInput.value === passwordInput.value
  ) {
    confirmPassInput.style.border = "solid 2px #1fb14b4d";
    rePass = true;
  } else {
    confirmPassInput.style.border = "solid 2px #bf2020cb";
    rePass = false;
  }

  if (email && name && pass && rePass) {
    const refresPage = document.getElementById("refresPage");

    const newUser = {
      name: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      rePass: confirmPassInput.value,
    };
    pushUser(newUser);
    user.forEach((item) => {
      accountName.textContent = item.name;
      accountEmail.textContent = item.email;
    });
    readySignUp = true;
    refresPage.style.transform = "scale(1)";
    document.body.style.opacity = "0.3";
    setInterval(() => {
      refresPage.style.transform = "scale(0)";
      document.body.style.opacity = "1";

      signUpTopup.style.transform = "scale(0)";
      signInBtn.style.display = "none";
      accountBtn.style.display = "flex";
    }, 2000);
  }
};

// Account User
const accountBtn = document.getElementById("Account");
const accountTopup = document.getElementById("accountTopup");
const accountCloseBtn = document.getElementById("accountCloseBtn");

accountBtn.onclick = () => {
  accountTopup.style.transform = "translateX(0)";
};
accountCloseBtn.onclick = () => {
  accountTopup.style.transform = "translateX(100%)";
};

// Auto Slide
const image = document.querySelectorAll(".slides .imageSlide");
let imageIndex = 0;

setInterval(() => {
  imageIndex++;
  if (imageIndex >= image.length) {
    imageIndex = 0;
  }
  if (window.innerWidth <= 600) {
    for (let i = 0; i < image.length; i++) {
      if (imageIndex == i) {
        image[i].style.width = "75%";
      } else {
        image[i].style.width = "5%";
      }
    }
  } else {
    for (let i = 0; i < image.length; i++) {
      if (imageIndex == i) {
        image[i].style.width = "50%";
      } else {
        image[i].style.width = "10%";
      }
    }
  }
}, 8000);

// Card Generator
function CardGenerate(products) {
  return `
    <article class="reveal-up">
      <img src="${products.image}" alt="" />
      <div class="productsName">
        <p class="pName">${products.name}</p>
        <button id="btnAddtoCart">Add</button>
      </div>
      <p class="pNrand">${products.brandName}</p>
      <p class="pPrice">$${products.price}</p>
      <div class="colors">
        <div class="colorItem"></div>
        <div class="colorItem"></div>
        <div class="colorItem"></div>
        <div class="colorItem"></div>
      </div>
      <button id="btnLike">
      <span class="iconamoon--heart-fill"></span>
    </button>
    </article>
  `;
}

function CartMessageGenerate(messages) {
  const dateNow = new Date();
  return `
    <div class="messageCartItem">
      <img src="${messages.img}" alt="">
      <div class="cartDetial">
        <p id="ProductsName">Product: ${messages.pName}</p>
        <p id="customerName">Customer: ${messages.cusName}</p>
        <p id="customerEmail">Email: ${messages.cusEmail}</p>
        <p id="bookingDate">Date: ${dateNow.toLocaleDateString()}</p>
        <p id="qtyProducts">QTY: ${messages.qty}</p>
        <p id="totalPriceProducts">${messages.pPrice}</p>
      </div>
    </div>
  `;
}

// Filter collection
const collectionFiller = document.getElementById("collectionFiller");

// Latest Collection
const latestProduct = document.getElementById("latestProduct");

function productsRandom(p) {
  const arr = [...p];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

latestProduct.innerHTML = productsRandom(products)
  .slice(0, 8)
  .map((p) => CardGenerate(p))
  .join("");

// collection generate card
const collection = document.getElementById("collection");
collection.innerHTML = productsRandom(products)
  .map((p) => CardGenerate(p))
  .slice(0, 8)
  .join("");

const menShirs = products.filter((p) => {
  return p.type === "men" && p.category === "Shirt";
});
const womenShirt = products.filter((p) => {
  return p.type === "women" && p.category === "Shirt";
});
const menPants = products.filter((p) => {
  return p.type === "men" && p.category === "Pants";
});
const womenPants = products.filter((p) => {
  return p.type === "women" && p.category === "Pants";
});
const menShoes = products.filter((p) => {
  return p.type === "men" && p.category === "Shoe";
});
const womenShoe = products.filter((p) => {
  return p.type === "women" && p.category === "Shoe";
});

collectionFiller.addEventListener("change", () => {
  if (collectionFiller.value === "all") {
    collection.innerHTML = productsRandom(products)
      .map((p) => CardGenerate(p))
      .slice(0, 8)
      .join("");
    observeRevealElements();
  } else if (collectionFiller.value === "menShirs") {
    collection.innerHTML = menShirs
      .map((p) => CardGenerate(p))
      .slice(0, 8)
      .join("");
    observeRevealElements();
  } else if (collectionFiller.value === "womenShirt") {
    collection.innerHTML = womenShirt
      .map((p) => CardGenerate(p))
      .slice(0, 8)
      .join("");
    observeRevealElements();
  } else if (collectionFiller.value === "menPants") {
    collection.innerHTML = menPants
      .map((p) => CardGenerate(p))
      .slice(0, 8)
      .join("");
    observeRevealElements();
  } else if (collectionFiller.value === "womenPants") {
    collection.innerHTML = womenPants
      .map((p) => CardGenerate(p))
      .slice(0, 8)
      .join("");
    observeRevealElements();
  } else if (collectionFiller.value === "menShoes") {
    collection.innerHTML = menShoes
      .map((p) => CardGenerate(p))
      .slice(0, 8)
      .join("");
    observeRevealElements();
  } else if (collectionFiller.value === "womenShoe") {
    collection.innerHTML = womenShoe
      .map((p) => CardGenerate(p))
      .slice(0, 8)
      .join("");
    observeRevealElements();
  }
});

//  Add to Cart
const cartSlideIn = document.getElementById("cartSlideIn");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const btnAddtoCart = document.querySelectorAll("article #btnAddtoCart");

const pName = document.getElementById("pName");
const pBrand = document.getElementById("pBrand");
const pImage = document.getElementById("pImage");
const pPrice = document.getElementById("pPrice");

const nameSelected = document.getElementById("nameSelected");
const sizeSelected = document.getElementById("sizeSelected");
const qtySelected = document.getElementById("qtySelected");
const totalSelected = document.getElementById("totalSelected");

const alertConfirm = document.getElementById("alertConfirm");
const alertMessage = document.getElementById("alertMessage");

btnAddtoCart.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (readySignUp) {
      const card = e.target.closest("article");
      const cardName = card.querySelector(".pName");
      const cardBrand = card.querySelector(".pNrand");
      const cardPrice = card.querySelector(".pPrice");
      const cardimage = card.querySelector("img");

      pName.textContent = cardName.textContent;
      pBrand.textContent = cardBrand.textContent;
      pPrice.textContent = cardPrice.textContent;
      pImage.src = cardimage.src;
      nameSelected.textContent = "Product name: " + cardName.textContent;

      cartSlideIn.style.transform = "translateX(0)";
    } else {
      alertMessage.style.transform = "translate(-50%, 0%)";
    }
  });
});
alertConfirm.onclick = () => {
  alertMessage.style.transform = "translate(-50%, -100%)";
};
cartCloseBtn.onclick = () => {
  cartSlideIn.style.transform = "translateX(100%)";
};

// Booking
const cartConfirm = document.getElementById("cartConfirm");

cartConfirm.onclick = function (e) {
  e.preventDefault();
  const items = e.target.closest("#cartSlideIn");
  const image = items.querySelector("#pImage");
  const pName = items.querySelector("#pName");
  const qty = items.querySelector("#qtyValue");
  const pPrice = items.querySelector("#totalSelected");

  const cusName = document.getElementById("accountName");
  const cusEmail = document.getElementById("accountEmail");
  const cartMessages = document.getElementById("cartMessages");

  const customerDetail = {
    img: image.src,
    pName: pName.textContent,
    qty: qty.textContent,
    pPrice: pPrice.textContent,
    cusName: cusName.textContent,
    cusEmail: cusEmail.textContent,
  };
  pushCartMessage(customerDetail);
  refresPage.style.transform = "scale(1)";
  document.body.style.opacity = "0.3";
  items.style.transform = "translateX(100%)";
  cartMessages.innerHTML = messages.map((m) => CartMessageGenerate(m)).join("");

  setInterval(() => {
    refresPage.style.transform = "scale(0)";
    document.body.style.opacity = "1";
  }, 2000);
};

// Like Selected
const likeActive = document.querySelectorAll("article #btnLike");

likeActive.forEach((btn) => {
  btn.addEventListener("click", function () {
    const color = getComputedStyle(this).color;
    if (color === "rgb(255, 0, 0)") {
      this.style.color = "#949494";
    } else {
      this.style.color = "#ff0000";
    }
  });
});

//size Active
const size = document.querySelectorAll(".sizes #size");

size[0].style.backgroundColor = "#000000";
size[0].style.color = "#ffffff";
size.forEach((btn) => {
  btn.addEventListener("click", function () {
    size.forEach((s) => {
      s.style.backgroundColor = "#ffffff";
      s.style.color = "#000000";

      this.style.backgroundColor = "#000000";
      this.style.color = "#ffffff";
      sizeSelected.textContent = "Size: " + this.textContent;
    });
  });
});

const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const qtyValue = document.getElementById("qtyValue");
let qtyProduct = 1;

decrease.onclick = () => {
  qtyProduct--;
  if (qtyProduct < 1) {
    qtyProduct = 1;
  }
  qtyValue.textContent = qtyProduct;
  qtySelected.textContent = "Quantity: " + qtyValue.textContent;
  let totalPrice = Number(pPrice.textContent.slice(1)) * qtyProduct;
  totalSelected.textContent = "Total: $" + totalPrice.toFixed(2);
};
increase.onclick = () => {
  qtyProduct++;
  qtyValue.textContent = qtyProduct;
  qtySelected.textContent = "Quantity: " + qtyValue.textContent;
  let totalPrice = Number(pPrice.textContent.slice(1)) * qtyProduct;
  totalSelected.textContent = "Total: $" + totalPrice.toFixed(2);
};

// Readd to Cart
collection.addEventListener("click", function (e) {
  if (!e.target.matches("#btnAddtoCart")) return;

  if (!readySignUp) {
    alertMessage.style.transform = "translate(-50%, 0%)";
    return;
  }
  const card = e.target.closest("article");

  const cardName = card.querySelector(".pName");
  const cardBrand = card.querySelector(".pNrand");
  const cardPrice = card.querySelector(".pPrice");
  const cardImage = card.querySelector("img");

  pName.textContent = cardName.textContent;
  pBrand.textContent = cardBrand.textContent;
  pPrice.textContent = cardPrice.textContent;
  pImage.src = cardImage.src;
  nameSelected.textContent = "Product name: " + cardName.textContent;

  cartSlideIn.style.transform = "translateX(0)";
});

collection.addEventListener("click", function (e) {
  const btn = e.target.closest("#btnLike");

  if (!btn) return;

  const color = getComputedStyle(btn).color;

  if (color === "rgb(255, 0, 0)") {
    btn.style.color = "#949494";
  } else {
    btn.style.color = "#ff0000";
  }
});

const iconLink = document.getElementById("iconLink");
const btnMenu = document.getElementById("btnMenu");
let linkCollapsed = true;
btnMenu.onclick = () => {
  if (linkCollapsed) {
    iconLink.style.padding = "12px";
    iconLink.style.height = "290px";
    linkCollapsed = false;
  } else {
    iconLink.style.padding = "0";
    iconLink.style.height = "0";
    linkCollapsed = true;
  }
};

//Auto Slide About US
const aboutSlides = document.querySelector(".aboutSlides");
const itemSlideImage = document.querySelectorAll(
  ".aboutSlides .itemSlideImage",
);
let itemImageIndex = 0;

setInterval(() => {
  itemImageIndex++;
  if (itemImageIndex >= itemSlideImage.length) {
    itemImageIndex = 0;
  }
  if (window.innerWidth <= 600) {
    aboutSlides.style.transform = `translateX(-${itemImageIndex * 320}px)`;
  } else {
    aboutSlides.style.transform = `translateX(-${itemImageIndex * 900}px)`;
  }
}, 6000);

// Animation Scroll
const observer = new IntersectionObserver(
  (relay) => {
    relay.forEach((relay) => {
      if (relay.isIntersecting) {
        relay.target.classList.add("show");
      } else {
        relay.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.1 },
);

function observeRevealElements() {
  document
    .querySelectorAll(".reveal-up, .reveal-left, .reveal-right")
    .forEach((el) => {
      observer.observe(el);
    });
}
observeRevealElements();
