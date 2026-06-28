URL Shortener

A simple URL shortener built with Node.js, Express, and MongoDB.

Features


Generate short URLs from long ones
Redirect to original URL via short link
Track visit history with timestamps


Tech Stack


Backend: Node.js, Express
Database: MongoDB, Mongoose


Getting Started

Prerequisites


Node.js installed
MongoDB running locally


Installation

bashgit clone https://github.com/RajnishMittal/url_shortner.git
cd url_shortner
npm install

Run

bashnode index.js

Server starts at http://localhost:8001

API

MethodEndpointDescriptionPOST/urlGenerate a short URLGET/url/:shortIdRedirect to original URL

Generate Short URL

POST /url

Body (x-www-form-urlencoded):

url = https://www.youtube.com

Response:

json{ "shortId": "XNjcErY0" }

Redirect

GET /url/XNjcErY0 → redirects to https://www.youtube.com
