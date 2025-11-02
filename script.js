const products = [
  {
    name: "Wireless Headphones",
    price: 59.99,
    img: "https://images.unsplash.com/photo-1580894908361-967195033215?w=600"
  },
  {
    name: "Smartwatch Pro",
    price: 129.99,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
  },
  {
    name: "Bluetooth Speaker",
    price: 39.99,
    img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?w=600"
  },
  {
    name: "Gaming Mouse",
    price: 24.99,
    img: "https://images.unsplash.com/photo-1587202372775-98973f9e91f1?w=600"
  },
  {
    name: "Mechanical Keyboard",
    price: 79.99,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600"
  }
];

const productList = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <div class="product-info">
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
    </div>
  `;
  productList.appendChild(card);
});

function addToCart(productName) {
  alert(`🛒 "${productName}" added to your cart!`);
}