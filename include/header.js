const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isActive = page => currentPage === page ? ' active' : '';

document.write(`
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class="bi bi-cup-hot-fill text-warning"></i> Tiki Soup</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link${isActive('index.html')}" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link${isActive('products.html')}${isActive('product-detail.html')}" href="products.html">Products</a></li>
                    <li class="nav-item"><a class="nav-link${isActive('about.html')}" href="about.html">About Us</a></li>
                    <li class="nav-item"><a class="nav-link${isActive('contact.html')}" href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
`)
