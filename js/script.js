// Automatically set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
// Toggle FAQ answers open/closed
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function() {
        this.parentElement.classList.toggle('open');
    });
});
// Custom select menu (open/close functionality)
const selectMenu = document.querySelector('.select-menu');
const selectBtn = document.querySelector('.select-btn');
// Open or close the dropdown (options) when the button is clicked
selectBtn.addEventListener('click', () => {
	selectMenu.classList.toggle('open');
});
// Close the dropdown when clicking outside the select menu
document.addEventListener('click', (e) => {
	if (!selectMenu.contains(e.target)) {
		selectMenu.classList.remove('open');
	}
});
// Find the hidden input where the selected value will be stored
const hiddenInput = document.querySelector('input[name="service"]')
// Add a click event to each option (li.option)
document.querySelectorAll('.option').forEach(option => {
	option.addEventListener('click', function() {
		document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
		this.classList.add('selected');
        hiddenInput.value = this.dataset.value;
        document.querySelector('.select-btn-text').textContent = this.textContent;
        document.querySelector('.select-btn').classList.remove('placeholder');
        console.log(hiddenInput.value)
	});
});

// Function to show a custom alert (copy notification)
function showAlertCopy(message) {
	const alertEl = document.querySelector('.alert-copy');
	if (!alertEl) return; // If the alert element is not found, exit
	alertEl.classList.add('show');
	if (alertEl._hideTimeout) clearTimeout(alertEl._hideTimeout);
	alertEl._hideTimeout = setTimeout(() => {
		alertEl.classList.remove('show');
	}, 3000);
}

// Attach an event listener to the copy button
document.querySelector('.copy-email-btn').addEventListener('click', function() {
	const email = 'seddy.sedlak@gmail.com'; // Change to your actual email if needed

	// Copy the email to the user's clipboard
	navigator.clipboard.writeText(email)
		.then(() => showAlertCopy()) // Show success alert
		.catch(() => showAlertCopy('Copy failed!')); // Show error alert if copying fails
});
// hamburger menu
const toggleMenu = () => {
    document.body.classList.toggle("open");
};

// Function to show a custom alert (soon notification)
function showSoonCopy(message) {
	const alertEl = document.querySelector('.alert-soon');
	if (!alertEl) return; // If the alert element is not found, exit
	alertEl.classList.add('show');
	if (alertEl._hideTimeout) clearTimeout(alertEl._hideTimeout);
	alertEl._hideTimeout = setTimeout(() => {
		alertEl.classList.remove('show');
	}, 3000);
}
document.querySelectorAll('.portfolio-link').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		showSoonCopy();
	});
});
