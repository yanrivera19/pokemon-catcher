# Pokemon Catcher

An app where users can catch pokémons, change their names, add them to their pokémon list and/or remove them, and have access to more details about them. The data displayed was obtained using the [RESTful Pokémon API (PokéApi)](https://pokeapi.co/docs/v2).

### How the App Works

The App, when first loaded, displays the home page with a "Catch a Pokémon" button. When clicked, this button takes users to a page where they can see all of the pokémons that they can catch. At the top of this page, there is a button with the text "See more Pokémons" that, when clicked, displays a new list of pokémons.

When clicking on a pokémon card, users can see the pokemon's abilities. Below the abilities there is a button with the text "Catch" that, when clicked, opens a modal. This modal shows the selected pokémon's types and gives users the option to change the pokémon's name. To change the pokémon's name, the "change name" button must be clicked before clicking the "catch" button.

After a pokémon is successfully catched, the card containing it will show a checkmark indicating that it was caught, and the pokémon will be added to the user's caught pokémons list, which will be located in the home page.

On the home page, users have the capacity to see more details about their caught pokémons or release them by clicking on the pokémon card. When deciding to release a pokémon, a modal will appear so that users can confirm the decision to release the pokémon.

---

## Technologies Used

-   React
-   Redux Toolkit
-   Bootstrap
-   Axios
-   PokéApi

---

## Quick Start

1. If you wish to download and run the application locally, first clone the app onto your local machine.
2. In your console, select the cloned app and type in the command <code>npm install</code>.
3. After that command is done running, type in the command <code>npm start</code>. The app will then open in the browser on localhost:3000.
4. If you wish to open the deployed version of the application on your browser, [click here](https://pokemon-catcher-app.vercel.app/).
