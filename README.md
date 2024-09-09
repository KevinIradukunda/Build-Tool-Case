# Build Tool Showcase
#### Project Description
#### Build Tool Showcase is a simple web application that demonstrates the use of various build tools and package managers. The application includes a counter feature and displays a list of popular build tools using data fetched from a JSON file. It serves as an example of how to set up a project using modern web development tools and best practices, including Webpack, Babel, Sass, and others.
#### Setup Instructions
Follow these steps to set up and run the project locally:

1. **Clone the Repository:**

   ```bash
   git clone 
   cd build-tool-showcase
 

2. **Install Dependencies:**
   **Run the following command to install all necessary dependencies:**
   **This will install all required packages listed in the package.json file, including Webpack, Babel, Sass, ESLint, Jest, and other related tools.**
   ```bash
   npm install


   
3. **Run the Development Server:**
   **Start the development server using Webpack Dev Server:**
   **This will open the application in your default browser at http://localhost:8081 (or another available port if 8081 is in use). The server will automatically reload whenever you make changes to the source files.**

   ```bash
   npm start

4. **Build for Production:**
   **The production build files will be generated in the dist directory, ready for deployment.**

   ```bash
   npm run build
   
5. **Lint the Code:**
   **This will run ESLint according to the rules defined in the project's ESLint configuration.**

   ```bash
   npm run lint


6. **Run Tests:**
   **This command will run all tests defined in the project, ensuring that the functionality of the application is as expected.**

   ```bash
   npm run test
   
#### Installation Guide for Each Tool

1. **Webpack:**
   **Webpack is configured in webpack.config.js with entry points, loaders, and plugins to handle JavaScript, SCSS, and JSON files.**

   ```bash
   npm install --save-dev webpack webpack-cli webpack-dev-server

2. **Babel:**
   **Babel is configured in .babelrc with presets to specify the target JavaScript version.**

   ```bash
   npm install --save-dev @babel/core @babel/preset-env babel-loader

3. **Babel:**
   **Babel is configured in .babelrc with presets to specify the target JavaScript version.**

   ```bash
   {
  "presets": ["@babel/preset-env"]
}

4. **Sass:**
   **Sass is integrated into Webpack via loaders specified in the Webpack configuration file.**

   ```bash
   npm install --save-dev sass sass-loader css-loader style-loader

5. **ESLint:**
   **ESLint rules and configurations are set up in .eslintrc.json or .eslintrc.js.**

   ```bash
     npm install --save-dev eslint eslint-loader

6. **Jest:**
   **Jest is configured to work with Babel to allow for modern JavaScript syntax in tests. Testing scripts are defined in package.json.**

   ```bash
     npm install --save-dev jest babel-jest

7. **HtmlWebpackPlugin:**
   **HtmlWebpackPlugin simplifies the creation of HTML files to serve your webpack bundles. It automatically injects the necessary script tags into your HTML.**

   ```bash
     npm install --save-dev html-webpack-plugin

8. **Terser and CSS Minimizer:**
   **These plugins optimize your JavaScript and CSS files by minifying them, reducing the overall size of your application and improving load times.**

   ```bash
     npm install --save-dev terser-webpack-plugin css-minimizer-webpack-plugin

#### Brief Explanation of the Build Process

#### 1. Bundling with Webpack: Webpack bundles JavaScript, SCSS, and other files, optimizing them for development and production.
#### 2. Transpiling with Babel: Babel converts ES6+ JavaScript into backward-compatible versions for wider browser support.
#### 3. Styling with Sass: Sass compiles SCSS into CSS, allowing the use of advanced CSS features.
#### 4. Linting with ESLint: ESLint checks code for errors and enforces coding standards.
#### 5. Testing with Jest: Jest runs tests to validate the application's functionality.


** hostiong link: https://build-case-tools.netlify.app/ **


 




