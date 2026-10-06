// ===============================
// Products
// ===============================

const products = [
  // صبحانه
  {
    id: 1,
    name: "صبحانه انگلیسی",
    category: "breakfast",
    price: 320000,
  },
  {
    id: 28,
    name: "املت ایتالیایی",
    category: "breakfast",
    price: 180000,
  },
  {
    id: 29,
    name: "بشقاب سوسیس",
    category: "breakfast",
    price: 180000,
  },
  {
    id: 2,
    name: "املت مخصوص",
    category: "breakfast",
    price: 180000,
  },
  {
    id: 3,
    name: "صبحانه ایرانی",
    category: "breakfast",
    price: 250000,
  },

  // کروسان
  {
    id: 4,
    name: "کروسان شکلاتی",
    category: "croissant",
    price: 150000,
  },
  {
    id: 5,
    name: "کروسان پسته‌ای",
    category: "croissant",
    price: 190000,
  },
  {
    id: 6,
    name: "کروسان بادام",
    category: "croissant",
    price: 170000,
  },

  // سوپ
  {
    id: 30,
    name: "سیب زمینی سرخ شده",
    category: "soup",
    price: 180000,
  },
  {
    id: 31,
    name: "سیب زمینی با پنیر",
    category: "soup",
    price: 180000,
  },
  {
    id: 32,
    name: "سیب زمینی با سس قارچ",
    category: "soup",
    price: 180000,
  },
  {
    id: 33,
    name: "نان سیر",
    category: "soup",
    price: 180000,
  },
  {
    id: 34,
    name: "چیکن فایر",
    category: "soup",
    price: 180000,
  },
  {
    id: 7,
    name: "سوپ قارچ",
    category: "soup",
    price: 180000,
  },
  {
    id: 8,
    name: "سوپ جو",
    category: "soup",
    price: 160000,
  },
  {
    id: 9,
    name: "پیش غذای مخصوص",
    category: "soup",
    price: 220000,
  },

  // سالاد
  {
    id: 10,
    name: " سزار با مرغ گریل",
    category: "salad",
    price: 280000,
  },
  {
    id: 35,
    name: "سالاد سبز",
    category: "salad",
    price: 280000,
  },
  {
    id: 36,
    name: "سالاد بیکن",
    category: "salad",
    price: 280000,
  },
  {
    id: 11,
    name: "سالاد فصل",
    category: "salad",
    price: 180000,
  },
  {
    id: 12,
    name: "سالاد مرغ گریل",
    category: "salad",
    price: 320000,
  },

  // غذای اصلی
  {
    id: 13,
    name: "استیک مرغ",
    category: "main-food",
    price: 420000,
  },
  {
    id: 14,
    name: "چیکن گریل",
    category: "main-food",
    price: 390000,
  },
  {
    id: 37,
    name: "استیک",
    category: "main-food",
    price: 520000,
  },
  {
    id: 38,
    name: "استیک مرغ",
    category: "main-food",
    price: 520000,
  },
  {
    id: 15,
    name: "بشقاب مخصوص ستایش",
    category: "main-food",
    price: 520000,
  },

  // پاستا
  {
    id: 16,
    name: "پاستا آلفردو",
    category: "pasta",
    price: 350000,
  },
  {
    id: 17,
    name: "پاستا پستو",
    category: "pasta",
    price: 370000,
  },
  {
    id: 18,
    name: "پاستا بیکن",
    category: "pasta",
    price: 330000,
  },

  // پیتزا
  {
    id: 19,
    name: "پیتزا پپرونی",
    category: "pizza",
    price: 390000,
  },
  {
    id: 20,
    name: "پیتزا مرغ و قارچ",
    category: "pizza",
    price: 380000,
  },
  {
    id: 39,
    name: "پیتزا چیکن پستو",
    category: "pizza",
    price: 450000,
  },
  {
    id: 40,
    name: "پیتزا بیکن و قارچ ",
    category: "pizza",
    price: 450000,
  },
  {
    id: 41,
    name: "پیتزا چیکن آلفردو ",
    category: "pizza",
    price: 450000,
  },
  {
    id: 42,
    name: "پیتزا مرغ و اسفناج ",
    category: "pizza",
    price: 450000,
  },
  {
    id: 43,
    name: "پیتزا سیر و استیک ",
    category: "pizza",
    price: 450000,
  },
  {
    id: 44,
    name: "پیتزا مارگاریتا ",
    category: "pizza",
    price: 450000,
  },
  {
    id: 21,
    name: "پیتزا مخصوص ستایش",
    category: "pizza",
    price: 450000,
  },

  // برگر
  {
    id: 22,
    name: "برگر کلاسیک",
    category: "burger",
    price: 340000,
  },
  {
    id: 45,
    name: " کریسپی برگر",
    category: "burger",
    price: 340000,
  },
  {
    id: 46,
    name: " ماشروم برگر",
    category: "burger",
    price: 340000,
  },
  {
    id: 47,
    name: " بیکن برگر ",
    category: "burger",
    price: 340000,
  },
  {
    id: 23,
    name: "چیزبرگر",
    category: "burger",
    price: 380000,
  },
  {
    id: 24,
    name: "برگر مخصوص ستایش",
    category: "burger",
    price: 430000,
  },

  // ساندویچ
  {
    id: 25,
    name: "ساندویچ مرغ",
    category: "sandwich",
    price: 280000,
  },
  {
    id: 48,
    name: "ساندویچ استیک",
    category: "sandwich",
    price: 390000,
  },
  {
    id: 49,
    name: "ساندویچ چیکن پستو ",
    category: "sandwich",
    price: 390000,
  },
  {
    id: 26,
    name: "ساندویچ رست بیف",
    category: "sandwich",
    price: 390000,
  },
  {
    id: 50,
    name: "ساندویچ فلافل",
    category: "sandwich",
    price: 390000,
  },
  {
    id: 27,
    name: "ساندویچ مخصوص",
    category: "sandwich",
    price: 350000,
  },
];

