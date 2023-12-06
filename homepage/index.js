/***
 * For Homepage Deals & Offers Flex content scrolling 
 */
  function scrollLeftCurrentDealsOrOffer(button) {
    const container = button.parentNode;
    container.scrollLeft -= 200; // Adjust this value as needed
  }

  function scrollRightCurrentDealsOrOffer(button) {
    const container = button.parentNode;
    container.scrollLeft += 200; // Adjust this value as needed
  }