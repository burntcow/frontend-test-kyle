# Additional Questions

#### 1. Describe specifically any production experience you have with React?
> I have no production experience with React. I've kept up on its development and spent time learning it using side projects and such, but have yet to have a production/client app that uses it. I do however have production experience with AngularJS applications.

#### 2. Describe specifically any experience you have with NodeJS
> My experience with NodeJS is mostly confined to its use for local development, through npm, yarn, and other such tools.

#### 3. What front-end build scripts/tools/Languages do you have experience with?
> Languages: HTML, CSS, JavaScript, SVG, PHP
> Extensions: Sass (SCSS), LESS, PostCSS, Autoprefixer, Jade/Pug, Nunjucks, Mustache
> Component Library Tools: Fractal, Fabricator, and other static site generators
> Third-Party Apps/Tools: ImageOptim (and other image optimization tools), Codekit, Xenu/Integrity, Browserstack, PhantomJS, Lighthouse (and other performance tools), and many more
> Build Tools & Package Managers: Gulp, Grunt, npm, yarn, Bower, Webpack, Browserify, Composer
> Whenever something new or noteworthy comes along, I usually check it out and try it on at least a test project.

#### 4. How often do you use code from stack overflow?
> I generally avoid using code directly from StackOverflow. When I'm running into issues, I generally consult a variety of sources (Github repos, articles, peers/colleagues, demos), try to understand and synthesize what I find, then channel that understanding into a solution that is correct and appropriate in the context of my own code/project.

#### 5. What frameworks/libraries do you have production experience with? Please give as many as you have used.
> JavaScript: AngularJS, jQuery, Modernizr, Greensock/GSAP, D3, Charts.js, Ionic, Lodash, Underscore, Moment, Hammer
> CSS: Bootstrap, Foundation, Semantic UI, InuitCSS, Materialize, Compass, Bourbon/Neat/Susy, FlexboxGrid, OOCSS, SCMACSS, BEM, Normalize, UIKit

#### 6. Describe specifically the extent of your knowledge and experience with TDD?
> I have done a lot of reading on the concepts and philosophy behind TDD but haven't yet had the opportunity to try it on a large-scale project. From my experience, it seems like a great way to codify functional requirements and ensure that those requirements are always met, assuming that those requirements are properly and thoroughly translated into tests.

#### 7. How do you ensure consistent code across a team of developers?
> I think the first step is to have a good onboarding process that includes thorough discussion as well as good documentation and reference material for new members of the team. If in-house code style guides aren't available, adopting those from AirBnb or similar can be a good option. With style guides as a basis, tools like linters and editorConfig files can help enforce code standards automatically as code is written. Finally, a consistent versional control process that includes code reviews before PRs are merged can serve as a final check for consistency while also providing valuable opportunities for discussion and growth as a team.

#### 8. How do you debug problems with JavaScript code?
> Generally speaking I try to begin by narrowing in on the problem. Depending on the availability of tests or a testing suite, that can start directly in the code/tests, or using Chrome Dev Tools to isolate variables and see how the code/state is evolving as it executes. If the solution isn't readily apparent, doing a Google search (in plain language or using specific error text) usually turns up clues and solutions posted by other developers can provide a hint as to how to fix the problem in the context of my own application. 

#### 9. Have you submitted a pull request before or contributed to open source software?
> I have submitted many Pull Requests to private repositories, but have yet to contribute to open source software in a significant way (although it's something I'm hoping to do in the near future). Since my time is split between design, code, and business/consulting duties, and most of my work is on client projects, [my github](https://github.com/ksr583) is not particularly helpful in gauging my code contributions.

#### 10. Describe specifically any experience you have with Ajax or restful APIs?
> I have worked with AJAX from both a code and design/UX perspective and have helped to design, build, document, test, and implement several first-party RESTful APIs, in addition to using many third-party REST APIs. I have also begun researching and working with GraphQL on my own time for potential use in a production client project.

#### 11. Why should you avoid using jQuery?
> I care a lot about performance, accessibility, and usability, and perpetually strive to produce faster _and_ better experiences across all browser/devices, so the debate over jQuery is one with which I am quite familiar. To answer the question as simply as I can without rehashing every aspect of that debate, I would say you should avoid using jQuery in the following situations:
> 
> * If you can afford to do without it, but only if it doesn't come at the cost of fragile code and cross-browser compatibility issues. Broadly speaking this would be on websites where limited functionality is required.
> * A developer who is still learning can benefit from foregoing jQuery in favor of vanilla JavaScript in an effort to truly _understand_ what jQuery is for and what it's doing under the hood. (I also think that taking time to examine jQuery's code is a worthwhile investment)
> 
> All that being said, in "middle ground" between simple website and fully-fledged web application, when you need a good amount  functionality that jQuery does well and want to benefit from its easy-to-use APIs, well-tested browser compatibility and accessibility features, and you can load it from a popular CDN with SRI (Subresource Integrity), it's not as big of a performance issue as some make it seem, and can make developers' lives easier.
