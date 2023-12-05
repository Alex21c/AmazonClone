Abhishek Kumar

Techstack used 
		HTML5, CSS3, FontawesomeIcons, Google Fonts

Important tags used
  1. focus-within
		form:focus-within{
      // to change form border color whenever form is in focus
    }
  2. sticky position  
    header{
      position:sticky:
      z-index:999;
    }
  3. grid layout provides flexibilty  
    grid-layout: for header when screen-max-width reaches 860px, before that flex was used
  4. using link rel=icon to import favicon      
    <link rel="icon" href="favicon.svg">
  5. 404 page 
    404.html
  6. Redirect to homepage after 2 seconds of page load
   <meta http-equiv="refresh" content="2;url=/AmazonClone/homepage/index.html">
  7. taking fresh offline Snapshot of dynamics website then start working on it
  8. let right = li.getBoundingClientRect().right;
      window.innerWidth
  9. animation keyframes can be used to create carousel

      main div#wrapperMainContent{
        background-repeat: no-repeat;
        background-size: contain;
        animation-name: updateBackgroundImage;
        animation-duration: var(--homepageCarouselSpeed);
        animation-iteration-count: infinite;
        animation-timing-function: step-end;    
        background-image: url(Images/heroSection/kitchenAndOutdoor.jpg);
      }  
      @keyframes updateBackgroundImage {
        0% {  
          background-image: url(Images/heroSection/kitchenAndOutdoor.jpg);
        }
        9%{  
          background-image: url(Images/heroSection/tShirtsAndPolos.jpg);
        }
        ...
        90%{  
          background-image: url(Images/heroSection/fitness.jpg);
        }
        100% {  
          background-image: url(Images/heroSection/kitchenAndOutdoor.jpg);
        }    
    }
  10. for transition from one image to another this animation timing function works better this carousel
    animation-timing-function: step-end;      

My Learning 
  1. there is :focus-within property which get triggers whenver user is typing something on the input field 
  2. using position:sticky & z-index css rule i can make the page header section appear on top of webpage even when scrolling
  3. Grid layout can be used to position multiples items in random order as desired, used it inside header section when the responsive design screen max-width reached to 860px, there were 6 items, and needed to be arranged in particluar order without modifying the html structure.
  4. how to link favicon to our website
  5. if i create 404.html inside root then this webpage will be accessed if any webpage is not found on our webpage
  6. using meta http-equiv="refresh" i can redirect user to homepage
  7. how useful it is to create snapshot of webpage by just downloading it offline, so that every time new dynamic content didn't affect workflow while designing webpage
  8. getBoundingClientRect() gives me the coordinates(x,y,bottom, right) of element witin the viewport, this way i get position of element within viewport, and if it outside viewport i can easily check by window.innerWidth and take measured accordingly, used this feature to handle clipping of header primary nav items.
  9. css animations can be used to design carousel
  10. step-end timing funciton,  animation stays at the initial state until the end, and then it instantly jumps to the final state. the default timing function was making some kind of blurry image transitions, keeping background of previous image over the next image, so this was fixed using step-end


Screenshot:
		of webpage you designed (display where which css is used like flexbox, grid, little bit description)

