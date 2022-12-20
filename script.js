
window.onload = () => { 
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('nav-link');


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


$('.dropdownMenu').on('click', function(){
  if(!$( this ).hasClass('dropdown-content')){
      $('.navbar-collapse').collapse('hide');
  }
});