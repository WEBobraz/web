import throttle from 'lodash/throttle';
 
class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.pageSections = document.querySelectorAll('.page-section');
    this.events();
  }
 
  // WIth Intersection Observer API
  events() {
    window.addEventListener(
      'scroll',
      throttle(() => this.runOnScroll(), 200)
    );
 
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.07,
    };
 
    let obvesrver = new IntersectionObserver(this.watching, options);
 
    this.pageSections.forEach((section) => {
      obvesrver.observe(section);
    });
  }
 
  watching(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let matchingLink = entry.target.getAttribute('data-matching-link');
        document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach((el) => el.classList.remove('is-current-link'));
        document.querySelector(matchingLink).classList.add('is-current-link');
      }
    });
  }
 
  runOnScroll() {
    if (window.scrollY > 60) {
      this.siteHeader.classList.add('site-header--dark');
    } else {
      this.siteHeader.classList.remove('site-header--dark');
    }
  }
  
}
 
export default StickyHeader;