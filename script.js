/* Nandhika Virgin Coconut Oil — vanilla JS */

const WHATSAPP_NUMBER = "919895431982";
const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxKR8YnIyv5xYjnJtw84KcAjjgDQOsGG09NIsRQC1_1AJZ_C3479xa8vcGqj99grpooPA/exec";
const PHONE_DISPLAY = "+91 98954 31982";
const DELIVERY_LABEL = "Standard Delivery";
const DELIVERY_CHARGE = 50;
const TAX_LABEL = "Tax";
const TAX_RATE = 0.05;
const ADDRESS_LINES = [
  "Athira Oil Mill, Panavila Chenkal,",
  "Vattavila P O, Neyyattinkara,",
  "Thiruvananthapuram, Kerala - 695132",
];
const SOCIALS = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/",
  maps: "https://www.google.com/maps/search/?api=1&query=Athira+Oil+Mill+Panavila+Chenkal+Vattavila+Neyyattinkara+Thiruvananthapuram+Kerala+695132",
};

const PRODUCTS = [
  {
    id: "500ml",
    name: "Nandhika Virgin Standard Coconut Oil",
    size: "500ml Bottle",
    price: 250,
    image: "assets/bottle-500ml.png",
  },
  {
    id: "1l",
    name: "Nandhika Virgin Standard Coconut Oil",
    size: "1 Litre Bottle",
    price: 500,
    image: "assets/bottle-1l.png",
  },
  {
    id: "2l",
    name: "Nandhika Virgin Standard Coconut Oil",
    size: "2 Litre Combo",
    price: 950,
    image: "assets/combo-2l.png",
  },
  {
    id: "5l",
    name: "Nandhika Virgin Standard Coconut Oil",
    size: "5 Litre Pack",
    price: 2300,
    image: "assets/can-5l.png",
  },
];

const NAV = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Our Process", "#process"],
  ["Products", "#products"],
  ["Why Nandhika", "#why"],
  ["FAQ", "#faq"],
  ["Contact Us", "#contact"],
];

const FEATURES = [
  ["droplet", "100% Virgin Standard"],
  ["thermometer", "Cold Pressed at 47°C"],
  ["shield", "No Added Preservatives"],
  ["sun", "Advanced Infrared Drying"],
  ["leaf", "Naturally Pure"],
];

const TRUST = [
  ["check-check", "Carefully Selected", "Coconuts"],
  ["cpu", "Advanced", "Processing"],
  ["gauge", "Controlled", "Moisture"],
  ["thermometer", "Cold Pressed", "at 47°C"],
  ["package-check", "Hygienically", "Packed"],
];

const COOKING_POINTS = [
  ["Naturally Processed", "Carefully produced from selected coconuts."],
  ["Cold Pressed", "Extracted using controlled low-temperature pressing."],
  ["Naturally Filtered", "Filtered for clean and consistent oil."],
  ["Made in Kerala", "Manufactured in Thiruvananthapuram, Kerala."],
];

const REASONS = [
  [
    "Advanced Infrared Drying",
    "Selected coconuts are dried using controlled infrared technology designed to remove moisture while retaining their natural characteristics.",
  ],
  [
    "Cold Pressed at 47°C",
    "Our controlled cold-pressing process keeps temperatures at approximately 47°C during extraction.",
  ],
  [
    "Precise Moisture Control",
    "Moisture levels are carefully monitored before extraction to help maintain consistency and quality.",
  ],
  [
    "No Added Preservatives",
    "Carefully processed coconut oil without unnecessary additives or preservatives.",
  ],
  [
    "Single-Take Extraction",
    "A controlled extraction process helps minimise repeated heating and unnecessary processing.",
  ],
  [
    "Quality at Every Stage",
    "From raw coconut selection to final packing, each stage follows a carefully managed production process.",
  ],
];

