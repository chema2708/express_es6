import { Router } from 'express';

export default ({ config, db }) => {

    let transaction = Router();

    let Web3 = require('web3');
    let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

	transaction.post('/', (req, res) => {
        let privateKey = req.body.privateKey;
        let destination = req.body.destination;
        let amount = req.body.amount;
        let account = web3.eth.accounts.privateKeyToAccount(privateKey);

        web3.eth.sendTransaction({
            from: account.address,
            to: destination,
            value: amount
        }, (error, transactionHash) => {
            if (!error) {
                res.json({hash: transactionHash});
            } else {
                res.status(500);
                res.json({error});
            }
        });


    });

	return transaction;
}
