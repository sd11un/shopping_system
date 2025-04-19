// Simple banner slider functionality
document.addEventListener('DOMContentLoaded', function() {
    // Banner slider
    const banners = document.querySelectorAll('.banner');
    let currentBanner = 0;
    
    function showBanner(index) {
        banners.forEach(banner => banner.classList.remove('active'));
        banners[index].classList.add('active');
    }
    
    // Auto slide every 5 seconds
    setInterval(() => {
        currentBanner = (currentBanner + 1) % banners.length;
        showBanner(currentBanner);
    }, 5000);
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });
    
    // Mobile menu toggle (would need HTML element added)
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header .container').appendChild(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('.main-nav').classList.toggle('active');
    });
});
// Load categories dropdown content
document.addEventListener('DOMContentLoaded', function() {
    fetch('categories/categories.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.categories-dropdown').innerHTML = html;
        })
        .catch(error => console.error('Error loading categories:', error));
});