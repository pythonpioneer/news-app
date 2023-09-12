# News App

This news app shows you the news articles of different categories, and you can also search your news article in any news category. The app will adjust automatically when you change your news category w.r.t. the search. The news articles are taken from the open-source news API.

## Getting Started

- Clone the repo

      git clone https://github.com/pythonpioneer/news-app.git

- Go to your project folder and install dependencies (make sure you have npm and node)

  ```
  cd news-app
  ```
  ```
  npm install
  ```

- After installation, To start the app

      npm start

- It will open your browser(http://localhost:3000)

## Note

The app is built on top of [Create React App](https://github.com/facebook/create-react-app), which means all features that create-react-app supports are available.

## Implementation

### News API

The app fetches the data from an external API. To understand the app, read the API doc from [here](https://newsdata.io/documentation/#latest-news).

### Components used (open source)

- react-router-dom

    The react-router-dom component is generally used to implement page routing. We are using a navigation bar to traverse routes.
  
- react-top-loading-bar

    The react-top-loading-bar component is used to display the progress of loading news articles.

- bootstrap

    Bootstrap is used to improve the user interface and implement the app quickly.
      
- @mui/material

    The material-ui is to make the website more beautiful, responsive, and easier to implement.
  
- react-infinite-scroll-component

    The react-infinite-scroll-component is to implement pagination to display multiple pages on scrolling.
  
- react-loading-skeleton

    The react-loading-skeleton is to display the skeleton loading bar unless the news articles are fetched from the API.
  
- axios

    The axios is to fetch the data from the API.

### Components used in the app (specific)

- Navbar

    Routing implemented in Navbar.js
  
- NewsBox

    API, pagination, and skeleton implemented in Newsbox.js
  
- NewsItem

    Displaying news articles in NewsItem.js
  
- SearchBar

    Search functionality implemented in SearchBar.js
  
- Spinner

    Displaying a spinner in place of a skeleton on loading more articles because we don't want to load the whole page without loading the actual articles.

- App.js

    The top loading bar and light and dark themes are implemented here.

## To make contribution

  To contribute, go to the [contributing.md file](https://github.com/pythonpioneer/news-app/blob/master/contributing.md). I will appreciate your efforts.
