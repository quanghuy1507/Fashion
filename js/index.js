// ========Products========
const getProducts = async () => {
  try {
    const results = await fetch("./data/products.json");
    const data = await results.json();
    // console.log(data);
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

const ProductsWrapper = document.getElementById("products");

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProducts();
  displayProductItems(products);
});

const displayProductItems = (items) => {
  let displayProduct = items.map(
    (products) =>
      ` 
            <div class="col l-3">
              <a href="">
                <div class="item">
                <div class="product-img">
                  <div class="product_sale">
                    <span>${products.sale || ""}</span>
                  </div>
                  <div class="product_view">
                    <a href="#"><span class="material-symbols-outlined">location_searching</span></a>
                  </div>
                  <a href="#" class="img_box">
                    <img src=${products.image1} alt="" class="img_box-view">
                    <img src=${products.image2} alt="" class="img_box-hidden">
                  </a>
                </div>
                <div class="product-details">
                  <h3>
                      <a href="#">${products.title}</a>
                  </h3>
                  <div class="price">
                    <span class="price_new">${products.price}đ</span>
                     <span class="price_old">${products.price_old || ""}</span>
                  </div>
                  <div class="img_details">
                    <ul>
                      <li>
                        <img src=${products.image_detail1}>
                      </li>
                       <li>
                        <img src=${products.image_detail12} class="img_details">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </a>
            </div>`
  );

  displayProduct = displayProduct.join("");
  if (ProductsWrapper) {
    ProductsWrapper.innerHTML = displayProduct;
  }
};

// ==============Product-selling==============
const getProductSelling = async () => {
  try {
    const results = await fetch("./data/product_selling.json");
    const data = await results.json();
    // console.log(data);
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

const ProductsWrap = document.getElementById("product-selling");

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProductSelling();
  displayProduct(products);
});

const displayProduct = (items) => {
  let displayProduct = items.map(
    (products) =>
      ` 
      <div class="col l-3">
              <div class="product-block">
                <div class="product-img">
                  <div class="product_sale">
                     <span>${products.sale || ""}</span>
                  </div>
                  <div class="product_view">
                    <a href="#"><span class="material-symbols-outlined">location_searching</span></a>
                  </div>
                  <a href="#" class="img_box">
                    <img src=${products.image1} alt="" class="img_box-view">
                    <img src=${products.image2} alt="" class="img_box-hidden">
                  </a>
                </div>
                <div class="product-details">
                  <h3>
                        <a href="#">${products.title}</a>
                  </h3>
                  <div class="price">
                    <span class="price_new">${products.price}đ</span>
                     <span class="price_old">${products.price_old || ""}</span>
                  </div>
                  <div class="img_details">
                    <ul>
                      <li>
                        <img src=${
                          products.image_detail1
                        } alt="" class="img_details">
                      </li>
                       <li>
                        <img src=${products.image_detail12} class="img_details">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      
            `
  );

  displayProduct = displayProduct.join("");
  if (ProductsWrap) {
    ProductsWrap.innerHTML = displayProduct;
  }
};

//============ details-products=========
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".nav-tab-item");
const panes = $$(".tab-pane");

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $(".nav-tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// ======introduce=====
const menus = $$(".menu_list-link");
const contents = $$(".tab-pane");

menus.forEach((menu, index) => {
  const content = contents[index];
  menu.onclick = function () {
    $(".menu_list-link.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    content.classList.add("active");
  };
});

// ============blog categoy=========
const iconMenu = $$(".link-icon");
const navMenu = $$(".menu_list-smalls");

iconMenu.forEach((icon, index) => {
  const navMenuActive = navMenu[index];

  icon.addEventListener("click", (e) => {
    let iconActive = e.target;
    if (iconActive.classList.contains("bx-plus")) {
      iconActive.classList.replace("bx-plus", "bx-minus");
      navMenuActive.classList.add("active");
    } else {
      iconActive.classList.replace("bx-minus", "bx-plus");
      navMenuActive.classList.remove("active");
    }
  });
});

// ======produc-fliter=====
const filterMenu = $(".filterTagFull");
const closeFilter = $(".filter-close");
const boxFilter = $(".box_sidebar");

filterMenu.onclick = function () {
  boxFilter.classList.add("active");
};

closeFilter.onclick = function () {
  boxFilter.classList.remove("active");
};
// ===product collagmenu======
const titles = $$(".title_block ");
const iconTitles = $$(".icon-control i");
const menuCollag = $$(".check-box-list");

titles.forEach((title, index) => {
  const menuCollass = menuCollag[index];
  const icontitle = iconTitles[index];
  title.addEventListener("click", (e) => {
    menuCollass.classList.toggle("active");
    icontitle.classList.toggle("rorate");
  });
});
