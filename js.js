      document
            .getElementById("contactForm")
            .addEventListener("submit", function (event) {
                console.log("Submit func");
                
                event.preventDefault();
                const name = document.getElementById("name").value.trim();
                const Phone = document.getElementById("Phone").value.trim();
                const email = document.getElementById("email").value.trim();
                const message = document.getElementById("message").value.trim();
                if (name === ""||Phone === "" || email === "" || message === "") {
                showToast("Please fill in all fields.", "danger");
                return;
                }
                
                console.log("Form submitted:", { name, Phone, email, message });
                window.alert("Message sent successfully!");
                toast.message("toast message");
                // document.getElementById("contactForm").reset();
            });
            function showToast(message, type) {
            const toast = document.getElementById("formToast");
            const toastMessage = document.getElementById("toastMessage");
            toast.className = `toast text-bg-${type}`;
            toastMessage.innerText = message;
            const bootstrapToast = new bootstrap.Toast(toast, { delay: 3000 });
            bootstrapToast.show();
            }
  hbspt.forms.create({
    portalId: "48255797",
    formId: "06bb4acc-9f3a-45ca-8244-bb88b95c1279"
  });
  
            