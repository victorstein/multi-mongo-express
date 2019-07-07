# Multiple-Mongo-Express

![GitHub last commit](https://img.shields.io/github/last-commit/victorstein/multi-mongo-express.svg?style=flat-square)

This is a boilerplate project to quickly create an express server that has multiple mongo connections and models that respond to such connections only.

## Coding style

![GitHub last commit](https://img.shields.io/badge/STYLE-JAVASCRIPT%20STANDARD-yellow.svg?style=for-the-badge&logo=javascript)

JavaScript Standard

## Built With

* [express](https://expressjs.com/) As the main server
* [mongoose](https://mongoosejs.com/) As the mongo DB ODM
* [JOI](https://mongoosejs.com/) As data validator
* [webpack](https://webpack.js.org/) For bundling and development purposes
* [Babel](https://webpack.js.org/) For polyfilling and ES support

## Installation

* Clone the repo
	```git clone https://github.com/victorstein/multi-mongo-express.git```

* Enter the repo directory
	```cd multi-mongo-express```

* Install the dependencies
	```npm install```

* Create a .env file with the following set up

| KEY | TYPE | DESCRIPTION | VALUE
| ------ | ------ | ------ | -------------
|NODE_ENV |string| Database host | development
|PORT  |string| Connection port | 4000
|DB_USER_1  |string| Username of first connection | user
|DB_PASSWORD_1  | string | Password of first connection | password
|DB_URI_1 | string | URI of first connection | ```@```cluster0-xxxxx.mongodb.net/```Example```?retryWrites=true&w=majority
|DB_USER_2  |string| Username of second connection | user
|DB_PASSWORD_2  |string| Password of second connectiont | password
|DB_URI_2  |string| Password of first connection | ```@```cluster0-xxxxx.mongodb.net/```Example```?retryWrites=true&w=majority

:tw-1f605: Or just look at the example env of the project :tw-1f605:

* Finally, just run ```npm run dev``` for development, or ```npm run build``` for webpack, or ```npm start``` (once built) to run production

## Contributing

Feel free to submit your PRs for review. There's currently no template for contribution. As the project grows we will look into further implementation of this.

## Authors

<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://victorstein.github.io"><img src="https://avatars3.githubusercontent.com/u/11080740?v=3" width="100px;" /><br /><sub><b>Alfonso Gomez</b></sub></a><br /><a href="#question" title="Answering Questions">💬</a> <a href="#" title="Documentation">📖</a><a href="#tool" title="Tools">🔧</a> <a href="#review" title="Reviewed Pull Requests">👀</a> <a href="#maintenance" title="Maintenance">😎</a></td></table>

## License

This project is licensed under the ISC License 