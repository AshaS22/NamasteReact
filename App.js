/*
    *React is the core library
    *React.createElement creates the react element
    */
   const heading = React.createElement("h1",{id:"container"}, "Namaste Everyone");

   //ReactDOM gives us access to the browser DOM
   //createRoot tell the react which is our root element in our app
   const root = ReactDOM.createRoot(document.getElementById("root"));
   
   //logs a Object
   console.log(heading);

   //whatever we pass inside our render, it gets injected inside of our root
   //If there is already some content inside root, heading overrides everything(React will override evrything thats inside root)
   root.render(heading);