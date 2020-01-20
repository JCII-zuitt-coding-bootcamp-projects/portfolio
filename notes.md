s7/mini-activity
- create a components folder inside src and create the following files for these components:
	- About
	- Contact
	- HeroFooter
	- Project

- output a simple message "hello from the <component name> component" and mount all components to our parent-component called App.

- install react-bulma-components package to project and import the Hero, Container and Heading react-bulma-components to our App.js

- Replace the value in the return method inside our App component with a Hero component. Instead of a div,
  the Hero component should wrap our component. Make it occupy the full height of the viewport, 
  use the info pre-defined color of Bulma and make it gradient. Nest a Hero body component inside hero 
  and mount all the child components inside it.

deadline : 15 mins

about and project components activity
inside the About.js file, import the Container and Heading predefined components from react-bulma-components. 
Use the Container component to wrap our JSX code. Add the class name from bulma to center the text horizontally. 
Nest 2 Heading components inside Container. For the first Heading, add the size prop and assign the value of 2. 
Nest an h1 element inside the heading with a class name heading-text. h1 element should display "Web Development is our passion". 
For the second Heading component, add the subtitle and size prop. The size prop should have a value of 6. 
It should display "we are a multidisciplanary dev team, specializing in mobile product design, web development, branding and illustration."

Apply the same approach for the Project component. h1 should display "Projects".

Class name heading-text should assign Montserrat as its font-family value

stretch goal : Inisde Contact.js, import Container and Columns from react-bulma-components. 
Use Container to wrap our code and assign the class name that will center the text horizontally. 
Create a row by calling the Columns component and nest 2 equal columns inside it. 
first half should display the text left and th other should display the text right

Deadline : 20 mins

s8 - google map mini activity
go to google maps and select a pin. get the iframe element and place it inside the right Heading component in Contact.js. 
Add an id to the iframe with the value gmap. when targeted via css, gmap should occupy the 100% width and height of its parent container

deadline : 10 mins


s8 - conditional rendering
in App, create a hook called whichComponentToShow with a setter method called setComponentToShow. 
give it an initial value of a string with the text about. create a control structure wherein if the value of whichComponentToShow is 
equal to the string about, it will return a hero component. inside the hero component, nest the Hero.Body and HeroFooter component. 
nest the about component inside Hero.Body.

else if the value of whichComponentToShow is equal to contact, return a Hero with Hero.body and HeroFooter 
but with the Contact component nested inside Hero.Body

else if the value of whichComponentToShow is equal to projects, return a Hero with Hero.body and HeroFooter 
but with the Project component nested inside Hero.Body

else return null

deadline : 30 mins
