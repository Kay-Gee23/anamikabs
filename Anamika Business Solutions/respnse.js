// Simple contact form alert
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm") || document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const get = name => (form.elements[name] && form.elements[name].value || "").trim();
        const name = get("name");
        const email = get("email");
        const message = get("message");

        if (!name) {
            alert("Please enter your name.");
            form.elements["name"]?.focus();
            return;
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            form.elements["email"]?.focus();
            return;
        }
        if (!message) {
            alert("Please enter a message.");
            form.elements["message"]?.focus();
            return;
        }

        alert(`Thank you ${name}! We received your message and will get back to you soon.`);
        form.reset();
    });
});
