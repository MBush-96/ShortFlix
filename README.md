# ShortFlix

A website for short movies.

# User Stories

1. User can signup with a email and password. After signup they are shown the login page.
2. User can login with the correct email and password, and redirected to the homepage. 
3. If user uses incorrect email or password they are given visual feedback.
4. Home page will display all short movies, as well as a nav bar for logout and profile.
5. If the user hovers over a specific movie they get the title description, and rating for that movie. They can also rate the movie.
7. If the user clicks on a movie they are redirected to that movies url, with reviews below the movie. The movie plays once the url is loaded.
8. If the user is not logged in they cannot leave a review or rate a movie.
9. User can submit a video for review to be added to the site.


# Wireframes

Homepage<br/>
<img src='https://i.imgur.com/fnp4146.png' width='400px' height='500px' />

Movie hovered over<br />
<img src='https://i.imgur.com/nbiPJm1.png' width='400px' height=400px />

Movie page <br/>
<img src='https://i.imgur.com/iKPTW9R.png' width='400px' height='500px' />

Nav <br />
<img src='https://i.imgur.com/6JGIyae.png' width='600px' height='300px' />

# ERD

<img src='https://i.imgur.com/4XFqISn.png' width='900px' height='400px' />

# Routes

Request|Route|Desc
-----|----|--
GET|/movies|Returns all movies
GET|/movies/:id/reviews| returns all reviews for movie
GET|/movies/:id| Returns movie with id
GET|/movies/tag/:id| Returns all movie with tag
PUT|/movies/:id| Update movie Info
POST|/users/signup| Create user
POST|/users/login| User login
POST|/tag| Add tag
POST|/tag/movies/:id | add tag to movie
PUT|/users/:id|Update user info
DELETE|/movies/:id|Delete movie

# MVP

* User login/create account
* User can leave review and it is displayed and changes the movie rating
* Movie is played when clicked and is the correct movie

# Stretch

* UI work
* Friends List to share videos
* Friends highly reviewed video feed ?