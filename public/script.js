document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/testimonials')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('testimonial-container');
            container.innerHTML = '';

            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('testimonial-card');
                div.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>${item.message}</p>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error loading testimonials:', error);
        });
});
