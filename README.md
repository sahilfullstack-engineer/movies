### Pre-requirements for app installation
Linux based machine, Tested on MacOs Big Sur
Git cli
NodeJs version > 10, tested on v14.17.5
In case you want to maintain multiple versions, you can use `nvm`

### How to Setup and Run the application(cli)
Clone the application on your local
Go to the directory where application is cloned
Run `npm install`
Create `.env` file using `touch .env`
Get your API keys from `themoviedb.org`
Add your API key in `.env` as `REACT_APP_API_KEY=<your_API_key>`
Start the server with `npm run start`
Visit the browser `localhost:3000`, you should be able to see data rendering on the browser.

