const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const cta = document.getElementById('cta-img');
cta.src = siteContent['cta']['img-src'];

const middle = document.getElementById('middle-img');
middle.src = siteContent["main-content"]["middle-img-src"];

const links = document.querySelectorAll('a');
links[0].textContent = siteContent.nav['nav-item-1'];
links[1].textContent = siteContent.nav['nav-item-2'];
links[2].textContent = siteContent.nav['nav-item-3'];
links[3].textContent = siteContent.nav['nav-item-4'];
links[4].textContent = siteContent.nav['nav-item-5'];
links[5].textContent = siteContent.nav['nav-item-6'];

// new links

const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');

newLink1.textContent = 'Link one';
newLink2.textContent = 'Link two';

const parentElment = document.querySelector('nav');

parentElment.append(newLink1);
parentElment.prepend(newLink2);

// nav color green
const linkColor = document.querySelectorAll('a');
linkColor.forEach(element => {
  element.style.color = 'green';
})
console.log(linkColor)

const ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

const btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];

//top one
const topCon1 = document.querySelector('.top-content div:nth-of-type(1) h4');
topCon1.textContent = siteContent['main-content']['features-h4'];

const para1 = document.querySelector('.top-content div:nth-of-type(1) p');
para1.textContent = siteContent['main-content']['features-content'];

//top two
const topCon2 = document.querySelector('.top-content div:nth-of-type(2) h4');
topCon2.textContent = siteContent['main-content']['about-h4'];

const para2 = document.querySelector('.top-content div:nth-of-type(2) p');
para2.textContent = siteContent['main-content']['about-content'];

// bottom one
const bottomCon1 = document.querySelector('.bottom-content div:nth-of-type(1) h4');
bottomCon1.textContent = siteContent['main-content']['services-h4'];

const para3 = document.querySelector('.bottom-content div:nth-of-type(1) p');
para3.textContent = siteContent['main-content']['services-content'];

// bottom two
const bottomCon2 = document.querySelector('.bottom-content div:nth-of-type(2) h4');
bottomCon2.textContent = siteContent['main-content']['product-h4'];

const para4 = document.querySelector('.bottom-content div:nth-of-type(2) p');
para4.textContent = siteContent['main-content']['product-content'];

// bottom three
const bottomCon3 = document.querySelector('.bottom-content div:nth-of-type(3) h4');
bottomCon3.textContent = siteContent['main-content']['vision-h4'];

const para5 = document.querySelector('.bottom-content div:nth-of-type(3) p');
para5.textContent = siteContent['main-content']['vision-content'];

// contact
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

// address
const conPara1 = document.querySelector('.contact p:nth-of-type(1)');
conPara1.innerHTML = siteContent['contact']['address'];

// phone
const conPara2 = document.querySelector('.contact p:nth-of-type(2)');
conPara2.textContent = siteContent['contact']['phone'];

// email
const conPara3 = document.querySelector('.contact p:nth-of-type(3)');
conPara3.textContent = siteContent['contact']['email'];

// footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];