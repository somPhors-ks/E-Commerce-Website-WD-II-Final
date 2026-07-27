//
import { getProducts, pushProduct } from "../data.js";
const products = getProducts();

// Get Item From Sign In Page
const getUsername = localStorage.getItem("usernameInput");
const getEmail = localStorage.getItem("emailInput");
const getPassword = localStorage.getItem("passwordInput");

const accountNameShow = document.getElementById("accountNameShow");
const acoountEmailShow = document.getElementById("acoountEmailShow");
const accountName = document.getElementById("accountName");

accountName.textContent = getUsername;
accountNameShow.textContent = getUsername;
acoountEmailShow.textContent = getEmail;

// Chang Page
const onExploreNew = document.getElementById("onExploreNew");
const onInventory = document.getElementById("onInventory");
const section = document.getElementById("section");
const sectionInvetory = document.getElementById("sectionInvetory");

onExploreNew.onclick = () => {
  onExploreNew.classList.add("active");
  onInventory.classList.remove("active");
  section.style.display = "flex";
  sectionInvetory.style.display = "none";

  if (window.innerWidth <= 600) {
    if (collapsed) {
      leftSideBar.style.height = "500px";
      leftSideBar.style.padding = "20px";
      collapsed = false;
    } else {
      leftSideBar.style.height = "0";
      leftSideBar.style.padding = "0";
      collapsed = true;
    }
  }
};
onInventory.onclick = () => {
  onExploreNew.classList.remove("active");
  onInventory.classList.add("active");
  section.style.display = "none";
  sectionInvetory.style.display = "flex";

  if (window.innerWidth <= 600) {
    if (collapsed) {
      leftSideBar.style.height = "500px";
      leftSideBar.style.padding = "20px";
      collapsed = false;
    } else {
      leftSideBar.style.height = "0";
      leftSideBar.style.padding = "0";
      collapsed = true;
    }
  }
};

// Cart Top Up
const cartTopUp = document.getElementById("cartTopUp");
const onBtnCart = document.getElementById("onBtnCart");
const cartClose = document.getElementById("cartClose");

onBtnCart.onclick = () => {
  cartTopUp.style.transform = "scale(1)";
};
cartClose.onclick = () => {
  cartTopUp.style.transform = "scale(0)";
};

const cartItem = document.querySelectorAll(".itemCart .cardItem");
const discartBtn = document.querySelectorAll("#Comfirm");

discartBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".cardItem");
    const shippign = card.querySelector("#shipping");
    shippign.style.transform = "scale(1)";
    btn.style.transform = "scale(0)";
  });
});

// Notification Top Up
const notificationTopup = document.getElementById("notificationTopup");
const onBtnNotification = document.getElementById("onBtnNotification");
const onNotificationClose = document.getElementById("onNotificationClose");

onBtnNotification.onclick = () => {
  notificationTopup.style.transform = "scale(1)";
};
onNotificationClose.onclick = () => {
  notificationTopup.style.transform = "scale(0)";
};

const account = document.getElementById("account");
const onBtnAccount = document.getElementById("onBtnAccount");
const onAccountClose = document.getElementById("onAccountClose");

onBtnAccount.onclick = () => {
  account.style.transform = "translateX(0)";
};
onAccountClose.onclick = () => {
  account.style.transform = "translateX(100%)";
};

// Discount Top up
const discountTopup = document.getElementById("discountTopup");
const onDiscountSet = document.getElementById("onDiscountSet");
const onDiscountClose = document.getElementById("onDiscountClose");

onDiscountSet.onclick = () => {
  discountTopup.style.transform = "scale(1)";
};
onDiscountClose.onclick = () => {
  discountTopup.style.transform = "scale(0)";
};

const imgdiscount50 = document.getElementById("imgdiscount50");
const imgdiscount40 = document.getElementById("imgdiscount40");
const imgdiscount30 = document.getElementById("imgdiscount30");
const discountCaption = document.getElementById("discountCaption");
discountCaption.textContent = "";
const messageBox = document.getElementById("messageBox");

const set50Discount = document.getElementById("set50Discount");
const set40Discount = document.getElementById("set40Discount");
const set30Discount = document.getElementById("set30Discount");
const onConfirmDiscount = document.getElementById("onConfirmDiscount");
const onConfirmCancel = document.getElementById("onConfirmCancel");
const onConfirmOK = document.getElementById("onConfirmOK");

const imgPosterDiscount50 = document.getElementById("imgPosterDiscount50");
const imgPosterDiscount40 = document.getElementById("imgPosterDiscount40");
const imgPosterDiscount30 = document.getElementById("imgPosterDiscount30");
let discountValue = 1;

