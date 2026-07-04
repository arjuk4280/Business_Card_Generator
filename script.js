// ==============================
// Business Card Generator
// ==============================

// Form Fields

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const photoInput = document.getElementById("photo");

// Buttons

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Card Fields

const cardName = document.getElementById("cardName");
const cardJob = document.getElementById("cardJob");
const cardPhone = document.getElementById("cardPhone");
const cardEmail = document.getElementById("cardEmail");
const cardPhoto = document.getElementById("cardPhoto");

// ==============================
// Generate Card
// ==============================

generateBtn.addEventListener("click", function () {

    cardName.innerText = nameInput.value || "Your Name";

    cardJob.innerText = jobInput.value || "Job Title";

    cardPhone.innerText = phoneInput.value || "+91 9876543210";

    cardEmail.innerText = emailInput.value || "example@email.com";

    if (photoInput.files.length > 0) {

        const reader = new FileReader();

        reader.onload = function (e) {

            cardPhoto.src = e.target.result;

        };

        reader.readAsDataURL(photoInput.files[0]);

    }

});

// ==============================
// Download Card
// ==============================

downloadBtn.addEventListener("click", function () {

    html2canvas(document.getElementById("businessCard"), {

        scale: 3,

        useCORS: true,

        backgroundColor: null

    }).then(function (canvas) {

        const link = document.createElement("a");

        const fileName =
            (nameInput.value || "Business_Card")
            .replace(/\s+/g, "_");

        link.download = fileName + ".png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

});
