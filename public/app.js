const products = [
  {
    name: "Solstice Noise-Canceling Headphones",
    category: "Audio",
    price: 349,
    status: "In stock",
    highlight: "Immersive sound with adaptive EQ."
  },
  {
    name: "Aurora Smart Thermostat",
    category: "Home",
    price: 279,
    status: "In stock",
    highlight: "Learns habits to optimize energy."
  },
  {
    name: "Lumen Studio Lamp",
    category: "Lighting",
    price: 189,
    status: "Limited",
    highlight: "Precision brightness with touch controls."
  },
  {
    name: "Nimbus Travel Duffel",
    category: "Lifestyle",
    price: 220,
    status: "Pre-order",
    highlight: "Water-resistant shell with hidden pockets."
  },
  {
    name: "Pulse Fitness Ring",
    category: "Wearables",
    price: 149,
    status: "In stock",
    highlight: "Tracks recovery with skin temperature."
  },
  {
    name: "Orbit Desk Dock",
    category: "Accessories",
    price: 129,
    status: "In stock",
    highlight: "Magnetic alignment for every device."
  },
  {
    name: "Echo Smart Speaker",
    category: "Audio",
    price: 199,
    status: "In stock",
    highlight: "Spatial sound with 360° clarity."
  },
  {
    name: "Halo Air Purifier",
    category: "Home",
    price: 329,
    status: "Limited",
    highlight: "HEPA filtration with ambient light."
  },
  {
    name: "Vela Ceramic Mug",
    category: "Lifestyle",
    price: 48,
    status: "In stock",
    highlight: "Double-wall insulation, matte finish."
  },
  {
    name: "Prism Mechanical Keyboard",
    category: "Workspace",
    price: 249,
    status: "Pre-order",
    highlight: "Hot-swappable switches, low profile."
  },
  {
    name: "Drift Electric Scooter",
    category: "Mobility",
    price: 899,
    status: "In stock",
    highlight: "Range up to 40 miles per charge."
  },
  {
    name: "Zenith Leather Folio",
    category: "Accessories",
    price: 165,
    status: "Limited",
    highlight: "Crafted from Italian leather."
  },
  {
    name: "Aura Sleep Mask",
    category: "Wellness",
    price: 62,
    status: "In stock",
    highlight: "Cooling gel with breathable weave."
  },
  {
    name: "Flux Portable Projector",
    category: "Entertainment",
    price: 499,
    status: "Pre-order",
    highlight: "4K-ready lens with auto focus."
  },
  {
    name: "Sage Indoor Garden",
    category: "Home",
    price: 259,
    status: "In stock",
    highlight: "Self-watering with smart lighting."
  }
];

const productGrid = document.getElementById("productGrid");
const addProductForm = document.getElementById("addProductForm");
const paymentForm = document.getElementById("paymentForm");
const paymentOutput = document.getElementById("paymentOutput");

const createProductCard = (product) => {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-meta">
      <span class="tag">${product.status}</span>
      <span class="price">$${product.price}</span>
    </div>
    <div>
      <h3>${product.name}</h3>
      <p class="caption">${product.category}</p>
    </div>
    <p class="subhead">${product.highlight}</p>
  `;

  return card;
};

const renderProducts = () => {
  productGrid.innerHTML = "";
  products.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });
};

addProductForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(addProductForm);
  const newProduct = {
    name: formData.get("name"),
    category: formData.get("category"),
    price: Number(formData.get("price")),
    status: formData.get("status"),
    highlight: formData.get("highlight")
  };

  products.unshift(newProduct);
  renderProducts();
  addProductForm.reset();
});

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(paymentForm);
  const payer = formData.get("payer");
  const payee = formData.get("payee");
  const method = formData.get("method");
  const notes = formData.get("notes") || "Net 0";

  paymentOutput.innerHTML = `
    <p class="label">Current payout rule</p>
    <p class="value">${payer} → ${payee} · ${method}</p>
    <p class="caption">${notes}</p>
  `;
});

renderProducts();
