document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    // Function to validate fields in the current slide
    function validateFields() {
        const inputs = slides[currentSlide].querySelectorAll("input, select, textarea");
        for (let input of inputs) {
            if (input.hasAttribute("required") && !input.value) {
                alert("Please fill all required fields.");
                input.focus();
                return false;
            }
        }
        return true;
    }

    // Show the initial slide
    showSlide(currentSlide);

    // Handle 'Next' button clicks
    document.querySelectorAll(".nextBtn").forEach(button => {
        button.addEventListener("click", function () {
            if (validateFields()) {
                currentSlide++;
                if (currentSlide < slides.length) {
                    showSlide(currentSlide);
                }
            }
        });
    });

    // Handle 'Previous' button clicks
    document.querySelectorAll(".prevBtn").forEach(button => {
        button.addEventListener("click", function () {
            currentSlide--;
            if (currentSlide >= 0) {
                showSlide(currentSlide);
            }
        });
    });

    // Handle form submission
    document.getElementById("registrationForm").addEventListener("submit", function (e) {
        if (!validateFields()) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
});