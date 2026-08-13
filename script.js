/* Nandhika Virgin Coconut Oil — vanilla JS */

const WHATSAPP_NUMBER = "919895431982";
const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxKR8YnIyv5xYjnJtw84KcAjjgDQOsGG09NIsRQC1_1AJZ_C3479xa8vcGqj99grpooPA/exec";
const PHONE_DISPLAY = "+91 98954 31982";
const FSSAI = "21325139000497";
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
  { id: "500ml", name: "Nandhika Cold Pressed", size: "500 ML Bottle", price: 250, image: "assets/bottle-500ml.png" },
  { id: "1l", name: "Nandhika Cold Pressed", size: "1000 ML Bottle", price: 450, image: "assets/bottle-1l.png" },
  { id: "2l", name: "Nandhika Combo Pack", size: "2 x 1000 ML Bottles", price: 850, image: "assets/combo-2l.png", badge: "Best Seller" },
  { id: "5l", name: "Nandhika Family Can", size: "5 Litre Jerry Can", price: 1800, image: "assets/can-5l.png" },
];

const NAV = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Our Process", "#process"],
  ["Products", "#products"],
  ["Why Nandhika", "#why"],
  ["Contact Us", "#contact"],
];

const FEATURES = [
  ["droplet", "100% Virgin"],
  ["snowflake", "Cold Pressed"],
  ["flask-conical", "No Chemicals"],
  ["leaf", "Preservative Free"],
  ["heart-handshake", "Rich in Lauric Acid"],
];

const TRUST = [
  ["heart-handshake", "Thousands of", "Happy Families"],
  ["sparkles", "Made with Premium", "Coconuts"],
  ["factory", "Hygienic &", "Modern Process"],
  ["award", "FSSAI", "Certified"],
  ["recycle", "Eco Friendly", "Packaging"],
];

const PROCESS = [
  ["01", "Premium Coconuts", "Handpicked for quality"],
  ["02", "Infra Red Dryer", "Dries without losing nutrients"],
  ["03", "Moisture Check", "Ensures perfect dryness"],
  ["04", "Cold Pressed at 47°C", "Retains natural goodness"],
  ["05", "Nutrient Retention", "Keeps goodness, nothing removed"],
  ["06", "Virgin Standard", "Our promise of purity"],
];

const REASONS = [
  ["100% Pure & Natural", "No additives or fillers"],
  ["Rich in Lauric Acid", "Boosts immunity"],
  ["Cold Pressed at 47°C", "To retain nutrients"],
  ["Goodness of Coconut", "Natural & wholesome"],
  ["No Added Chemicals", "Totally safe for your family"],
  ["Made with Love & Care", "For a healthier you"],
];

const REVIEWS = [
  ["The purity and taste of Nandhika coconut oil is excellent. Highly recommended!", "Anitha R.", "Trivandrum"],
  ["We started using Nandhika for our entire family. It's pure, natural and very good for health.", "Suresh B.", "Kollam"],
  ["You can really feel the difference in quality. Truly a trusted brand.", "Meena L.", "Pathanamthitta"],
];

