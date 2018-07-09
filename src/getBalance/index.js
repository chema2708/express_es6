import { Router } from 'express';

export default ({ config, db }) => {

    let getBalance = Router();

    let Web3 = require('web3');
    let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

	// perhaps expose some API metadata at the root
	getBalance.get('/:id', (req, res) => {
        let id = req.params.id;
        try {
            web3.eth.getBalance(id).then((l) => {
                res.json({ id : id, "balance": l });
            });
        }
        catch (err) {
            res.status(500);
            res.json({error: "invalid address"});
        }
    });
    
    getBalance.get('/', (req, res) => {
        res.json({"error": "missing address id"});
	});

	return getBalance;
}
