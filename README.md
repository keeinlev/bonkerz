# BoNKERZ

# [Try it Yourself!](https://bonkerz.herokuapp.com)

This was my first web app incorporating the MERN Stack. The premise of BoNKERZ is to give users a very free-flowing and unmoderated social platform to enjoy.

Anyone can access the page and create a post, which we call a Thread as it is subject to many changes. They may give it a title, a description, tags and an image, and then also stamp their name on the post.

The webpage was designed using React components and the @material-ui-core Library.

![PageScreenshot](/screenshots/webpage.png/)

When submitted, each post has its fields pushed to the connected MongoDB Atlas Database, where it is stored as a MongoDB document.
The sending and getting of data from the API is facilitated by the use of Redux hooks such as useDispatch, useSelector and useEffect

![DatabaseScreenshot](/screenshots/db.png/)

The Edit function can be accessed from the icon in the top right of each post. The corresponding Thread's fields will then appear in the Submit Form and will specify that the user is now editing an existing post. Submitting will then update the given post.

![EditScreenshot](/screenshots/edit.png/)
