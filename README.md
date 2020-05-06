# Ethereum Dapp developed by Truffle and Drizzle with React


## Truffle CLI (Available Scripts)
Once we have those installed, we only need one command to install Truffle.

```
npm install -g truffle
```

### create test blockchain with truffle develop console

```
truffle develop
```

If you use `Ganache`, Add `./truffle-config.js` to new workspace.<br />
You can see the 10 new address created in ganache dashboard.<br />
RPC SERVER [http://localhost:7545](http://localhost:7545)

### compile & migrate, contract to blockchain

```
truffle compile
truffle migrate
```

### testing the smart contract

```
truffle test
```

## React with Drizzle CLI (Available Scripts)
In the `./client`, you can run:

### runs the app in the development mode.

```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### builds the app for production to the `build` folder.

```
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.<br />
The build is minified and the filenames include the hashes.
