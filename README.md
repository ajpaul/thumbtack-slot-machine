# Thumbtack Slot Machine Challenge

This is my entry for Thumbtack's Espresso Bar Slot Machine coding challenge. My first programming teacher would always stress the importance of "K.I.S.S." or "Keep It Simple, Stupid" when writing code. Although this coding challenge is designed to show off skills, I decided to take a risk and complete this project without using any third party dependencies, resulting in vanilla everything and made from scratch components. This decision was somewhat influenced by the Angular 2 dependency nightmare I've been toying with for the last several months...but I digress. There are plenty of areas where having jQuery or Less or Jade would've made for cleaner and more concise code, where Font Awesome or Bootstrap would've made for a better look, or where Node (and some of my favorite npm packages) and a task runner could've added linting and unit testing, but for such a simple task, these dependencies (which are often large) could've bogged down this solution. 

My simple approach can also be seen with my strategy for solving the JavaScript part of the solution. I've been using NGRX/store for state management in my Angular 2 project, and that has been a battle to learn. When I was designing my solution for this, I decided to try to minimize and eventually eliminate my need for state management all together. I came up with a "dumb" solution that only remembered 3 numbers, a degree value for the current showing face of each reel, that would tell me all the information I needed. This information is forgotten at the completion of each spin. Because the spin() action is the driving force in this program, I solely used simple helper functions to drive the code, resulting in dead simple JS without any objects.

The code works like this: 

  - Each reel is a triangular prism with 3 faces. The prism and faces are built using CSS.
  - Each face is transformed/rotated on the X axis in 3D space, resulting in:
    - Face 1: rotated 0 degrees
    - Face 2: rotated 120 degrees
    - Face 3: rotated 240 degrees
    - Face 4 = Face 1, rotated to 360 degrees, or completing 1 full rotation
  - The faces are pushed/pulled on the Z axis so they line up to form a prism
  - By generating a random number between 1 and 10, say 5, and multiplying it by 120, we get 600 degrees. We can use the modulus operator (600 % 360) to figure out how much of a rotation was completed and what face is showing. Since the above mod = 240, we know face 3 is showing.
  - We compare those values for each reel to see if they are equal, and if they are, what prize was won.

That's it!

Feel free to check out the social media links on this project to learn a little more about me! 

### Design

I've been working a little with Angular Materials 2 and studying Google's Material Design spec lately. There aren't many standards or widgets available in the Angular 2 world yet (it just came out of beta), so the Materials 2 components were basically our only option (and they had such a huge following in AngularJS, we figured it'd be a safe choice). I definitely kept that in mind here, although with such a simple implementation, there's not a huge opportunity to actually implement a lot of these design standards. I also love the flat UI look, and try to incorporate that into my aesthetic. 

### Technology

* JS/HTML5/CSS3 only!

### Installation

Clone/unpack the folder and open index.html.

### Browser support

It should work everywhere. I threw in one media query for tablets in case you decide to get crazy and test on a small device.

Thanks for reading!

Sincerely,

Adam Paul