// ===============================
// Categories
// ===============================

const categories = [
  {
    id: "breakfast",
    name: "صبحانه",
    icon: "breakfast",
  },
  {
    id: "croissant",
    name: "کروسان",
    icon: "croissant",
  },
  {
    id: "soup",
    name: "سوپ و پیش غذا",
    icon: "soup",
  },
  {
    id: "salad",
    name: "سالاد",
    icon: "salad",
  },
  {
    id: "main-food",
    name: "غذای اصلی",
    icon: "main",
  },
  {
    id: "pasta",
    name: "پاستا",
    icon: "pasta",
  },
  {
    id: "pizza",
    name: "پیتزا",
    icon: "pizza",
  },
  {
    id: "burger",
    name: "برگر",
    icon: "burger",
  },
  {
    id: "sandwich",
    name: "ساندویچ",
    icon: "sandwich",
  },
];

// ===============================
// State
// ===============================

let currentFilter = "all";
let searchTerm = "";

// ===============================
// DOM
// ===============================

const productList = document.getElementById("productList");

const searchInput = document.getElementById("searchInput");

const categoriesContainer = document.getElementById("categories");

const selectedCategory = document.getElementById("selectedCategory");

const productCount = document.getElementById("productCount");

const clearSearch = document.getElementById("clearSearch");

// ===============================
// Persian Number
// ===============================

function toPersianNumber(number) {
  return number.toLocaleString("fa-IR");
}

// ===============================
// Category SVG
// ===============================