const formatINR = (n) => `₹${n.toLocaleString("en-IN")}`;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const icons = () => window.lucide && window.lucide.createIcons();

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Nandhika, I'd like to order virgin coconut oil.",
)}`;

/* ---------- state ---------- */
const cart = {};
const draft = Object.fromEntries(PRODUCTS.map((p) => [p.id, 1]));

/* ---------- static content ---------- */
function renderStatic() {
  $("#navDesktop").innerHTML = NAV.map(([l, h]) => `<a href="${h}">${l}</a>`).join("");
  $("#navMobile").innerHTML =
    NAV.map(([l, h]) => `<a href="${h}">${l}</a>`).join("") +
    `<button class="btn btn-primary btn-pill" data-open-order style="margin-top:.25rem">Order Now</button>`;

  $("#featureList").innerHTML = FEATURES.map(
    ([ic, label]) =>
      `<li><span class="ic"><i data-lucide="${ic}"></i></span><span class="tx">${label}</span></li>`,
  ).join("");

  $("#trustList").innerHTML = TRUST.map(
    ([ic, t, s]) =>
      `<li><span class="ic"><i data-lucide="${ic}"></i></span><span><b>${t}</b><small>${s}</small></span></li>`,
  ).join("");

  $("#reasonList").innerHTML = REASONS.map(
    ([t, s]) =>
      `<li><span class="ic"><i data-lucide="check"></i></span><span><b>${t}</b><small>${s}</small></span></li>`,
  ).join("");

  $("#processList").innerHTML = PROCESS.map(
    ([n, t, s]) =>
      `<li><span class="ic"><i data-lucide="package"></i></span><p class="num">${n}</p><p class="t">${t}</p><p class="s">${s}</p></li>`,
  ).join("");

  $("#reviewList").innerHTML = REVIEWS.map(
    ([text, name, place]) => `
      <figure class="review">
        <blockquote>“${text}”</blockquote>
        <figcaption>
          <span class="av">${name.charAt(0)}</span>
          <span><b>${name}</b><small>${place}</small></span>
          <span class="stars">${'<i data-lucide="star"></i>'.repeat(5)}</span>
        </figcaption>
      </figure>`,
  ).join("");

  $("#productGrid").innerHTML = PRODUCTS.map(
    (p) => `
      <article class="product">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
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
          <button class="add-btn" data-add="${p.id}" aria-label="Add ${esc(p.name)} to order">
            <i data-lucide="shopping-cart"></i>
          </button>
        </div>
      </article>`,
  ).join("");

  $("#footerProducts").innerHTML = PRODUCTS.map(
    (p) => `<li><a href="#products">${p.name} — ${p.size}</a></li>`,
  ).join("");

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
  $("[data-phone]").textContent = PHONE_DISPLAY;
  $("[data-fssai]").textContent = FSSAI;
  $("#mapsLink").href = SOCIALS.maps;
  $("#year").textContent = new Date().getFullYear();
  $$("[data-wa-link]").forEach((a) => (a.href = waLink));
  icons();
}

/* ---------- cart ---------- */
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
              <img src="${l.image}" alt="${esc(l.name)}" width="40" height="40" loading="lazy" />
              <span style="min-width:0">
                <b>${l.name}</b><small>${l.size}</small>
              </span>
            </span>
            <span class="stepper" data-cart-stepper="${l.id}">
              <button type="button" aria-label="Decrease quantity" data-cart-step="-1"><i data-lucide="minus"></i></button>
              <span class="val">${l.qty}</span>
              <button type="button" aria-label="Increase quantity" data-cart-step="1"><i data-lucide="plus"></i></button>
            </span>
            <span class="lt">${formatINR(l.total)}</span>
            <button type="button" class="rm" data-remove="${l.id}" aria-label="Remove ${esc(l.name)}">
              <i data-lucide="trash-2"></i>
            </button>
          </div>`,
          )
          .join("")}
        <dl class="totals">
          <div><dt>Subtotal</dt><dd>${formatINR(subtotal)}</dd></div>
          <div><dt>Delivery</dt><dd class="free">Free</dd></div>
          <div class="grand"><dt>Total</dt><dd>${formatINR(subtotal)}</dd></div>
        </dl>
      </div>`;
  }
  renderBadge();
  icons();
  return { lines, subtotal };
}

/* ---------- modal ---------- */
const modal = $("#orderModal");
const successModal = $("#successModal");

function openModal() {
  renderCart();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
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
  document.body.style.overflow = "";
}

function buildOrderPayload(formData, lines, total) {
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
    total,
    status: "New",
    source: "Website",
  };
}

async function persistOrder(order) {
  if (!GOOGLE_SHEET_WEB_APP_URL) return;

  try {
    await fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(order),
    });
  } catch (error) {
    console.error("Order logging failed", error);
  }
}

/* ---------- events ---------- */
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

  const lines = PRODUCTS.filter((p) => (cart[p.id] ?? 0) > 0).map((p) => ({
    ...p,
    qty: cart[p.id],
    total: cart[p.id] * p.price,
  }));
  const subtotal = lines.reduce((s, l) => s + l.total, 0);

  if (!lines.length) return fail("Please add at least one product.");
  if (!f.name.trim()) return fail("Please enter your full name.");
  if (!/^[0-9+\s-]{10,15}$/.test(f.phone.trim())) return fail("Please enter a valid WhatsApp number.");
  if (!f.address.trim() || !f.city.trim() || !f.pincode.trim())
    return fail("Please complete your delivery address.");
  err.hidden = true;

  const order = buildOrderPayload(f, lines, subtotal);

  const message = [
    "*New Order — Nandhika Virgin Coconut Oil*",
    "",
    ...lines.map((l) => `• ${l.name} (${l.size}) × ${l.qty} — ${formatINR(l.total)}`),
    "",
    `Subtotal: ${formatINR(subtotal)}`,
    "Delivery: Free",
    `*Total: ${formatINR(subtotal)}*`,
    "",
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Address: ${f.address}, ${f.city} — ${f.pincode}`,
    f.note ? `Note: ${f.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  submitBtn.disabled = true;
  const originalLabel = submitBtn.textContent;
  submitBtn.textContent = "Opening WhatsApp...";

  const whatsappWindow = window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");

  if (!whatsappWindow) {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
    return fail("WhatsApp could not be opened. Please allow popups and try again.");
  }

  closeModal();
  resetOrderForm();
  showSuccessModal();
  submitBtn.disabled = false;
  submitBtn.textContent = originalLabel;
  await persistOrder(order);
});

renderStatic();
renderBadge();
