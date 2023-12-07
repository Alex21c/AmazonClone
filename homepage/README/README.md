# [Abhishek Kumar](https://www.linkedin.com/in/alex21c/) \| [Amazon Clone (HOMEPAGE)](https://alex21c.github.io/AmazonClone/homepage/) \| [Geekster](https://www.geekster.in/) FS-14 Batch

## Techstack used 
1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
2. [CSS3](https://en.wikipedia.org/wiki/CSS)
3. [Google Translate](https://translate.google.co.in/)
4. [Google Fonts](https://fonts.google.com/)
5. [Font Awesome Icons](https://fontawesome.com/icons)
6. [Clippy (clip-path)](https://bennettfeely.com/clippy/)

## Important tags used

  1. focus-within
````	
form:focus-within{
	// to change form border color whenever form is in focus
}
````
  2. sticky position
````
header{
	position:sticky:
	z-index:999;
}
````
  3. **grid layout** provides flexibilty  
	*grid-layout* for *header* when *screen-max-width* reaches 860px, before that **flex** was used
  4. using ***link rel=icon*** to import favicon
```` 
<link rel="icon" href="favicon.svg">
````
  5. 404 page
````
404.html
````
  6. Redirect to homepage after 2 seconds of page load
````
meta http-equiv="refresh" content="2;url=/AmazonClone/homepage/index.html"
````
  7. taking fresh offline Snapshot of dynamics website then start working on it
  8. Solution for ***Header Primary Navigation*** clipping issue while resizing window
````
let right = li.getBoundingClientRect().right;
window.innerWidth
````
  9. Animation ***keyframes*** were used for creating ***Carousel***
````
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

	up to

	90%{  
		background-image: url(Images/heroSection/fitness.jpg);
	}
	100% {  
		background-image: url(Images/heroSection/kitchenAndOutdoor.jpg);
	}    
}
````
  10. for transition from one image to another this ***step-end animation timing function** works better for the carousel
````
animation-timing-function: step-end;
````
  11. this is how to ***added three dots(ellipsis)*** for long long heading inside card
````
div.dealsOrOffers div.dealOrOffer h3{  
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
````  
  12. ***Box shadow inset*** can be used to highlight current item,
````
box-shadow: inset 0 0 0 3px #007185;
````
  13. Used [Clippy](https://bennettfeely.com/clippy/) to generate ***clippath*** for the bestSeller polygon inside recommendations (Inspired by your browsing history)
````
clip-path: polygon(100% 0%, 91% 50%, 100% 100%, 0 99%, 0% 50%, 0 0);
````
  14. website language translation feature was added using ***google translate***
````
<div id="google_translate_element"></div>
<!-- Google Translate -->
	<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
	<script type="text/javascript">
		function googleTranslateElementInit() {
			new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
		}
	</script>
````
  15. I learnt new property ***(container.scrollLeft)*** of javascript, using it i scrolled left and right the overflow content of container(flex) 
````
container.scrollLeft += 200 //to scroll Right
container.scrollLeft += 200 // to scroll left
````
  16. ***:active psedo class*** can be used to deal with touch devices like tablet and smartphones
````
div.dealsOrOffers:active button.scrollLeft,
div.dealsOrOffers:active button.scrollRight{
	opacity: .5;
}
````

## My Learnings
  1. there is `:focus-within` property which get triggers whenver user is typing something on the input field 
  2. using `position:sticky & z-index` css rule i can make the page header section appear on top of webpage even when scrolling
  3. Grid layout can be used to position multiples items in random order as desired, used it inside header section when the responsive design screen max-width reached to 860px, there were 6 items, and needed to be arranged in particluar order without modifying the html structure.
  4. how to link favicon to our website
  5. if i create `404.html` inside root then this webpage will be accessed if any webpage is not found on our webpage
  6. using `meta http-equiv="refresh"` i can redirect user to homepage
  7. how useful it is to create snapshot of webpage by just downloading it offline, so that every time new dynamic content didn't affect workflow while designing webpage
  8. `getBoundingClientRect()` gives me the `coordinates(x,y,bottom, right)` of element witin the viewport, this way i get position of element within viewport, and if it outside viewport i can easily check by `window.innerWidth` and take measured accordingly, used this feature to handle clipping of header primary nav items.
  9. css animations can be used to design carousel
  10. step-end timing funciton,  animation stays at the initial state until the end, and then it instantly jumps to the final state. the default timing function was making some kind of blurry image transitions, keeping background of previous image over the next image, so this was fixed using step-end
  11. i was working on the deals and offers card and notice the h3 heading text is occupying more than 1 lines and resulting the increase int the parent size, i want to have parent consistent size, so clip the extra h3 text and show elipsis, i found `text-overflow: elipsis;` useful; it works only when two other properties `overflow:hidden and white-space:nowrap` is set to.
  12. in card best seller books, there was collection of 10 books big image, and same image thumbnail was there below with 3 other books images, i need to highlight that thumbnail, so i found `box-shadow: inset helpful`.
  13. inside the amazon recommendations (inspired by your browsing history), there was recommendation who were best seller, and i used clippy to generate clipath for the polygon.
  14. although google has officially no long provide documentation for how to integrate the google translate with our websites, my mentor Jaiten sir, shared with me the [w3school how to use Google Translate](https://www.w3schools.com/howto/howto_google_translate.asp) link and now i added google translate to our website to transte it to difference languages.
  15. there are lots of horizontal flex in homepage having horizontal scrollbar, they were showing products and offers, and in amazon.in there are two buttons to let them scroll left and right, to achieve that functionality i found following javascript property handful, `scrollLeft`, if i add 200 to it, container inside content would move 200px right and vice versa
    `container.scrollLeft += 200`
  16. for desktop and laptops `:hover` works good, but for touch devices like smartphones and tablets, the `:active pseudo class` works good, `:active` means whenever user presses the mouse button or tap on screen

## Credits
1. [Geekster](https://www.geekster.in/)
2. [Jaiten Sahu Sir](https://www.linkedin.com/in/jaiten-sahu/) (Mentor \| Geekster Geekathon Project Module #3 \| Amazon Clone)
3. [Akhil Sharma Sir](https://www.linkedin.com/in/akhil-sh06/) (Educator \| Geekster MERN Stack Bootcamp Module #3)
4. [Ankit Singh Sir](https://www.linkedin.com/in/asingh88029/) (TA \| Booster Session \| Geekster MERN Stack Bootcamp Module #3)
