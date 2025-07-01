document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function() {
        this.parentElement.classList.toggle('open');
    });
});
