// NEW FILE: Additional animation helpers
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to messages
    const messages = document.querySelectorAll('.user, .bot');
    messages.forEach(msg => {
        msg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        msg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add typing indicator before bot responds
    const originalFormSubmit = window.formSubmit;
    window.formSubmit = async function(e) {
        e.preventDefault();
        const userMsg = input.value;
        chat.innerHTML += `<div class="user"><b>You:</b> ${userMsg}</div>`;
        input.value = '';
        scrollToBottom();
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'bot typing-indicator';
        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
        chat.appendChild(typingIndicator);
        scrollToBottom();
        
        try {
            const res = await fetch('/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg })
            });
            const data = await res.json();
            
            // Remove typing indicator
            typingIndicator.remove();
            
            // Add bot response
            chat.innerHTML += `<div class="bot"><b>Bot:</b> ${data.response}</div>`;
            scrollToBottom();
        } catch (error) {
            typingIndicator.remove();
            console.error('Error:', error);
        }
    };

    // Add click animation to send button
    const sendBtn = document.querySelector('.send-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', function() {
            this.style.transform = 'translateY(-50%) scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'translateY(-50%) scale(1)';
            }, 200);
        });
    }
});