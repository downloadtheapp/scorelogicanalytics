document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');

    function openMenu() {
        if(mobileMenu) mobileMenu.classList.add('is-open');
        if(overlay) overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        if(mobileMenu) mobileMenu.classList.remove('is-open');
        if(overlay) overlay.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    if(menuToggle) menuToggle.addEventListener('click', openMenu);
    if(menuClose) menuClose.addEventListener('click', closeMenu);
    if(overlay) overlay.addEventListener('click', closeMenu);

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%2384a98c"/><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="60" font-family="Georgia" font-weight="bold" fill="white">S</text></svg>';
    document.head.appendChild(favicon);

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'ScoreLogic Analytics - Smarter Sports Decisions');
    document.head.appendChild(ogTitle);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://via.placeholder.com/1200x630.png?text=ScoreLogic+Analytics');
    document.head.appendChild(ogImage);
});
