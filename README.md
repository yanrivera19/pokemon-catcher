# Pokemon Catcher

An app where users can catch pokémons, add them to their pokémon list, and have access to more details about them. The data displayed was obtained using the [RESTful Pokémon API (PokéApi)](https://pokeapi.co/docs/v2).

### How the App Works

The App, when first loaded, displays the home page with a "Catch a Pokémon" button. When clicked, this button takes users to a page where they can see all of the pokémons that they can catch. Before deciding to catch a pokémon, users can see its abilities by clicking on the pokémon card. When deciding to catch a pokémon by clicking the catch button (which below the abilities), a modal will appear. This modal shows the selected pokémon's types and gives users the option to change the pokémon's name. After a pokémon is successfully catched, the card containing it will show a checkmark indicating that it was caught, and the pokémon will be added to the user's caught pokémons list, which can be seen in the home page.

On the home page, users have the capacity to see more details about their caught pokémons and release them by clicking on the pokémon card. When deciding to release a pokémon, a modal will appear to confirm the decision being made.

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
