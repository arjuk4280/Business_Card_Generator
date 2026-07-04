// ===============================
// Business Card Generator
// ===============================

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const photoInput = document.getElementById("photo");

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const cardName = document.getElementById("cardName");
const cardJob = document.getElementById("cardJob");
const cardPhone = document.getElementById("cardPhone");
const cardEmail = document.getElementById("cardEmail");
const cardPhoto = document.getElementById("cardPhoto");

// ----------------------------
// Generate Card
// ----------------------------
generateBtn.addEventListener("click", () => {

    cardName.textContent = nameInput.value || "Your Name";
    cardJob.textContent = jobInput.value || "Job Title";
    cardPhone.textContent = phoneInput.value || "+91 9876543210";
    cardEmail.textContent = emailInput.value || "example@lenskart.com";

    if (photoInput.files.length > 0) {

        const reader = new FileReader();

        reader.onload = function (e) {
            cardPhoto.src = e.target.result;
        };

        reader.readAsDataURL(photoInput.files[0]);
    }

});

// ----------------------------
// Download PNG
// ----------------------------
downloadBtn.addEventListener("click", () => {

    html2canvas(document.querySelector("#businessCard"), {
        scale: 3,
        useCORS: true
    }).then(canvas => {

        const link = document.createElement("a");

        const filename =
            (nameInput.value || "Business_Card")
            .replace(/\s+/g, "_");

        link.download = filename + ".png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

});