function getCategoryIcon(type) {
  const icons = {
    breakfast: `
      <svg viewBox="0 0 24 24">
        <path d="M4 10h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4Z"/>
        <path d="M4 10a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3"/>
        <path d="M8 5v2M12 4v3M16 5v2"/>
      </svg>
    `,

    croissant: `
      <svg viewBox="0 0 24 24">
        <path d="M5 15c2 4 7 5 11 2 3-2 4-6 1-9-2-2-5-3-8-1-3 1-5 4-4 8Z"/>
        <path d="M7 15c2 1 4 1 6 0M9 11c1 1 3 2 5 1M14 9c1 1 2 1 3 1"/>
      </svg>
    `,

    soup: `
      <svg viewBox="0 0 24 24">
        <path d="M4 11h16c0 5-3 8-8 8s-8-3-8-8Z"/>
        <path d="M3 11h18"/>
        <path d="M8 7c0-2 2-2 2-4M13 7c0-2 2-2 2-4"/>
      </svg>
    `,

    salad: `
      <svg viewBox="0 0 24 24">
        <path d="M4 11h16c0 5-3 8-8 8s-8-3-8-8Z"/>
        <path d="M4 11c1-5 5-7 8-7s7 2 8 7"/>
        <circle cx="8" cy="9" r="1"/>
        <circle cx="13" cy="7" r="1"/>
        <circle cx="16" cy="10" r="1"/>
      </svg>
    `,

    main: `
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8"/>
        <path d="M8 12h8M12 8v8"/>
        <path d="M5 5l2 2M19 5l-2 2"/>
      </svg>
    `,

    pasta: `
      <svg viewBox="0 0 24 24">
        <path d="M5 12h14"/>
        <path d="M7 12c0-4 2-7 5-7s5 3 5 7"/>
        <path d="M8 15c1 2 2 3 4 3s3-1 4-3"/>
        <path d="M9 8c1 1 2 1 3 0M14 8c1 1 2 1 3 0"/>
      </svg>
    `,

    pizza: `
      <svg viewBox="0 0 24 24">
        <path d="M4 5c7-3 13-1 16 2l-9 14L4 5Z"/>
        <circle cx="10" cy="9" r="1.3"/>
        <circle cx="14" cy="12" r="1.3"/>
        <circle cx="11" cy="15" r="1.3"/>
      </svg>
    `,

    burger: `
      <svg viewBox="0 0 24 24">
        <path d="M5 9c0-3 3-5 7-5s7 2 7 5"/>
        <path d="M4 10h16v3H4z"/>
        <path d="M5 14h14"/>
        <path d="M4 16h16"/>
        <path d="M5 17c1 2 3 3 7 3s6-1 7-3"/>
      </svg>
    `,

    sandwich: `
      <svg viewBox="0 0 24 24">
        <path d="M4 7h16l-3 12H7L4 7Z"/>
        <path d="M4 7c2-3 5-4 8-4s6 1 8 4"/>
        <path d="M7 12h10M8 15h8"/>
      </svg>
    `,
  };

  return icons[type];
}

// ===============================
// Product SVG
// ===============================

function getProductIcon(category) {
  const icons = {
    breakfast: `
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7"/>
        <circle cx="12" cy="12" r="2.5"/>
      </svg>
    `,

    croissant: `
      <svg viewBox="0 0 24 24">
        <path d="M5 15c2 4 7 5 11 2 3-2 3-6 1-8-2-3-6-3-9-1-3 2-4 4-3 7Z"/>
        <path d="M8 15c2 1 4 0 6-2"/>
      </svg>
    `,

    soup: `
      <svg viewBox="0 0 24 24">
        <path d="M4 11h16c0 5-3 8-8 8s-8-3-8-8Z"/>
        <path d="M4 11h16"/>
      </svg>
    `,

    salad: `
      <svg viewBox="0 0 24 24">
        <path d="M4 11h16c0 5-3 8-8 8s-8-3-8-8Z"/>
        <circle cx="9" cy="9" r="1"/>
        <circle cx="14" cy="8" r="1"/>
        <circle cx="17" cy="10" r="1"/>
      </svg>
    `,

    "main-food": `
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    `,

    pasta: `
      <svg viewBox="0 0 24 24">
        <path d="M5 12h14"/>
        <path d="M7 12c0-4 2-7 5-7s5 3 5 7"/>
        <path d="M8 15c1 2 2 3 4 3s3-1 4-3"/>
      </svg>
    `,

    pizza: `
      <svg viewBox="0 0 24 24">
        <path d="M4 5c7-3 13-1 16 2l-9 14L4 5Z"/>
        <circle cx="10" cy="9" r="1"/>
        <circle cx="14" cy="12" r="1"/>
      </svg>
    `,

    burger: `
      <svg viewBox="0 0 24 24">
        <path d="M5 9c0-3 3-5 7-5s7 2 7 5"/>
        <path d="M4 10h16v3H4z"/>
        <path d="M5 14h14"/>
        <path d="M4 16h16"/>
      </svg>
    `,

    sandwich: `
      <svg viewBox="0 0 24 24">
        <path d="M4 7h16l-3 12H7L4 7Z"/>
        <path d="M4 7c2-3 5-4 8-4s6 1 8 4"/>
      </svg>
    `,
  };

  return icons[category];
}

