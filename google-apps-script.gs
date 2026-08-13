const SHEET_NAME = "Orders";
const EMAIL_RECIPIENT = "nandhikaofficial@gmail.com";
const EMAIL_SUBJECT_PREFIX = "New Nandhika Order";

function doPost(e) {
  try {
    const order = JSON.parse(e.postData.contents || "{}");
    const sheet = getOrCreateSheet_();
    appendOrderRow_(sheet, order);
    sendOrderEmail_(order);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error) });
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Order ID",
      "Created At",
      "Customer Name",
      "Phone",
      "Address",
      "City / District",
      "Pincode",
      "Items",
      "Total",
      "Note",
      "Status",
      "Source",
    ]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function appendOrderRow_(sheet, order) {
  const items = (order.items || [])
    .map((item) => `${item.name} (${item.size || ""}) x ${item.qty} @ ${item.price} = ${item.total}`)
    .join(" | ");

  sheet.appendRow([
    order.orderId || "",
    order.createdAt || new Date().toISOString(),
    order.customerName || "",
    order.phone || "",
    order.address || "",
    order.city || "",
    order.pincode || "",
    items,
    order.total || 0,
    order.note || "",
    order.status || "New",
    order.source || "Website",
  ]);
}

function sendOrderEmail_(order) {
  const items = (order.items || [])
    .map((item) => `- ${item.name} (${item.size || ""}) x ${item.qty}: ${formatCurrency_(item.total)}`)
    .join("\n");

  const lines = [
    `${EMAIL_SUBJECT_PREFIX} - ${order.orderId || "Untracked"}`,
    "",
    `Customer: ${order.customerName || ""}`,
    `Phone: ${order.phone || ""}`,
    `Address: ${order.address || ""}`,
    `City / District: ${order.city || ""}`,
    `Pincode: ${order.pincode || ""}`,
    `Created At: ${order.createdAt || new Date().toISOString()}`,
    `Source: ${order.source || "Website"}`,
    `Status: ${order.status || "New"}`,
    "",
    "Items:",
    items || "- No items received",
    "",
    `Total: ${formatCurrency_(order.total || 0)}`,
    `Note: ${order.note || "-"}`,
  ];

  MailApp.sendEmail({
    to: EMAIL_RECIPIENT,
    subject: `${EMAIL_SUBJECT_PREFIX} - ${order.customerName || "Customer"}`,
    body: lines.join("\n"),
  });
}

function formatCurrency_(amount) {
  return `Rs ${Number(amount || 0).toFixed(2)}`;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
