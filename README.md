# ARRAY-CAROUSEL

## By Carlo Eusebi

<hr>

### HTML elements:
<br>

- gallery to display selected picture;
- gallery to display pictures thumbnails;
- button for _next_ picture;
- button for _previous_;

<hr>

### STEPS
<br>

**AT LOADING**
1. grab all elements from the dom (gallery, thumbnails, prev btn, next btn);
1. load all imgs sources in an array;
1. display all imgs in the thumbnails;
1. set index to display first image;
1. display first img in the array as carousel picture;
1. set first img in the thumnails as active;
1. add an event listener to the _previous_ button;
1. add an event listener to the _next_ button;

<br>

**AT _PREVIOUS_ BUTTON CLICK**
1. hide current image;
1. unset current active thumbnail;
1. check if we are in the first image;
    - **IF** we are in the first image;
        - set index to the last element;
    - **ELSE** 
        - decrement index by one;
1. show image at the current index as active;
1. set thumbnail at the current index as active;

<br>

**AT _NEXT_ BUTTON CLICK**
1. hide current image;
1. unset current active thumbnail;
1. check if we are in the last image;
    - **IF** we are in the last image;
        - set index to the first element;
    - **ELSE** 
        - increment index by one;
1. show image at the current index as active;
1. set thumbnail at the current index as active;
