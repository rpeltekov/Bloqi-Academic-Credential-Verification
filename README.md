## Inspiration
We're both big blockchain nerds – we wanted to explore the technical territory by building a dApp. Some of our other ideas included an accountability cryptocurrency, medical data stored on blockchain, and crypto-based health incentive programs.

Given recent drama surrounding college admissions scandals & inequities in education access, we ultimately thought the most interesting & feasible use case was in education.

## What it does
Bloqi provides secure verification of academic credentials (eg. transcripts, enrollment, certifications) for recruiters, jobseekers, and educational institutions.
For example: when Emily earns a diploma from Stanford, the university sends her the official digital document via Bloqi. When she applies to jobs, employers cross-check her résumé with her credentials on Bloqi -- with full confidence in its security. She can't lie in the future about attending UC Berkeley (the better school), and it saves her one less step in the background check process.

Increased transparency, honesty, and security improves job-searching and college admissions for all parties involved.

## How we built it
The smart contract logic and workflow was developed in Solidity (an Ethereum-specific, JS-like language); the front-end web app was built in ReactJS. Our file storage, Ethereum network handling, and user authentication are handled in Microsoft Azure Blockchain Workbench API calls.

## Challenges we ran into
One of us had never attended a hackathon before, and the other had never written a line of Javascript before TreeHacks. 

We first ran into a buggy Azure Blockchain Workbench configuration script with little documentation (con of working on a blockchain project!) We spent a majority of the day trying to circumvent it and manually get ourselves set up.

We also had trouble connecting our webapp to the Microsoft Azure Blockchain Workbench through API calls. We are both very inexperienced with API access, and the blockchain workbench required many more authentication steps because of the nature of the technology. We've both also never written fullstack applications.

## Accomplishments that we're proud of
We were successfully able to develop a smart contract in Solidity (!!), create the configuration and metadata file for it, and run the contract in our Azure application. With that, we fully deployed the blockchain application, but we wanted to make it more user-friendly and made the web-app. Additionally, a first time feat for both of us was actually connecting the web-app to the workbench with get and post API calls.

## What we learned
A better understanding of dApp architecture & the technicalities of blockchain! By trying to manually configure our app for Azure, we were forced to read through clunky documentation to understand 1) how decentralized apps normally run, 2) how ReactJS worked, and 3) how to make API calls within react to Azure services.

## What's next for Bloqi
The technology can be easily altered to fit use-cases in healthcare, HR, or business where secure verification of personal information is paramount! We see Bloqi most likely being applied in either the educational or healthcare space.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
