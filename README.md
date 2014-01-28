# 9 Client Server Scoping 
 
##Learning Competencies 

##Summary 

 ## Overview

Each HTTP Request goes through the following steps:
1. Open a connection to a web server.
2. Request a document.
3. Wait for the server to transmit the HTML/JSON/XML/etc. document.
4. After it has received the document, close the connection.
5. Interpret the document.
6. Load and apply external resources(CSS, JS, etc) specified by the document.

Because JavaScript isn't run until the entire document has been sent back to the
browser, it may need to look for data in the document itself.

There are only a few places that data can live in:

1. A tag or attribute on the document.
2. The URL used to request the document.
3. In a `script` tag, often used to set a global variable.
4. A cookie

This challenge will allow you to demonstrate your ability to place and load data
from DOM elements, URLs, and script tags. Optionally, you may show off your
skill with cookies.

### Core
Download this
[skeleton](http://s3.amazonaws.com/dbc_socrates/challenges/client-server-scoping.zip).
Modify the routes, views, and javascript to provide data from the server to the
client immediately on page load.

#### Objectives
1. Modify the index page so the buttons update the heading with the data
   provided in the buttons data-heading attribute.
2. Modify the skills page so the button updates the heading with the
   skill in the URL.
3. Modify the meals page so the button updates the heading with a random meal
   from the meals instance variable.

#### You Will Know You Are Done When:
1. Your code reads data from a URL in Javascript.
2. Your code pulls data from an elements data attribute.
3. Your code uses a global javascript object provided by the server without
   requiring an ajax request.


### Stretch OPTIONAL
Cookies are a way to persist data across multiple requests. Provide the user
with a way they can set a favorite color, then allow them to press a button on
any page to change the background to their favorite color.


#### Objectives

1. Create a form which allows a user to set their favorite color. Store it in
   a cookie.
2. Add a button to all the other pages of the application that changes the page
   background to the user provided favorite color by reading the cookie via
   javascript.

Hint: When you set a cookie on the server, you need to [tell it which domains
may access the
cookie](http://stackoverflow.com/questions/5078091/sinatra-response-set-cookie-doesnt-work)
or chrome prevents you from reading it with javascript. Make sure you set the
domain to an empty string (`""`)!

Cookies are also restricted to the path they were set on unless you provide a
path when you set the cookie.

#### You Will Know You Are Done When:
1. You can read a cookie with javascript on any page of the website.
2. You can set a cookie with ruby.
 

##Releases
###Release 0 

##Optimize Your Learning 

##Resources