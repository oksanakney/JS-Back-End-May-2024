# Express App Cheat Sheet

1. Initialize project -> npm init --y
2. Nodemon
    * Install nodemon -> npm i -D nodemon
    * Add start script
3. Express
    * Install express -> npm i express
    * Start initial express server
    * Add static middleware
    * Add resources to public folder (css & images)
    * Add body parser
    * Add routes module
4. Handlebars 
    * Install express-handlebars
    * Config handlebars with express
    * Add views folder with resouces
    * Add home view
    * Add home controller
    * Add home controller to routes
    * Add main layout
    * Add partials dir
5. Database
    * Install mongoose 
    * Setup db connection
    * Add user model 
6. Register
    * Fix navigation links
    * Add register page (controller + view + route)
    * Fix register form
    * Add post register action
    * Add authService
    * Install bcrypt
    * Hash password
    * Check confirm password
    * Check if user exists
7. Login
    * Install jsonwebtoken
    * Install cookie-parser
    * Add cookie-parse middleware
    * Optionally: convert to promise based
    * Add login page
    * Fix login form
    * Add login post action
    * Add authService login method
        * Validate user
        * Validate password
        * Generate token
    * Return cookie
    * Modify register for auto login
8. Logout
9. Authentication & Authorization
    * Add auth middleware
    * Check token if guest
    * Verify token
    * Attach user to request object and res.locals
    * Use middleware in express
    * Add isAuth route guard
10. Error handling
    * Add notifications 
    * Add getErrorMessage function
    * Add register error handling
    * Add login error handling   
11. Last fixes
    * Dynamic navigation    


