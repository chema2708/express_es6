import { Router } from 'express';

export default ({ config, db }) => {
    let createWallet = Router();

    let Web3 = require('web3');
    let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

	// perhaps expose some API metadata at the root
	createWallet.get('/', (req, res) => {
        let account = web3.eth.accounts.create(web3.utils.randomHex(32));
        let wallet = web3.eth.accounts.wallet.add(account);
        res.json({
            newAccount: 'account created',
            publicAddress: account.address,
            privateKey: account.privateKey
        });
	});

	return createWallet;
}