const PROCESS = [
  ["01", "Coconut Selection", "Carefully selected quality coconuts."],
  ["02", "Copra Preparation", "Coconuts are prepared under controlled conditions."],
  ["03", "Infrared Drying", "Advanced infrared drying helps remove excess moisture."],
  ["04", "Moisture Check", "Moisture levels are measured before extraction."],
  ["05", "Cold Pressing at 47°C", "Controlled extraction helps retain the oil's natural characteristics."],
  ["06", "Natural Filtration", "The extracted coconut oil is filtered for clarity and purity."],
  ["07", "Quality Check & Packing", "The finished oil is checked and hygienically packed."],
];

const TECHNOLOGY = [
  [
    "Infrared Drying",
    "Our stainless-steel infrared drying system removes excess moisture from prepared coconut while avoiding unnecessary over-roasting.",
  ],
  [
    "Scientific Moisture Control",
    "Moisture levels are checked before pressing to ensure the copra reaches the required condition for consistent oil extraction.",
  ],
  [
    "Controlled Cold Pressing",
    "Oil is extracted at approximately 47°C using a controlled cold-pressing process designed to minimise excessive heat exposure.",
  ],
];

const DRYING_POINTS = [
  ["Infrared Drying", "Helps remove excess moisture under controlled conditions."],
  ["Moisture Measurement", "Moisture is checked before the coconut moves to extraction."],
  ["Controlled Preparation", "The process aims for consistent drying without unnecessary hardening."],
  ["Natural Aroma", "Controlled drying helps avoid excessive roasting and preserves the coconut's characteristic aroma."],
];

const REVIEWS = [
  [
    "The aroma feels fresh and natural, and we liked using it for everyday cooking at home. Ordering on WhatsApp was simple and the packaging arrived neat.",
    "Anjali S.",
    "Neyyattinkara, Thiruvananthapuram",
  ],
  [
    "We tried the 1 litre bottle first and the quality felt clean and consistent. It works well for regular kitchen use and the overall experience was smooth.",
    "Rahul P.",
    "Pattom, Thiruvananthapuram",
  ],
  [
    "The coconut fragrance is pleasant and the oil feels carefully processed. The order update through WhatsApp was quick and easy to follow.",
    "Meera K.",
    "Kowdiar, Thiruvananthapuram",
  ],
];

const FAQS = [
  [
    "What is Nandhika Virgin Standard Coconut Oil?",
    "Nandhika Virgin Standard Coconut Oil is naturally processed coconut oil made from carefully selected coconuts using controlled infrared drying, moisture monitoring, cold pressing and filtration.",
  ],
  [
    "How is Nandhika coconut oil made?",
    "The coconuts undergo controlled preparation and infrared drying. Moisture is checked before the prepared copra is cold pressed at approximately 47°C. The extracted oil is then filtered, quality checked and packed.",
  ],
  [
    "Does Nandhika coconut oil contain preservatives?",
    "Nandhika coconut oil is produced without added preservatives.",
  ],
  [
    "Where is Nandhika coconut oil manufactured?",
    "Nandhika Virgin Standard Coconut Oil is manufactured by Athira Oil Mill in Thiruvananthapuram, Kerala, India.",
  ],
  [
    "How can I order Nandhika coconut oil online?",
    "Select the required pack size and quantity on the website, enter the delivery details and click Send Order on WhatsApp. The selected products and order information are then sent directly to Nandhika through WhatsApp.",
  ],
  [
    "What pack sizes are available?",
    "Nandhika coconut oil is currently available in 500ml, 1 litre, 2 litre combo and 5 litre options.",
  ],
];

const formatINR = (n) => `₹${n.toLocaleString("en-IN")}`;
const roundMoney = (n) => Math.round(n * 100) / 100;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const icons = () => window.lucide && window.lucide.createIcons();

const cart = {};
const draft = Object.fromEntries(PRODUCTS.map((p) => [p.id, 1]));
const modal = $("#orderModal");
const successModal = $("#successModal");
const baseWaLink = `https://wa.me/${WHATSAPP_NUMBER}`;
const waLink = `${baseWaLink}?text=${encodeURIComponent("Hello Nandhika,\n\nI would like to place an order.")}`;
const SITE_URL = "https://www.nandhikacoconutoil.in/";

function buildStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Athira Oil Mill",
    brand: {
      "@type": "Brand",
      name: "Nandhika Virgin Standard Coconut Oil",
    },
    url: SITE_URL,
    email: "nandhikacoconutoil@gmail.com",
    telephone: PHONE_DISPLAY,
    logo: "https://www.nandhikacoconutoil.in/assets/logo.png",
    areaServed: ["Neyyattinkara", "Thiruvananthapuram", "Trivandrum", "Kerala"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Athira Oil Mill, Panavila Chenkal, Vattavila P O",
      addressLocality: "Neyyattinkara",
      addressRegion: "Kerala",
      postalCode: "695132",
      addressCountry: "IN",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nandhika Virgin Standard Coconut Oil",
    alternateName: "Nandhika Coconut Oil",
    url: SITE_URL,
    inLanguage: "en-IN",
    keywords:
      "Nandhika, coconut oil, cold pressed coconut oil, virgin coconut oil Kerala, coconut oil Neyyattinkara, coconut oil Thiruvananthapuram, coconut oil Trivandrum",
    about: "Cold pressed coconut oil made in Neyyattinkara, Thiruvananthapuram, Kerala",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  const products = PRODUCTS.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} ${product.size}`,
    image: [`https://www.nandhikacoconutoil.in/${product.image}`],
    description:
      "Naturally processed coconut oil made in Neyyattinkara, Thiruvananthapuram, Kerala using controlled infrared drying and cold pressing at 47°C.",
    brand: {
      "@type": "Brand",
      name: "Nandhika",
    },
    sku: product.id,
    areaServed: ["Neyyattinkara", "Thiruvananthapuram", "Trivandrum", "Kerala"],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: SITE_URL,
      seller: {
        "@type": "Organization",
        name: "Athira Oil Mill",
      },
    },
  }));

  return [organization, website, faq, ...products];
}

function renderStructuredData() {
  const node = $("#seoSchema");
  if (!node) return;
  node.textContent = JSON.stringify(buildStructuredData());
}

