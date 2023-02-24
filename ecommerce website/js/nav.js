const createNav = () => {
  let nav = document.querySelector('.navbar');

  nav.innerHTML = `
      <div class="nav">
          <img src="img/dark-logo.png" class="brand-logo" alt="">
          <div class="nav-items">
              <div class="search">
                  <input type="text" class="search-box" placeholder="search brand, product">
                  <button class="search-btn">search</button>
              </div>
              <a href="login.html"><img src="img/user.png" alt=""></a>
              <a href="cart.html"><img src="img/cart.png" alt=""></a>
          </div>
      </div>
      <ul class="links-container">
      <li class="link-item"><a href="login.html" target="_blank" class="link">Login</a></li>
          <li class="link-item"><a href="contact.html" target="_blank" class="link">Contactus</a></li>
          <li class="link-item"><a href="index.html" class="link">home</a></li>
          <li>
          <div class="dropdown">
            <button>Men</button>
            <div class="dropdown-content">
            <a href="mallproduct.html">All products</a>
            <a href="mshirts.html">Shirts</a>
            <a href="mpant.html">Pants</a>
            <a href="mhoodies.html">hoodies</a>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button>Wommen</button>
            <div class="dropdown-content">
            <a href="wallproduct.html">all product</a>
            <a href="wpant.html">Pants</a>
            <a href="wdress.html">Dresses</a>
            <a href="wskirts.html">Skirts</a>
            </div>
          </div>
        </li>
        <li class="link-item"><a href="kids.html" target="_blank" class="link">Kids</a></li>
      </ul>
  `;
}

createNav();