# SmartTvApp
This is an SmartTv App, To see user Top Trending Movies
# Trending Movies TV App

This is a simple but functional TV app that showcases trending movies using The Movie Database (TMDb) API. It is designed to simulate navigation on a Smart TV using keyboard arrow keys and provides an intuitive interface for browsing movies.

## Features

- **Trending Movies Display**: Fetches and displays a list of trending movies from TMDb.
- **Keyboard Navigation**:
  - Use **Arrow Down** to move to the next movie.
  - Use **Arrow Up** to move to the previous movie.
  - Press **Enter** to select a movie and display its title in an alert.
- **Movie Posters and Titles**: Each movie is displayed with its poster and title for a visually engaging experience.
- **Error Handling**: Displays a fallback message if the API fails to load data.
- **Responsive Design for Large Screens**: The app is styled to mimic a Smart TV interface with focus-based navigation.

## Technology Stack

- **React.js**: For building the user interface.
- **Axios**: For fetching data from the TMDb API.
- **TMDb API**: Provides the trending movie data and poster images.

## How It Works

All functionality is contained in the `App.js` file for simplicity:
1. **API Integration**:
   - Fetches trending movies from the TMDb API using `axios`.
   - Dynamically loads movie data, including titles and poster URLs.

2. **Navigation Logic**:
   - Implements focus-based navigation using `useState` to track the selected movie index.
   - Handles keyboard events (`ArrowDown`, `ArrowUp`, `Enter`) to navigate through the list.

3. **Error Handling**:
   - Catches API errors and displays a user-friendly message.

4. **Dynamic Rendering**:
   - Iterates over the fetched movies to dynamically render a grid of movie posters and titles.
   - Highlights the currently focused movie.

## How to Run the App

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Muntasir07Isha/SmartTvApp.git
   cd SmartTvApp

2. npm install
3. npm start
4. 

   
