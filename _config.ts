import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume({
  src: "./src",
});

site.use(jsx());
site.add([".css"]);
site.use(googleFonts({
  cssFile: "styles/fonts.css",
  placeholder: "/* google-fonts */",
  fonts: {
    accent:
      "https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap",
    text:
      "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
  }
}));

export default site;
