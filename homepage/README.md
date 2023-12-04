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


My Learning 
  1. there is :focus-within property which get triggers whenver user is typing something on the input field 
  2. using position:sticky & z-index css rule i can make the page header section appear on top of webpage even when scrolling
  3. Grid layout can be used to position multiples items in random order as desired, used it inside header section when the responsive design screen max-width reached to 860px, there were 6 items, and needed to be arranged in particluar order without modifying the html structure.
  4. how to link favicon to our website
  5. if i create 404.html inside root then this webpage will be accessed if any webpage is not found on our webpage
  6. using meta http-equiv="refresh" i can redirect user to homepage
  7. how useful it is to create snapshot of webpage by just downloading it offline, so that every time new dynamic content didn't affect workflow while designing webpage
  8. this way i get position of element within viewport, and if it outside viewport i can easily check by window.innerWidth and take measured accordingly, used this feature to handle clipping of header primary nav items.


Screenshot:
		of webpage you designed (display where which css is used like flexbox, grid, little bit description)

