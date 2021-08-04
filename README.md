A personal project based on the [NEM project in the General Assembly cohort](https://spiced-dimple-855.notion.site/Project-One-Reverse-Engineer-387b832c8cd04ddd96265dd960a2ae84). 

Prompt below:
## **CORE REQUIREMENTS**

You and your partner will be selecting a site you both enjoy and work together to reverse engineer it. You will NOT be replicating the site exactly, instead you will be selecting a few key features of the site and working though the logic of the features selected.

Your reverse engineered application must include the following:

- Pick out 3 key features within the site of your choosing for your MVP. (I.E. Instagram you can sign up, post pictures, Like pictures, comment on pictures)
- Think of the user flow and provide one improvment to the design/flow of the application. (I.E. Changing the color theme of Reddit to be more accessible and improve interaction animations)
- Minimum **TWO** database models with a relationship between them to support the features you selected. (I.E. Twitter may have tweets and user in a one-to-many relationship)
- Full CRUD through out your resources. (Not every resource needs every CRUD functionality, but all of CRUD must be demonstrated.)

Make sure to do all of the following with your app.

- **Express APP** Build an Express Application that renders HTML pages from EJS Templates.
- **RESTful Routes** Design your CRUD routes using the REST convention.
- **Templating** Use EJS to render objects from MongoDB in the browser as HTML templates.
- **MongoDB** Persist at least two models to a Mongo Database. Use at least one one-to-many or many-to-many relationship between models. You can choose to reference or embed your data. **At least one model needs to include full CRUD functionality.**
- **Git** 50+ commits. Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed. (Remember to ignore node_modules!)
- **Code Style** Write professional-looking code. Follow the [Airbnb Javascript Styleguide](https://github.com/airbnb/javascript) or a styleguide of your choosing.
- **Visual Design** Use Flexbox, CSS Grid, Bootstrap, Materialize, Foundation, Skeleton, or another CSS framework to make your front-end snazzy. First impressions matter!
- **Heroku** Deploy your app to Heroku **(we will cover this together)**.
- **Documentation** Write a README.md that would make an employer excited to hire you. Screenshots are encouraged.

## **PLANNING DELIVERABLES**

See the [planning deliverables](https://www.notion.so/Planning-cda17edb0b8e442dbc3fce49552eba4d) document for more information on the planning steps you should take.

- A clearly defined **Minimum Viable Product ([MVP](http://en.wikipedia.org/wiki/Minimum_viable_product)) Scope**. What can you reasonably accomplish in a week? What site are you reverse enginering? What features are you recreating?
- **Wireframes** for *every* page you plan on creating. These don't have to be pretty; just sketch what the page will include. Do not go for a exact copy of what you are deconstructing. Think about how you could possibly improve the user experience.
- **User Stories** (divided into sprints) - we recommend [Trello](https://trello.com/) for project tracking.
- **User Flow** for how the user will navigate the application.
- **Database Models and ERD** Make plans for each resource. List the attributes you'll include in your schemas and what type of data each attribute will be. Draw an [Entity Relationship Diagram](https://www.google.com/search?tbm=isch&q=database%20table%20relationships%20drawing) to illustrate the relationship(s) between models, and note whether you plan to reference or embed related data.
- A **Feasibility Check** for any bonus feature you'd like to complete.

## **BONUS IDEAS**

If you want to push yourself and learn something new, optionally consider doing some of the following with your app, but *please talk to an instructor* beforehand:

- **Front-End Data Validation** Validate data on the front-end by handling incorrect form inputs during create/update. For example, when a form is submitted, check that a field has some text in it, or that its value is a number.
- **Back-End Data Validation** Validate data on the back-end using mongoose's [built-in validations](http://mongoosejs.com/docs/validation.html#built-in-validators), or make your own custom validation.
- **More Models or Relationships** Add another model to your project or create a new relationship.
- **External API** Use an external API to integrate rich data into your app.
- **Model Methods** Level up your models by adding a method to one of your schemas. For example, a person schema with `firstName` and `lastName` can have a `fullName` method (see mongoose docs on [instance methods](http://mongoosejs.com/docs/guide.html#methods) and [static methods](http://mongoosejs.com/docs/guide.html#statics)).
- **Authentication** Enable users to store account information and signup, login, and logout.
- **Sass** Use a CSS pre-compiler to write more imperative CSS.
- **Whatever else inspires you!**