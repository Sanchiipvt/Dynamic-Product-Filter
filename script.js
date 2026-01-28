const products = [
  {
    id: 1,
    name: "Floral Dress",
    price: 1499,
    category: "clothing",
    image: "https://i.pinimg.com/736x/7b/6b/d2/7b6bd27882fe96a4c9fd57dd54ce96dd.jpg"
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 2499,
    category: "clothing",
    image: "https://i.pinimg.com/1200x/fe/bc/50/febc503d5314285707d56cec513a6575.jpg"
  },
  {
    id: 3,
    name: "Gold Necklace",
    price: 3999,
    category: "jewellery",
    image: "https://i.pinimg.com/736x/8f/4b/8f/8f4b8ff95297df51cd014cc842814d29.jpg"
  },
  {
    id: 4,
    name: "Silver Earrings",
    price: 1999,
    category: "jewellery",
    image: "https://i.pinimg.com/736x/78/a0/95/78a095e1066895a9b1797f41b69ddc63.jpg"
  }
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(filteredProducts) {
  productGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>&#8377;${product.price}</p>
      </div>
    </div>
  `).join('');
}

displayProducts(products);

categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;
  if (selectedCategory === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(product => product.category === selectedCategory);
    displayProducts(filtered);
  }
});
