const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
	navToggle.addEventListener('click', () => {
		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', String(!expanded));
		// toggle visible state
		const isHidden = mainNav.getAttribute('aria-hidden') === 'false';
		mainNav.setAttribute('aria-hidden', String(isHidden ? 'true' : 'false'));
		// Also toggle class for legacy CSS display
		if (isHidden) mainNav.style.display = 'none';
		else mainNav.style.display = 'block';
	});
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

export {};
