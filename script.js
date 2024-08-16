    document.addEventListener("DOMContentLoaded", function() {
        const typingText = document.getElementById("auto-typing-text");
        const text = typingText.textContent;
        typingText.textContent = ''; // Clear text content

        let index = 0;
        const speed = 100; // Typing speed in milliseconds

        function type() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    });
