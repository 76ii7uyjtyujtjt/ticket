document.addEventListener("DOMContentLoaded", () => {
  const ticketForm = document.getElementById("ticket-form");
  const gelangPreviewSection = document.getElementById("gelang-preview");
  const barcodeContainer = document.getElementById("barcode-container");
  const barcodeNumber = document.getElementById("barcode-number");
  const previewName = document.getElementById("preview-name");
  const previewType = document.getElementById("preview-type");

  // Fungsi untuk membuat barcode garis-garis
  const generateBarcode = () => {
    barcodeContainer.innerHTML = ""; // Hapus barcode lama
    let code = "";
    for (let i = 0; i < 12; i++) {
      // Buat 12 digit angka acak
      code += Math.floor(Math.random() * 10);
    }

    // Membuat garis-garis barcode
    for (let i = 0; i < 80; i++) {
      // Jumlah garis untuk kesan padat
      const bar = document.createElement("div");
      bar.classList.add("barcode-bar");
      // Menentukan ketebalan garis secara acak
      const randomWidth = Math.random() < 0.5 ? "2px" : "3px";
      bar.style.width = randomWidth;
      barcodeContainer.appendChild(bar);
    }

    barcodeNumber.textContent = code; // Tampilkan angka di bawah barcode
  };

  ticketForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const ticketTypeSelect = document.getElementById("ticket_type");
    const ticketTypeName = ticketTypeSelect.options[ticketTypeSelect.selectedIndex].text;
    const paymentProofFile = document.getElementById("payment_proof").files[0];

    if (!name || !paymentProofFile) {
      alert("Harap lengkapi semua data!");
      return;
    }

    // Tampilkan nama dan tipe tiket
    previewName.textContent = name;
    previewType.textContent = ticketTypeName;

    // Tampilkan preview dan generate barcode
    gelangPreviewSection.style.display = "block";
    generateBarcode();

    ticketForm.reset();

    alert("🎉 Pemesanan berhasil! Pembayaran sedang diverifikasi. Tiket gelang Anda akan muncul.");

    gelangPreviewSection.scrollIntoView({ behavior: "smooth" });
  });
});
