# Adyen Coding Challenge

**[The app can be viewed on: https://goout-920f7.firebaseapp.com/](https://goout-920f7.firebaseapp.com/)**
(be aware that rate limits on Foursquare API may still apply, if the details don't work this is probably the case. I've chosen not to implement user errors)

## Platform choice

I chose React & Redux because it is fast to setup and easy to develop. Since the application is a user-focused app, location based, I felt that this app supposed to run mostly on a mobile device.
Using react, redux a material design library and using some of the functionalities of a progressive web app, it means the user gets a good mobile experience that is known to him/her, without loosing the time you normally used to setup the framework.

## Setting things up

I chose to use react-create-app, to bootstrap react. I could do this manually, but there is no reason for a short coding session to do this.

## Why Material design?

Material Design by Google is used on most of people's smartphone. Even Apple apps sometimes use this. This means that many users most likely have seen this kind of UI already.
I also have experience using the [Material UI component library](https://www.material-ui.com). The library is not perfect when it comes to the elements supplied, however, it does a fairly well job. It contains the basic elements and works exactly how Google intended this described on its [Material IO](https://www.material.io) website.

## What I did, and what I not did

### What I did

I focused on the basic functionality of showing food places. When pressing the venue, you can see the a photo if available, some basic information and getting directions using Google Maps.

[Click here to see some sketches of the simple app concept](https://pasteboard.co/HxO0ZBy.jpg)

#### What is in there?

- A basic app bar
- Food category
- Venue list based on your location of the browser including icon (Radius of 1000 and 50 item limit )
- Venue detail (photo, price indication, likes and directions)
- Add to home screen for small web-app experience

### What I didn't do

There were some issues with the OPTION-preflight of the browser and using the Foursquare API because of lack of support. To properly fix this, and using OAuth for better interaction, we need a back-end for this. This can be made in PHP or serverless using AWS Swagger & Lambda or Google Firebase.

### What can go better?

Obviously, there is a lot to improve. If I had more time, I would implement this:

#### UX improvements

- Add error messages using the Material 'snackbar'
- Add custom location to override user's geo location
- Filter options to see more/less places in overview
- Walking distance to venue in overview
- Implement offline message using service works
- Able to share locations with colleages

#### Code improvements

- Implement serverless back-end with hidden credentials
- Write oAuth implementation (I've done this before in React, but its not a small thing to do)
- Using functional programming principles (easier to test and debug)
- Using selectors to request items from the redux-store instead of direct
- Unit testing containers
- More in-depth component testing instead of making just shallow snapshots
- Removing the API keys from github & firebase ;-) (they may never be comitted in the first place, but for this I made an exception)
- Seperate Redux-reducers and their logic in their own domain structure
- Writing the app with actual progressive enhancement principles