set50Discount.onclick = () => {
  imgdiscount50.classList.remove("hide");
  imgdiscount40.classList.add("hide");
  imgdiscount30.classList.add("hide");
  discountValue = 1;
};
set40Discount.onclick = () => {
  imgdiscount50.classList.add("hide");
  imgdiscount40.classList.remove("hide");
  imgdiscount30.classList.add("hide");
  discountValue = 2;
};
set30Discount.onclick = () => {
  imgdiscount50.classList.add("hide");
  imgdiscount40.classList.add("hide");
  imgdiscount30.classList.remove("hide");
  discountValue = 3;
};
onConfirmDiscount.onclick = () => {
  messageBox.style.transform = "scale(1)";
};
onConfirmCancel.onclick = () => {
  messageBox.style.transform = "scale(0)";
};
onConfirmOK.onclick = () => {
  discountTopup.style.transform = "scale(0)";
  messageBox.style.transform = "scale(0)";
  if (discountValue === 1) {
    imgPosterDiscount50.classList.remove("hide");
    imgPosterDiscount40.classList.add("hide");
    imgPosterDiscount30.classList.add("hide");
    discountCaption.textContent = "";
  } else if (discountValue === 2) {
    imgPosterDiscount50.classList.add("hide");
    imgPosterDiscount40.classList.remove("hide");
    imgPosterDiscount30.classList.add("hide");
    discountCaption.textContent = "";
    discountCaption.style.color = "#000000";
  } else {
    imgPosterDiscount50.classList.add("hide");
    imgPosterDiscount40.classList.add("hide");
    imgPosterDiscount30.classList.remove("hide");
    discountCaption.textContent = "";
    discountCaption.style.color = "#ffffff";
  }
};

// Products Slide In
const showProducts = document.getElementById("showProducts");
const onOpenProducts = document.getElementById("onOpenProducts");
const onCloseProducts = document.getElementById("onCloseProducts");

onOpenProducts.onclick = () => {
  showProducts.style.transform = "translateX(0)";
};
onCloseProducts.onclick = () => {
  showProducts.style.transform = "translateX(100%)";
};

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides .imgSlideItem");
let indexSlide = 0;

setInterval(() => {
  indexSlide++;
  if (indexSlide >= images.length) {
    indexSlide = 0;
  }
  if (window.innerWidth <= 600) {
    slides.style.transform = `translateX(-${indexSlide * 260}px)`;
  } else {
    slides.style.transform = `translateX(-${indexSlide * 660}px)`;
  }
}, 4000);

// Fashion Slide in
const fashionTopup = document.getElementById("fashionTopup");
const onOpenFashion = document.getElementById("onOpenFashion");
const onfashionClose = document.getElementById("onfashionClose");

onOpenFashion.onclick = () => {
  fashionTopup.style.transform = "translateX(0)";
};
onfashionClose.onclick = () => {
  fashionTopup.style.transform = "translateX(100%)";
};

const fashionSlides = document.querySelector(".fashionSlides");
const imgSlidFashion = document.querySelector(".fashionSlides .imgSlidFashion");
let fashionIndex = 0;

setInterval(() => {
  fashionIndex++;
  if (fashionIndex >= imgSlidFashion.length) {
    fashionIndex = 0;
  }

  if (window.innerWidth <= 600) {
    fashionSlides.style.transform = `translateX(-${indexSlide * 260}px)`;
  } else {
    fashionSlides.style.transform = `translateX(-${indexSlide * 660}px)`;
  }
}, 4000);

function fashionCartGenerate(products) {
  return `
    <article>
      <img src="${products.image}" />
      <p class="name">${products.name}</p>
      <span class="brand">${products.brandName}</span>
      <p class="price">$${products.price}</p>
      <div class="colors">
        <div class="colorItem">
          <div class="item blue"></div>
          <div class="item green"></div>
          <div class="item blueligth"></div>
          <div class="item pink"></div>
        </div>
        <button id="stock">${products.status}</button>
      </div>
    </article>
  `;
}

const fashionContainer = document.querySelector(".fashionContainer");
fashionContainer.innerHTML = products
  .slice(0, 20)
  .map((p) => fashionCartGenerate(p))
  .join("");

// Inventory
const totalProduct = document.getElementById("totalProduct");
const inStockProducts = document.getElementById("inStockProducts");
const outOfStockProducts = document.getElementById("outOfStockProducts");
const totalPrice = document.getElementById("totalPrice");
const stockItems = document.getElementById("stockItems");

let inStock = 0;
let OutStock = 0;
let price = 0;

products.forEach((item) => {
  if (item.status === "In Stock") {
    inStock++;
  }
  if (item.status === "Out Stock") {
    OutStock++;
  }
  price += item.price;
});

