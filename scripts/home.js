
export function renderNavBarandFooter(){
    const html1 = `
        <div class="logo flex">
            <img src="images/soda_logo-removebg-preview.png" alt="Soda logo">
        </div>

        <div class="navitems flex">
            <ul class="flex">
                <li><a href="index.html" class="items">Home</a></li>
                <li><a href="#" class="items">Meet Me</a></li>
                <li><a href="#" class="items">Portfolio</a></li>
                <li><a href="shop.html" class="items">Shop</a></li>
                <li><a href="contact.html" class="items">Contact</a></li>
            </ul>
        </div>

        <div class="actionicons flex">
            <ul class="flex">
                <li><a href="" class="icons"><img src="images/person.svg" alt=""></a></li>
                <li><a href="" class="icons"><img src="images/shopping_cart.svg" alt=""></a></li>
                <li><a href="" class="icons"><img src="images/search.svg" alt=""></a></li>
            </ul>
        </div>
    `;

    const htmlMedia = `
        <div class="logo flex">
            <img src="images/soda_logo-removebg-preview.png" alt="Soda logo">
        </div>

        <div class="right-side flex">
            <div class="actionicons flex">
                <ul class="flex">
                    <li><a href="" class="icons"><img src="images/person.svg" alt=""></a></li>
                    <li><a href="" class="icons"><img src="images/shopping_cart.svg" alt=""></a></li>
                    <li><a href="" class="icons"><img src="images/search.svg" alt=""></a></li>
                </ul>
            </div>

            <div class="mobilemenu" id="ham">
                <ul>
                    <li class="hamburger"></li>
                    <li class="hamburger mid-burger"></li>
                    <li class="hamburger"></li>
                </ul>
            </div>
        </div>

        <div class="dropdown-menu">
            <ul class="flex">
                <li><a href="index.html" class="items">Home</a></li>
                <li><a href="#" class="items">Meet Me</a></li>
                <li><a href="#" class="items">Portfolio</a></li>
                <li><a href="#" class="items">Shop</a></li>
                <li><a href="contact.html" class="items">Contact</a></li>
            </ul>
        </div>
    `;
    
    const navBar = document.querySelector('.js-navbar');
    navBar.innerHTML= window.innerWidth > 1100 ? html1 : htmlMedia;

    const footer = document.querySelector('.js-footer');
    footer.innerHTML= `
        
        <div class="divider-medium"></div>
        <div class="footer-section flex">
            <div class="logo">
                <img class="footer-logo" src="images/soda_logo-removebg-preview.png" alt="">
            </div>
            <div class="footer-links flex">
                <a href="index.html" target="_blank">Home</a>
                <a href="#" target="_blank">About</a>
                <a href="#" target="_blank">Portfolio</a>
                <a href="contact.html" target="_blank">Contact</a>
            </div>
        </div>
        <div class="footer-section flex">
            <div class="footer-socials flex">
                <a href="#" class="social" target="_blank"><img class="socials" src="images/whatsapp-white-icon.svg" alt=""></a>
                <a href="#" class="social" target="_blank"><img class="socials" src="images/linkedin-app-white-icon.svg" alt=""></a>
                <a href="#" class="social" target="_blank"><img class="socials" src="images/instagram-white-icon.svg" alt=""></a>
                <a href="#" class="social" target="_blank"><img class="socials" src="images/x-social-media-white-icon.svg" alt=""></a>
            </div>
            <div class="newsletter">
                <p class="newsletter-text">Stay up-to-date with our latest offers</p>
                <div class="newsletter-form flex">
                    <input class="newsletter-email" type="email" name="newsletter-email" placeholder="Enter your email address" required />
                    <input class="newsletter-submit" type="submit" value="Subscribe">
                </div>
            </div>
        </div>
        <div class="footer-info">
            <p>© 2025 Soda. All rights reserved. Designed and Developed by Oluwaseun Ajiboye</p>
        </div>
    `;
    
}

renderNavBarandFooter();

// window.addEventListener('resize', ()=>{
//     console.log('resized');
//     renderNavBarandFooter();
// });

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
      renderNavBarandFooter();
    });
  });
  