# Installation guide:

- make sure you have node and npm installed on your pc
- run `npm i` in the root directory to install all dependencies

# How to run:

- after installing all the dependencies, run `npm run dev` in the root of the project. The app is bootstraped with vite, which will run the app for you. To view the app in the browser, simply paste the URL from console after running the app into the browser.

# Code structure:

- all components sit inside of `components directory` (it's a small project, so no need to implement more complex structure like atomic design for example)
- all API calling functions sit inside of `api directory`
- all custom hooks sit inside of `hooks directory`
- all custom types that are used project-wide sit in `typings directory` (for example types of responses coming from the API)

# Areas of improvement:

- with more time, the design side of the app can be done much better
- the task might have been actually finished 100% (few optional functionalities are missing)
- more unit tests could be added (side note: there is no need to test the react query functionality, we can rely on the package maintenance team to work on that and make sure a bugless version is always deployed)

# Side notes:
- the `create-react-app` package is no longer maintained and recommended by the react authoring team, so I used vite instead.