totalProduct.innerHTML = `${products.length} Items`;
inStockProducts.innerHTML = `${inStock} Items`;
outOfStockProducts.innerHTML = `${OutStock} Items`;
totalPrice.innerHTML = `$${price.toFixed(2)}`;

function createCardStockItems(products) {
  return `
    <div class="itemCard">
      <div class="product_name">
        <span class="numberId">${products.id}</span>
        <img src="${products.image}" alt="" />
        <span class="stockName">${products.name}</span>
      </div>
      <div class="product_category">${products.category}</div>
      <div class="product_stock">${products.stock}</div>
      <div class="product_cost">$${products.cost}</div>
      <div class="product_price">$${products.price}</div>
      <div class="product_status"><span>${products.status}</span></div>
    </div>
  `;
}

stockItems.innerHTML = products
  .map((product) => createCardStockItems(product))
  .join("");

// Filter
const filterProduct = document.getElementById("filterProduct");
const filterOption = document.getElementById("filterOption");

const filterAll = document.getElementById("filterAll");
const filterShirts = document.getElementById("filterShirts");
const filterPants = document.getElementById("filterPants");
const filterShoes = document.getElementById("filterShoes");

filterProduct.onclick = () => {
  if (window.innerWidth <= 600) {
    filterOption.style.height = "160px";
  } else {
    filterOption.style.height = "240px";
  }
  filterOption.style.padding = "12px";
};

filterAll.onclick = () => {
  let inStock = 0;
  let OutStock = 0;
  let price = 0;

  filterAll.classList.add("selected");
  filterShirts.classList.remove("selected");
  filterPants.classList.remove("selected");
  filterShoes.classList.remove("selected");
  filterOption.style.height = "0px";
  filterOption.style.padding = "0px";
  stockItems.innerHTML = products
    .map((product) => createCardStockItems(product))
    .join("");

  products.forEach((item) => {
    if (item.status === "In Stock") {
      inStock++;
    }
    if (item.status === "Out Stock") {
      OutStock++;
    }
    price += item.price;
  });

  totalProduct.innerHTML = `${products.length} Items`;
  inStockProducts.innerHTML = `${inStock} Items`;
  outOfStockProducts.innerHTML = `${OutStock} Items`;
  totalPrice.innerHTML = `$${price.toFixed(2)}`;
};

filterShirts.onclick = () => {
  let inStock = 0;
  let OutStock = 0;
  let price = 0;

  filterAll.classList.remove("selected");
  filterShirts.classList.add("selected");
  filterPants.classList.remove("selected");
  filterShoes.classList.remove("selected");
  filterOption.style.height = "0px";
  filterOption.style.padding = "0px";

  const shirtType = products.filter((p) => {
    return p.category === "Shirt";
  });
  stockItems.innerHTML = shirtType.map((p) => createCardStockItems(p)).join("");

  shirtType.forEach((item) => {
    if (item.status === "In Stock") {
      inStock++;
    }
    if (item.status === "Out Stock") {
      OutStock++;
    }
    price += item.price;
  });

  totalProduct.innerHTML = `${shirtType.length} Items`;
  inStockProducts.innerHTML = `${inStock} Items`;
  outOfStockProducts.innerHTML = `${OutStock} Items`;
  totalPrice.innerHTML = `$${price.toFixed(2)}`;
};
filterPants.onclick = () => {
  let inStock = 0;
  let OutStock = 0;
  let price = 0;

  filterAll.classList.remove("selected");
  filterShirts.classList.remove("selected");
  filterPants.classList.add("selected");
  filterShoes.classList.remove("selected");
  filterOption.style.height = "0px";
  filterOption.style.padding = "0px";

  const pantType = products.filter((p) => {
    return p.category === "Pants";
  });
  stockItems.innerHTML = pantType.map((p) => createCardStockItems(p)).join("");

  pantType.forEach((item) => {
    if (item.status === "In Stock") {
      inStock++;
    }
    if (item.status === "Out Stock") {
      OutStock++;
    }
    price += item.price;
  });

  totalProduct.innerHTML = `${pantType.length} Items`;
  inStockProducts.innerHTML = `${inStock} Items`;
  outOfStockProducts.innerHTML = `${OutStock} Items`;
  totalPrice.innerHTML = `$${price.toFixed(2)}`;
};
filterShoes.onclick = () => {
  let inStock = 0;
  let OutStock = 0;
  let price = 0;

  filterAll.classList.remove("selected");
  filterShirts.classList.remove("selected");
  filterPants.classList.remove("selected");
  filterShoes.classList.add("selected");
  filterOption.style.height = "0px";
  filterOption.style.padding = "0px";

  const shoeType = products.filter((p) => {
    return p.category === "Shoe";
  });
  stockItems.innerHTML = shoeType.map((p) => createCardStockItems(p)).join("");

  shoeType.forEach((item) => {
    if (item.status === "In Stock") {
      inStock++;
    }
    if (item.status === "Out Stock") {
      OutStock++;
    }
    price += item.price;
  });

  totalProduct.innerHTML = `${shoeType.length} Items`;
  inStockProducts.innerHTML = `${inStock} Items`;
  outOfStockProducts.innerHTML = `${OutStock} Items`;
  totalPrice.innerHTML = `$${price.toFixed(2)}`;
};