// ===============================
// Render Categories
// ===============================

function renderCategories() {
  categoriesContainer.innerHTML = categories
    .map((category) => {
      return `
        <button
          class="category-card ${currentFilter === category.id ? "active" : ""}"
          data-category="${category.id}"
        >

          <span class="category-icon">
            ${getCategoryIcon(category.icon)}
          </span>

          <span class="category-name">
            ${category.name}
          </span>

          <span class="category-arrow">
            ←
          </span>

        </button>
      `;
    })
    .join("");
}

// ===============================
// Render Products
// ===============================

function renderProducts() {
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      currentFilter === "all" || product.category === currentFilter;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Title

  if (currentFilter === "all") {
    selectedCategory.textContent = "همه منو";
  } else {
    const selected = categories.find(
      (category) => category.id === currentFilter,
    );

    selectedCategory.textContent = selected.name;
  }

  // Count

  productCount.textContent = `${toPersianNumber(filteredProducts.length)} محصول`;

  // Empty

  if (filteredProducts.length === 0) {
    productList.innerHTML = `
      <div class="empty-state">

        <div class="empty-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <circle cx="11" cy="11" r="7"/>
            <path d="m20 20-4-4"/>
            <path d="M8 8l6 6M14 8l-6 6"/>
          </svg>
        </div>

        <h3>چیزی پیدا نشد!</h3>

        <p>
          نام غذای دیگری را جستجو کن
        </p>

      </div>
    `;

    return;
  }

  // Products

  productList.innerHTML = filteredProducts
    .map((product) => {
      return `
          <article class="product-card">

            <div class="product-top">

              <div class="product-icon">
                ${getProductIcon(product.category)}
              </div>

              <span class="favorite">
                ♡
              </span>

            </div>


            <div class="product-info">

              <h3>
                ${product.name}
              </h3>

              <p>
                تهیه شده با بهترین مواد اولیه
              </p>

            </div>


            <div class="product-bottom">

              <div class="price">

                <strong>
                  ${toPersianNumber(product.price)}
                </strong>

                <span>
                  تومان
                </span>

              </div>

              <button
                class="add-button"
                type="button"
              >
                +
              </button>

            </div>

          </article>
        `;
    })
    .join("");
}

// ===============================
// Category Click
// ===============================

categoriesContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".category-card");

  if (!button) return;

  currentFilter = button.dataset.category;

  renderCategories();
  renderProducts();

  document.querySelector(".products-section").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// ===============================
// Search
// ===============================

function debounce(func, delay) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), delay);
  };
}

searchInput.addEventListener(
  "input",
  debounce((event) => {
    searchTerm = event.target.value.trim();

    clearSearch.classList.toggle("show", searchTerm.length > 0);

    renderProducts();
  }, 200),
);

// ===============================
// Clear Search
// ===============================

clearSearch.addEventListener("click", () => {
  searchInput.value = "";

  searchTerm = "";

  clearSearch.classList.remove("show");

  renderProducts();

  searchInput.focus();
});

// ===============================
// All Menu
// ===============================

// با دوبار کلیک روی عنوان منو
// همه محصولات نمایش داده می‌شوند.

document.querySelector(".brand").addEventListener("click", () => {
  currentFilter = "all";

  renderCategories();
  renderProducts();
});

// ===============================
// Initial Render
// ===============================

renderCategories();
renderProducts();
