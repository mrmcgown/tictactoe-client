# Ruby Jesus Tic-Tac-Toe

## WireFrame: 
On load

![alt text](https://i.imgur.com/HKqfsB7l.jpg?1 "On load")

Sign In Modal (similar to modal for Sign Up and other options)

![alt text](https://i.imgur.com/AKckRspl.jpg?1 "Sign in Modal (similar to modal for Sign Up and other options)")

Game play screen

![Imgur](https://i.imgur.com/yKBGFzsl.jpg)

## User Stories: 
https://trello.com/b/tz6l9C9P/tic-tac-toe

## Technologies used: 
- HTML
- CSS
- JavaScript
- jQuery
- JSON
- Github

## Planning and Problem-Solving
Tic-Tac-Toe is the first app that I have created.

The backend was already set up by General Assembly, so I mentally chunked the front end of the project into the following sections:
- HTML content
- CSS styling
- AJAX requests
- jQuery DOM interaction
- Javascript game logic
- Javascript for user interface and event handling

I began the project by completing the `game-project-scope-study`, including wireframs, user stories, and general project planning tasks. I then began implementing what I knew would be easiest section: the authorization api, events, and ui. These files, their structure, and their `requires` and `module.exports` were essentially the same as what we had practiced in class during the AJAX lessons. I ensured that these events (signing up, signing in, changing my password, and signing out) were handled properly by checking with `console.log`. 

Next, I began making my game board in HTML. I looked up how to make a grid with hidden outer borders and implemented that to resemble a typical tic-tac-toe board. I used an HTML `table` with `td` for columns and `tr` for rows. Each cell had a unique `id` that I would later use to access that element through the DOM and jQuery. When I started making my game logic for alternating moves, I used jQuery to place X's and O's in the targeted spots whenever a user would click on a cell. To ensure alteranting between X's and O's, I use a javascript function that set a boolean to `true` or `false` every time a square was clicked. Using an `if` statement, I checked the booleans value and then wrote logic to place an X or an O. I also created a `winner()` function that I ran after each click to check if there were three x's or three o's in any row, column, or diagonal. If the `winner()` function determined that a a winner either player had won, the board clicking would disable through jQuery turning off the click functionality on the board. On new game button press, jQuery would reenable the board clicking functionality.

Because the game requirements stated certain buttons and game elements must only appear during certain conditions (e.g. no sign in button should be visible after signing in successfully), I began using jQuery to hide and show elements during the appropriate times. This meant hiding the board and new game button until a successful sign in, then hiding the sign in and sign up buttons and showing the other buttons (e.g. sign out) and the board.

At this point I decided to do a little bit of styling and add Danny's picture along with the speech bubble. The speech bubble ending up being a useful mechanism to give user feedback and instruction (e.g. sign in to start, click new game, X/O won). I used jQuery to change the message in the speech bubble based on game and auth events occurring successfully.

I then turned to completing the AJAX requests for the game api. This part was challenging because I didn't have much experience with AJAX requests prior to our lesson the previous week. Adding to this confusion was that I wasn't sure how the `store` and `config` files worked to keep track of and send AJAX requests. Through trial and error, and speaking with classmates, I eventually was able to post a new game, patch games moves to that new game ID, change game states from `over: false` to `over: true`, and access old games. After setting up jQuery to show game data and html to display the data in modules, I had working buttons to access current games and finished games.

The last and perhaps most time-consuming part of the project was the CSS styling. Although I am still working on this, I went for a minimal, clean theme. This allows the user to interact with the game in straighforward fash, but also for Danny's picture and messages to stand out. 

For testing throughout the project, I used a local host set up with `grunt serve` in the terminal.


## Unsolved Problems (yet to be fixed)
I need to change my HTML and CSS to be more responsive and flexible when changing screen sizes and using mobile devices. The game currently runs fine on a cell phone or iPad, but it requires scrolling left and right on the screen to see different parts rather than just needing to scroll up or down. I also may revise some other CSS styling properties in the coming months, including the theme and image. I may add sound effects and animations as well.

I would also like to add a way of clicking on a games ID and having that game show on a tic-toe-board. This may be a little more difficult because I did not create my board dynamically, but rather hard-coded it and set it to hide or show depending on the auth state. 

For my next application, I want to make better use of git commits and feature branches. I did not spend enough time creating multiple branches and keeping track of my progress in stages. I mostly just used a single branch off of Master that I then merged and deployed.
