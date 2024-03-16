# namaste-react

# without create-react-app
  - npm init -> Then fill details -> Completing this will createa package.json

# Parcel
- parceljs.org
- Dev build
- Local Server
- File watching algorithm - written in c++
- HMR - Hot Module Replacement
- Catching - It will create parcel-cache so build time will be less from second save
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differencial Bundling - App/Webside can be opened in every browser - support older browsers too.
- Disgnostic
- Error handling - Beautiful error display view
- HTTPs
- Tree Shaking - Remove unused code on that particluar page while we are on that page
- Different build for dev and prod


To create a production ready App, Now do npx parcel build index.html, here we will get an error like
"main": "App.js",
  >   |           ^^^^^^^^ Did you mean "App.html"?

Now remove main: "App.js" from package.json and run same command. It will generate a dist folder and will put dev code to dist. Now, it will compress all files to 3 files. They are index.html, .js and .css files.

# BrowsersList
- browserslist.dev

-> npx means executing an NPM package
-> npm run start or npm start
-> npm run build will not work with npm build

# React
-> React elements are equivalent to DOM elements
-> JSX is not html inside javascript, its an HTML like syntax or XML like syntax
-> JSX -> Babel transpiles -> React.createElement -> JS object -> HTML -> Render in DOM

- Component composition -> Composing two components into one -> Parent and child component

- Config deriven UI - ALl the UI is driven by config(data is config)
   - Carousal can be different for diff states, if no carousal we wont show in UI

Two Types of export and import
# Named Import
- export const abc = () => 123 -> import with {}

# Default Import
- const abc = () => 123
  export default abc;  -> import without {}
