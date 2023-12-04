/***
 * Written By: Abhishek kumar
 * Purpose: to fix header Navigation li items clipping bug, while resizing or 
 * displaying nav on screen resolutions less than 1920x1080px
 */
  document.addEventListener('DOMContentLoaded', makeSureHeaderNavigationItemIsNotPartiallyShown); 
  window.addEventListener('resize', makeSureHeaderNavigationItemIsNotPartiallyShown);

  function makeSureHeaderNavigationItemIsNotPartiallyShown(){
    let theHeaderNavMenu = document.getElementById('theHeaderNavMenu');
    let liElements = theHeaderNavMenu.querySelectorAll("li");
    // console.log(liElements);
    liElements.forEach(
      function(li) {
        let right = li.getBoundingClientRect().right;
        if(right >= window.innerWidth){
          //  console.log(li.getBoundingClientRect());
          li.style.opacity = 0;
        }else if(right-20 <= window.innerWidth){
          li.style.opacity = 1;
        }
      }
    );
  }


/***
 * Written By: Abhishek kumar
 * Purpose: to show Menu items when menu is clicked, close the menu when x button is pressed
 */
document.addEventListener('DOMContentLoaded', function () {
  // Fetchign items
    let showMenuItems = document.getElementById('showMenuItems');
    let menuAll = document.getElementById('menuAll');
    let navMenuAlternateActionButton = document.getElementById('navMenuAlternateActionButton');
    let closeMenu = document.getElementById('closeMenu');
  // Attaching event listerners
    showMenuItems.addEventListener('click', function(){          
      menuAll.classList.remove('displayNone');
    });
    navMenuAlternateActionButton.addEventListener('click', function(){          
      menuAll.classList.remove('displayNone');
    });

    closeMenu.addEventListener('click', function(){
      menuAll.classList.add('displayNone');
    });


  });
  
