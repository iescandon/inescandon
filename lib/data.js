export const work = [
  {
    title: "Find the coordinates of any address in a flash",
    name: "Get Lat & Lng",
    slug: "get-coords",
    blurb: "A web/mobile React app that provides users with coordinates. User can search by address or name of location to get the latitude and longitude of the specific location. Styled with Tailwind CSS. Mobile responsive.",
    description: "This application is a client-side application that provides users with the coordinates of any location. The user can search by the address or name of the location in the search bar and be provided with the latitude and longitude of their search. Results are provided by Google Maps API. To aid the user, users can simply click on the latitude and longitude and have that information copied to their clipboard. Toasts are included to provide the user feedback when they have copied the coordinates or if the locations wasn’t found. Because of the nature of the targeted users, this app is designed to be very mobile responsive and fully functional on even the smallest screens.",
    tools: ["react", "tailwind", "googlemaps"],
    github: "https://github.com/iescandon/get-coords",
    live_url: "https://iescandon.github.io/get-coords/",
    image: {
      src: "/images/get-coords.webp",
      alt: "Get Lat & Lng web application screenshot",
      gif: "/gifs/get-coords.webm"
    }
  },
  {
    title: "View and rate the top taco spots in Houston, TX",
    name: "HTX Tacos",
    slug: "htx-tacos",
    blurb: "A full stack web/mobile app (MongoDB, Express, React, Node.js) that displays various taco joints in the Houston area. Users can filter restaurants by name, distance, and rating and view the restaurant location on the map. User can also rate and view individual restaurant information. Styled with Bootstrap. Mobile first design.",
    description: "This application is a full-stack application designed to find nearby taco restaurants in Houston, TX. The user can search by their address or zip code to find restaurants near them as well as filter the results by name, distance, and rating. If user allows location access, the map will automatically render in their current location. An interactive map shows the restaurants listed on the map with markers. When a marker is clicked, the window scrolls to which restaurant it is on the left hand side. When a user clicks on a restaurant, a new page is rendered with restaurant information. This page also allows for users to rate restaurants. Database of rest information was seeded by scratch and all map functionality is provided by Google Maps API. Because of the nature of the targeted users, this app is designed to be very mobile responsive and fully functional on even the smallest screens.",
    tools: ["react", "bootstrap", "googlemaps", "node", "express", "mongoose" ,"mongodb"],
    github: "https://github.com/iescandon/htx-tacos",
    live_url: "https://htx-tacos.herokuapp.com/",
    image: {
      src: "/images/htx-tacos.webp",
      alt: "HTX Tacos web application screenshot",
      gif: "/gifs/htx-tacos.webm"
    }
  },
  {
    title: "Find open mountain bike trails around you",
    name: "Are The Trails Open?",
    slug: "arethetrailsopen",
    blurb:
      "A full stack web/mobile app (MongoDB, Express, React, Node.js) that displays whether nearby biking trails are open. Data is being crowd sourced by fellow bike riders and can only be updated if located within 10 miles of the specific trailhead. Mobile first design.",
    description: "This application is a single paged full-stack application designed to find out whether popular biking trails in Texas are open. The user can search by their address, city/state, or zip code to find trails near them. If user allows location access, the map will automatically render in their current location. An interactive map shows the trails listed on the map with markers and also visually states whether or not the trail is open or not based on the color. When a marker is clicked, the name and address of the trail system will be displayed in an info window. User will also be given the opportunity to view the individual trails within the trail system by clicking a button inside the info window. If they click the button, a table will be rendered with all of the trail system data including individual trail data. The table allows for users to update trail status (open/closed) as well as the individual trail conditions. Database of trail information was seeded by scratch and all map functionality is provided by Google Maps API. Because of the nature of the targeted users, this app is designed to be very mobile responsive and fully functional on even the smallest screens.",
    tools: ["react", "bootstrap", "googlemaps", "node", "nodemailer", "express", "mongoose" ,"mongodb"],
    github: "https://github.com/iescandon/arethetrailsopen",
    live_url: "https://arethetrailsopen.herokuapp.com/",
    image: {
      src: "/images/are-the-trails-open.webp",
      alt: "Are The Trails Open? web application screenshot",
      gif: "/gifs/are-the-trails-open.webm"
    }
  },
  {
    title: "Get cocktails recipes without all the clutter",
    name: "Salud!",
    slug: "salud",
    blurb: "A full stack web app (MySQL, Express, Angular, Node.js) used to provide the user with a simple way to find a cocktail recipe. Allows user to search by name or filter by ingredients.",
    description: "This application is a full-stack application designed to provide users with a lightweight, unintrusive way to find and save cocktail recipes. The user can search by cocktail name or use the advanced search to find cocktails that include a specific spirit/ingredient or combinations of various spirits/ingredients. Cocktail recipes provide the user with ingredients, step by step instructions, and even nutrition facts provided by USDA API. Users can create a login and add specific cocktails to their favorites for quick access. Database cocktail information was seeded manually. Because of the nature of the targeted users, this app is designed to be very mobile responsive and fully functional on even the smallest screens. Application was created in collaboration with McRae Peavy and Tolu Alimi.",
    tools: ["angular", "bootstrap", "node", "express", "sequelize" ,"mysql"],
    github: "https://github.com/iescandon/Salud",
    live_url: "https://salud-cocktails.herokuapp.com",
    image: {
      src: "/images/salud.webp",
      alt: "Salud! web application screenshot",
      gif: "/gifs/salud.webm",
    }
  },
  {
    title: "Search for music recommendations by artist or song",
    name: "Ask Winston",
    slug: "ask-winston",
    blurb:
    "A web app that utilizes the fundamentals of web design (HTML, CSS, Javascript, jQuery) and web APIs to deliver music recommendations. Users can search by song/artist or artist alone OR can view top songs/artists/albums. Styled with Materialize CSS. Clean, simplistic design.",
    description: "This application is a client-side application designed to provide users with music recommendations. The user can use the search bar to search for similar artists/songs or select a button below the search bar to view top songs, artists, or albums of the month. If using the search bar, simply type in an artist/song of which you would like similar artists/songs. Results will also provide artist/song recommendations, song clips, and lyrics for those available. Application utilizes Last FM and Napster APIs for song recommendations and Lyrics OVH API for lyrics. Application was created in collaboration with Marc Arguijo and Ramon Garza.",
    tools: ["html", "css", "javascript", "jquery", "materialize", "napster", "lastfm" ,"lyricsovh"],
    github: "https://github.com/iescandon/Ask-Winston-Music-Rec-Engine",
    live_url: "https://on-your-marc-go.github.io/Ask-Winston-Music-Rec-Engine/",
    image: {
      src: "/images/ask-winston.webp",
      alt: "Ask Winston web application screenshot",
      gif: "/gifs/ask-winston.webm"
    }
  },
];
