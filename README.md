Express & ES6 REST API Boilerplate
==================================

This is a straightforward REST APIs built with ES6 and Express.

Getting Started
---------------

```sh
# clone it
git clone https://github.com/chema2708/express_es6.git
cd express-es6-rest-api

# Install dependencies
npm install --python=python2.7

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

Please consider that you need to be connected to a rinkeby or geth network. This API is set to listen to http://localhost:8545 if you want a different blockchain source you can change it in the index files.

API Methods
------------

This API has three mothods `createWallet`, `getBalance` & `transaction`.

- createWallet: receives no params and returns an object with the information of an account created, private key and public address.
- getBalance: receives the public address param as getbalance/:id and returns tha balance in wei.
- transaction: generates a transaction between two accounts, it receives JSON parameters for address, destionation & amount in wei, and returns an object with the result of the transaction.

```
{
	address: "your private key",
	destination: "the public address of the receiver",
	amount: total amount in wei
}

```

License
-------

MIT
