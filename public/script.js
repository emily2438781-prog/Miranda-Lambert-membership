// ── SessionStorage Helpers ──────────────────────────────────────
const Store = {
  get: (key) => JSON.parse(sessionStorage.getItem(key) || 'null'),
  set: (key, val) => sessionStorage.setItem(key, JSON.stringify(val)),
  clear: () => sessionStorage.clear()
};

// ── Billing ─────────────────────────────────────────────────────
function saveBilling() {
  const form = document.querySelector('form');
  if (!form.checkValidity()) { form.reportValidity(); return; }

  const data = {
    fullName: document.getElementById('full-name').value,
    email:    document.getElementById('email').value,
    phone:    document.getElementById('phone').value,
    country:  document.getElementById('country').value,
    city:     document.getElementById('city').value,
    zip:      document.getElementById('zip').value,
    address:  document.getElementById('address').value
  };

  Store.set('billingInfo', data);

  fetch('/save-billing', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .catch(() => {})
  .finally(() => window.location.href = 'tiers.html');
}

// ── Tier Selection ──────────────────────────────────────────────
function selectTier(name, price) {
  Store.set('selectedTier', { name, price });
  sessionStorage.setItem('paymentMethod', 'btc');
  window.location.href = 'payment-submit.html';
}

// ── Payment Method ──────────────────────────────────────────────
function chooseMethod(type) {
  sessionStorage.setItem('paymentMethod', type);
  window.location.href = 'payment-submit.html';
}

// ── Load Tier Summary (used on multiple pages) ──────────────────
function loadTierSummary(nameId, priceId) {
  const tier = Store.get('selectedTier');
  if (!tier) return;
  if (nameId  && document.getElementById(nameId))  document.getElementById(nameId).textContent  = tier.name;
  if (priceId && document.getElementById(priceId)) document.getElementById(priceId).textContent = '$' + tier.price.toLocaleString();
}

// ── Generate Submission ID ──────────────────────────────────────
function generateSubId() {
  return 'EC-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
}
