window.addEventListener("load", (event)=>{
    const lu = document.querySelector("#lastUpdated")
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyYear");
    cry.textContent = new Date().getFullYear();
}
)



window.addEventListener("load", (event)=>{
  WebFont.load({
    google: {
      families: [
         'Merriweather Sans', 'Merriweather'
      ]
    }
  });
}
)