// Add Product
const addProduct = document.getElementById("addProduct");
const addProductClose = document.getElementById("addProductClose");
const addProductTopup = document.getElementById("addProductTopup");

addProduct.onclick = () => {
  addProductTopup.style.transform = "scale(1)";
};
addProductClose.onclick = () => {
  addProductTopup.style.transform = "scale(0)";
};

const imageUploadShow = document.getElementById("imageUploadShow");
const imageInput = document.getElementById("imageInput");
let file = "";

imageInput.addEventListener("change", function () {
  const fileName = this.files[0];
  if (fileName) {
    imageUploadShow.src = URL.createObjectURL(fileName);
    imageUploadShow.style.display = "block";
    file = URL.createObjectURL(fileName);
  }
});

const name = document.getElementById("name");
const category = document.getElementById("category");
const brandName = document.getElementById("brandName");
const stocknumber = document.getElementById("stocknumber");
const cost = document.getElementById("cost");
const sell = document.getElementById("sell");

const addCancel = document.getElementById("addCancel");
const addConfirm = document.getElementById("addConfirm");
let idStock = products.length;

const addRequier = document.getElementById("addRequier");
const requierOk = document.getElementById("requierOk");

requierOk.onclick = () => {
  addRequier.style.transform = "translate(-50%, -100%)";
};

addConfirm.onclick = () => {
  price = 0;
  inStock = 0;
  OutStock = 0;
  if (
    name.value === "" ||
    category.value === "" ||
    brandName.value === "" ||
    stocknumber.value == 0 ||
    cost.value == 0 ||
    sell.value == 0 ||
    file === ""
  ) {
    addRequier.style.transform = "translate(-50%, 0%)";
  } else {
    idStock++;
    const newProduct = {
      id: idStock,
      name: name.value,
      brandName: brandName.value,
      category: category.value,
      cost: cost.value,
      price: sell.value,
      stock: stocknumber.value,
      status: "In Stock",
      image: file,
    };

    pushProduct(newProduct);
    products.forEach((item) => {
      if (item.status === "In Stock") {
        inStock++;
      }
      if (item.status === "Out Stock") {
        OutStock++;
      }
      price = Number(price) + Number(item.price);
    });
    totalProduct.innerHTML = `${products.length} Items`;
    inStockProducts.innerHTML = `${inStock} Items`;
    outOfStockProducts.innerHTML = `${OutStock} Items`;
    totalPrice.innerHTML = `$${price.toFixed(2)}`;
    name.value = "";
    category.value = "Shirt";
    brandName.value = "";
    stocknumber.value = 0;
    cost.value = 0;
    sell.value = 0;
    addProductTopup.style.transform = "scale(0)";
    imageUploadShow.style.display = "none";
  }
};
addCancel.onclick = () => {
  name.value = "";
  category.value = "Shirt";
  brandName.value = "";
  stocknumber.value = 0;
  cost.value = 0;
  sell.value = 0;
  imageUploadShow.style.display = "none";
};

// Log Out

const logOut = document.getElementById("logOut");
const logOutAlert = document.getElementById("logOutAlert");
const logOutCancel = document.getElementById("logOutCancel");
const logOutYes = document.getElementById("logOutYes");

const reloadPage = document.getElementById("reloadPage");

logOut.onclick = () => {
  logOutAlert.style.transform = "scale(1)";
};
logOutCancel.onclick = () => {
  logOutAlert.style.transform = "scale(0)";
};
logOutYes.onclick = () => {
  reloadPage.style.transform = "scale(1)";
  document.body.style.opacity = "0.3";

  setInterval(() => {
    reloadPage.style.transform = "scale(0)";
    document.body.style.opacity = "1";
    window.location.href = "../index.html";
  }, 2000);
};

// Side Bar Responsive
const menu = document.getElementById("menu");
const leftSideBar = document.getElementById("leftSideBar");
let collapsed = false;

menu.onclick = () => {
  if (collapsed) {
    leftSideBar.style.height = "300px";
    leftSideBar.style.padding = "20px";
    collapsed = false;
  } else {
    leftSideBar.style.height = "0";
    leftSideBar.style.padding = "0";
    collapsed = true;
  }
};
