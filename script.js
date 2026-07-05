// =======================================
// Lenskart Business Card Generator
// =======================================

// ---------- INPUTS ----------

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const photoInput = document.getElementById("photo");

// ---------- BUTTONS ----------

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

// ---------- CARD ELEMENTS ----------

const cardName = document.getElementById("cardName");
const cardJob = document.getElementById("cardJob");
const cardPhone = document.getElementById("cardPhone");
const cardEmail = document.getElementById("cardEmail");
const cardPhoto = document.getElementById("cardPhoto");

// =======================================
// GENERATE CARD
// =======================================

generateBtn.addEventListener("click", function () {

    // Name

    if (nameInput.value.trim() === "") {
        cardName.innerHTML = "Your Name";
    } else {
        cardName.innerHTML = nameInput.value;
    }

    // Job

    if (jobInput.value.trim() === "") {
        cardJob.innerHTML = "Job Title";
    } else {
        cardJob.innerHTML = jobInput.value;
    }

    // Phone

    if (phoneInput.value.trim() === "") {
        cardPhone.innerHTML = "+91 9876543210";
    } else {
        cardPhone.innerHTML = phoneInput.value;
    }

    // Email

    if (emailInput.value.trim() === "") {
        cardEmail.innerHTML = "example@lenskart.com";
    } else {
        cardEmail.innerHTML = emailInput.value;
    }

    // Photo

    if (photoInput.files && photoInput.files[0]) {

        const reader = new FileReader();

        reader.onload = function (e) {

            cardPhoto.src = e.target.result;

        };

        reader.readAsDataURL(photoInput.files[0]);

    }

});

// =======================================
// LIVE PREVIEW
// =======================================

nameInput.addEventListener("keyup", function () {

    cardName.innerHTML =
        this.value || "Your Name";

});

jobInput.addEventListener("keyup", function () {

    cardJob.innerHTML =
        this.value || "Job Title";

});

phoneInput.addEventListener("keyup", function () {

    cardPhone.innerHTML =
        this.value || "+91 9876543210";

});

emailInput.addEventListener("keyup", function () {

    cardEmail.innerHTML =
        this.value || "example@lenskart.com";

});

photoInput.addEventListener("change", function () {

    if (this.files.length === 0) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        cardPhoto.src = e.target.result;

    };

    reader.readAsDataURL(photoInput.files[0]);

});

// =======================================
// DOWNLOAD PNG
// =======================================

downloadBtn.addEventListener("click", function () {

    const card = document.getElementById("businessCard");

    html2canvas(card, {

        scale: 4,

        useCORS: true,

        allowTaint: true,

        backgroundColor: null,

        logging: false

    }).then(function (canvas) {

        const link = document.createElement("a");

        let fileName =
            nameInput.value.trim();

        if (fileName === "") {

            fileName = "Business_Card";

        }

        fileName =
            fileName.replace(/\s+/g, "_");

        link.download =
            fileName + ".png";

        link.href =
            canvas.toDataURL("image/png", 1.0);

        link.click();

    });

});

// =======================================
// IMAGE ERROR
// =======================================

cardPhoto.onerror = function () {

    this.src =
        "https://via.placeholder.com/280x340?text=Photo";

};

// =======================================
// END
// =======================================
