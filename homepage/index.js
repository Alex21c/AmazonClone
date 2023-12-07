/***
 * For Homepage Deals & Offers Flex content scrolling 
 */
  let scrollAmount;
  function recomputScrollAmount(){
    scrollAmount=Number(window.innerWidth/2); // i.e. scroll 50% of the windows width
  }
  document.addEventListener('DOMContentLoaded', recomputScrollAmount); 
  window.addEventListener('resize', recomputScrollAmount);

  function scrollLeftCurrentDealsOrOffer(button) {    
    const container = button.parentNode;
    container.scrollLeft -= scrollAmount;
    // console.log(`scrolling left by ${scrollAmount}`);
  }

  function scrollRightCurrentDealsOrOffer(button) { // default scroll value is 200
    const container = button.parentNode;
    container.scrollLeft += scrollAmount; 
    // console.log(`scrolling right by ${scrollAmount}`);
  }


  