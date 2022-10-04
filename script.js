window.onload = () => { 
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('.nav-item:not(.dropdown):not(.dropdown-item)');


  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 300);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    console.log (anchors[i]);

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href; 
      
        transition_el.classList.add('is-active');
  
        setTimeout(() => {
          
          window.location.href = target;
          transition_el.classList.remove('is-active');
        }, 300);
        
    });
  }
  
}

//nav-toggler
const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)')
const menuToggle = document.getElementById('navbarResponsive')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})