function renderStatic() {
  $("#navDesktop").innerHTML = NAV.map(([l, h]) => `<a href="${h}">${l}</a>`).join("");
  $("#navMobile").innerHTML =
    NAV.map(([l, h]) => `<a href="${h}">${l}</a>`).join("") +
    `<button class="btn btn-primary btn-pill" data-open-order style="margin-top:.25rem">Order on WhatsApp</button>`;

  $("#featureList").innerHTML = FEATURES.map(
    ([ic, label]) => `<li><span class="ic"><i data-lucide="${ic}"></i></span><span class="tx">${label}</span></li>`,
  ).join("");

  $("#trustList").innerHTML = TRUST.map(
    ([ic, t, s]) =>
      `<li><span class="ic"><i data-lucide="${ic}"></i></span><span><b>${t}</b><small>${s}</small></span></li>`,
  ).join("");

  $("#cookingPoints").innerHTML = COOKING_POINTS.map(
    ([t, s]) =>
      `<li><span class="ic"><i data-lucide="check"></i></span><span><b>${t}</b><small>${s}</small></span></li>`,
  ).join("");

  $("#reasonList").innerHTML = REASONS.map(
    ([t, s]) =>
      `<li><span class="ic"><i data-lucide="check"></i></span><span><b>${t}</b><small>${s}</small></span></li>`,
  ).join("");

  $("#processList").innerHTML = PROCESS.map(
    ([n, t, s]) =>
      `<li><span class="ic"><i data-lucide="package"></i></span><p class="num">${n}</p><p class="t">${t}</p><p class="s">${s}</p></li>`,
  ).join("");

  $("#technologyList").innerHTML = TECHNOLOGY.map(
    ([t, s]) => `
      <article class="feature-card">
        <span class="feature-icon"><i data-lucide="settings-2"></i></span>
        <h3>${t}</h3>
        <p>${s}</p>
      </article>`,
  ).join("");

  $("#dryingList").innerHTML = DRYING_POINTS.map(
    ([t, s]) =>
      `<li><span class="ic"><i data-lucide="sun"></i></span><span><b>${t}</b><small>${s}</small></span></li>`,
  ).join("");

  $("#reviewList").innerHTML = REVIEWS.map(
    ([text, name, place], index) => `
      <figure class="review">
        <div class="review-top">
          <span class="quote-mark">“</span>
          <span class="stars" aria-label="5 star review">${'<i data-lucide="star"></i>'.repeat(5)}</span>
        </div>
        <blockquote>“${esc(text)}”</blockquote>
        <figcaption>
          <span class="av">${index + 1}</span>
          <span><b>${esc(name)}</b><small>${esc(place)}</small></span>
        </figcaption>
      </figure>`,
  ).join("");

  $("#faqList").innerHTML = FAQS.map(
    ([q, a], i) => `
      <details class="faq-item"${i === 0 ? " open" : ""}>
        <summary>
          <span>${q}</span>
          <i data-lucide="chevron-down"></i>
        </summary>
        <div class="faq-answer"><p>${a}</p></div>
      </details>`,
  ).join("");

  $("#productGrid").innerHTML = PRODUCTS.map(
    (p) => `
      <article class="product">
        <img src="${p.image}" alt="${esc(p.name)} ${esc(p.size)}" width="800" height="800" loading="lazy" />
        <h3>${p.name}</h3>
        <p class="size">${p.size}</p>
        <p class="price">${formatINR(p.price)}</p>
        <div class="actions">
          <div class="stepper" data-stepper="${p.id}">
            <button type="button" aria-label="Decrease quantity" data-step="-1"><i data-lucide="minus"></i></button>
            <span class="val">1</span>
            <button type="button" aria-label="Increase quantity" data-step="1"><i data-lucide="plus"></i></button>
          </div>
          <button class="add-btn" data-add="${p.id}" aria-label="Add ${esc(p.name)} ${esc(p.size)} to order">
            <i data-lucide="shopping-cart"></i>
          </button>
        </div>
      </article>`,
  ).join("");

  $("#footerQuickLinks").innerHTML = NAV.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("");
  $("#footerProducts").innerHTML = PRODUCTS.map((p) => `<li><a href="#products">${p.size}</a></li>`).join("");

  $("#socialList").innerHTML = [
    [SOCIALS.instagram, "instagram", "Instagram"],
    [SOCIALS.facebook, "facebook", "Facebook"],
    [SOCIALS.youtube, "youtube", "YouTube"],
    [SOCIALS.maps, "navigation", "Google Maps"],
  ]
    .map(
      ([href, ic, label]) =>
        `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}"><i data-lucide="${ic}"></i></a>`,
    )
    .join("");

  $("#footerAddress").innerHTML = ADDRESS_LINES.map((l) => `<span>${l}</span>`).join("");
  $$("[data-phone]").forEach((el) => {
    el.textContent = PHONE_DISPLAY;
  });
  $("#year").textContent = new Date().getFullYear();
  $$("[data-wa-link]").forEach((a) => (a.href = waLink));
  const qr = $("#qrCode");
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(baseWaLink)}`;
  qr.alt = `QR code to start WhatsApp order with ${PHONE_DISPLAY}`;
  renderStructuredData();
  icons();
}

function cartCount() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}

function renderBadge() {
  const badge = $("#cartBadge");
  const n = cartCount();
  badge.textContent = n;
  badge.hidden = n === 0;
}

function renderCart() {
  const lines = PRODUCTS.filter((p) => (cart[p.id] ?? 0) > 0).map((p) => ({
    ...p,
    qty: cart[p.id],
    total: cart[p.id] * p.price,
  }));
  const subtotal = lines.reduce((s, l) => s + l.total, 0);
  const delivery = DELIVERY_CHARGE;
  const tax = roundMoney(subtotal * TAX_RATE);
  const total = subtotal + delivery + tax;
  const area = $("#cartArea");

  if (!lines.length) {
    area.innerHTML = `<p class="empty">Your order is empty. Add a product to continue.</p>`;
  } else {
    area.innerHTML = `
      <div class="cart">
        <div class="cart-head"><span>Product</span><span>Qty</span><span>Price</span><span></span></div>
        ${lines
          .map(
            (l) => `
          <div class="cart-row">
            <span class="cart-item">
              <img src="${l.image}" alt="${esc(l.name)} ${esc(l.size)}" width="40" height="40" loading="lazy" />
              <span style="min-width:0">
                <b>${l.name}</b><small>${l.size} • ${formatINR(l.price)}</small>
              </span>
            </span>
            <span class="stepper" data-cart-stepper="${l.id}">
              <button type="button" aria-label="Decrease quantity" data-cart-step="-1"><i data-lucide="minus"></i></button>
              <span class="val">${l.qty}</span>
              <button type="button" aria-label="Increase quantity" data-cart-step="1"><i data-lucide="plus"></i></button>
            </span>
            <span class="lt">${formatINR(l.total)}</span>
            <button type="button" class="rm" data-remove="${l.id}" aria-label="Remove ${esc(l.name)} ${esc(l.size)}">
              <i data-lucide="trash-2"></i>
            </button>
          </div>`,
          )
          .join("")}
        <dl class="totals">
          <div><dt>Subtotal</dt><dd>${formatINR(subtotal)}</dd></div>
          <div><dt>Delivery</dt><dd class="free">${DELIVERY_LABEL} • ${formatINR(delivery)}</dd></div>
          <div><dt>${TAX_LABEL} (5%)</dt><dd>${formatINR(tax)}</dd></div>
          <div class="grand"><dt>Total</dt><dd>${formatINR(total)}</dd></div>
        </dl>
      </div>`;
  }
  renderBadge();
  icons();
  return { lines, subtotal, delivery, tax, total };
}

function openModal() {
  renderCart();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = successModal.hidden ? "" : "hidden";
}

function resetOrderForm() {
  Object.keys(cart).forEach((id) => delete cart[id]);
  $("#orderForm").reset();
  $("#formError").hidden = true;
  renderCart();
}

function showSuccessModal() {
  successModal.hidden = false;
  document.body.style.overflow = "hidden";
  successModal.classList.remove("is-animated");
  requestAnimationFrame(() => successModal.classList.add("is-animated"));
  icons();
}

function closeSuccessModal() {
  successModal.hidden = true;
  successModal.classList.remove("is-animated");
  document.body.style.overflow = modal.hidden ? "" : "hidden";
}

function buildOrderPayload(formData, lines, subtotal, delivery, tax, total) {
  const createdAt = new Date().toISOString();
  return {
    orderId: `NDK-${Date.now()}`,
    createdAt,
    customerName: formData.name.trim(),
    phone: formData.phone.trim(),
    address: formData.address.trim(),
    city: formData.city.trim(),
    pincode: formData.pincode.trim(),
    note: formData.note.trim(),
    items: lines.map(({ id, name, size, price, qty, total: itemTotal }) => ({
      id,
      name,
      size,
      price,
      qty,
      total: itemTotal,
    })),
    subtotal,
    deliveryLabel: DELIVERY_LABEL,
    delivery,
    taxLabel: TAX_LABEL,
    taxRate: TAX_RATE,
    tax,
    total,
    status: "New",
    source: "Website / WhatsApp",
  };
}

async function persistOrder(order) {
  if (!GOOGLE_SHEET_WEB_APP_URL) return false;

  try {
    await fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(order),
    });
    return true;
  } catch (error) {
    console.error("Order logging failed", error);
    return false;
  }
}

function buildWhatsAppMessage(order) {
  return [
    "Hello Nandhika,",
    "",
    "I would like to place an order.",
    "",
    "ORDER",
    ...order.items.map((item) => `${item.size} × ${item.qty} — ${formatINR(item.total)}`),
    "",
    `Subtotal: ${formatINR(order.subtotal)}`,
    `Delivery: ${DELIVERY_LABEL} (${formatINR(order.delivery)})`,
    `${TAX_LABEL} (5%): ${formatINR(order.tax)}`,
    `Total: ${formatINR(order.total)}`,
    "",
    "CUSTOMER",
    `Name: ${order.customerName}`,
    `Phone: ${order.phone}`,
    `Address: ${order.address}`,
    `City / District: ${order.city}`,
    `Pincode: ${order.pincode}`,
    order.note ? `Note: ${order.note}` : "",
    "",
    "Please confirm my order.",
  ]
    .filter(Boolean)
    .join("\n");
}

document.addEventListener("click", (e) => {
  const t = e.target;

  if (t.closest("[data-open-order]")) return openModal();
  if (t.closest("#modalClose")) return closeModal();
  if (t === modal) return closeModal();
  if (t.closest("#successClose")) return closeSuccessModal();
  if (t === successModal) return closeSuccessModal();

  const nav = t.closest("#navMobile a");
  if (nav) {
    $("#navMobile").hidden = true;
    $("#navToggle").setAttribute("aria-expanded", "false");
  }

  if (t.closest("#navToggle")) {
    const m = $("#navMobile");
    m.hidden = !m.hidden;
    $("#navToggle").setAttribute("aria-expanded", String(!m.hidden));
    return;
  }

  const step = t.closest("[data-step]");
  if (step) {
    const box = step.closest("[data-stepper]");
    const id = box.dataset.stepper;
    draft[id] = Math.max(1, (draft[id] ?? 1) + Number(step.dataset.step));
    $(".val", box).textContent = draft[id];
    return;
  }

  const add = t.closest("[data-add]");
  if (add) {
    const id = add.dataset.add;
    cart[id] = (cart[id] ?? 0) + (draft[id] ?? 1);
    openModal();
    return;
  }

  const cstep = t.closest("[data-cart-step]");
  if (cstep) {
    const id = cstep.closest("[data-cart-stepper]").dataset.cartStepper;
    cart[id] = Math.max(1, cart[id] + Number(cstep.dataset.cartStep));
    renderCart();
    return;
  }

  const rm = t.closest("[data-remove]");
  if (rm) {
    delete cart[rm.dataset.remove];
    renderCart();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
  if (e.key === "Escape" && !successModal.hidden) closeSuccessModal();
});

$("#orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target).entries());
  const err = $("#formError");
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const fail = (msg) => {
    err.textContent = msg;
    err.hidden = false;
  };

  const { lines, subtotal, delivery, tax, total } = renderCart();

  if (!lines.length) return fail("Please add at least one product.");
  if (!f.name.trim()) return fail("Please enter your full name.");
  if (!/^[0-9+\s-]{10,15}$/.test(f.phone.trim())) return fail("Please enter a valid WhatsApp number.");
  if (!f.address.trim() || !f.city.trim() || !f.pincode.trim()) return fail("Please complete your delivery address.");
  err.hidden = true;

  const order = buildOrderPayload(f, lines, subtotal, delivery, tax, total);
  const whatsappWindow = window.open("", "_blank");

  if (!whatsappWindow) {
    return fail("WhatsApp could not be opened. Please allow popups and try again.");
  }

  submitBtn.disabled = true;
  const originalLabel = submitBtn.textContent;
  submitBtn.textContent = "Preparing Order...";

  await persistOrder(order);

  const message = buildWhatsAppMessage(order);
  whatsappWindow.location.href = `${baseWaLink}?text=${encodeURIComponent(message)}`;

  closeModal();
  resetOrderForm();
  showSuccessModal();
  submitBtn.disabled = false;
  submitBtn.textContent = originalLabel;
});

renderStatic();
renderBadge();
