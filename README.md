##This is a project template for LMTechub students. ##Few steps to get started

- Clone the repository in the created folder for your project using: "git clone git@github.com:promise-J/LMTechub_Javascript_Template.git ./"
- Run rm -fr .git to destroy any previous git connection with the cloned remote repo
- From the terminal in your project folder, run the command "npm install" (You should see a generated node_modules folder)
- create a new branch feature using "git branch feature" then check out to the branch
- MAKE SURE YOU DO NOT COMMIT TO THE MAIN BRANCH
- Follow the project layout in adding your HTML, CSS AND Images to the project
- To test your lint check for HTML run "npm run lint:html"
- To test your lint check for CSS run "npm run lint:css"
- To test your lint check for both HTML and CSS files (both HTML and CSS) run "npm run lint:all"
- To test your lint check for Javascript run "npm run js-lint"
- To fix your lint error/warnings for css files run "npm run fix:lint:css"
- To fix your lint error/warnings for javascript files run "npm run js-lint-fix"
- Only when your lints checks are completed, get started to git, link to your remote repository, commit changes, push changes.
- After changes have been pushed, make a pull request between the feature branch and the main branch.

Make sure to update this README.md file with the usual as in the HTML/CSS Module. Tag your instructor and supervisor.
Feel free to create a file(s) as the need arises.
Remember to add okechukwupromise638@gmail.com to review

<!DOCTYPE html>
<html>
<head>
<title>Crypto Exchange API</title>
</head>
<body>
<h1>Crypto Exchange API</h1>
<p>This API allows you to get information about cryptocurrencies, such as their prices, market capitalization, and trading volume.</p>
<p>To use the API, you will need to get an API key from the exchange.</p>
<p>Once you have an API key, you can use it to make requests to the API.</p>
<p>For example, the following request will get the price of Bitcoin:</p>
<pre>
https://api.exchange.com/v1/prices/BTCUSD
</pre>
<p>The response to this request will be a JSON object with the following properties:</p>
<ul>
<li>price: The current price of Bitcoin in USD</li>
<li>high: The highest price of Bitcoin in USD in the last 24 hours</li>
<li>low: The lowest price of Bitcoin in USD in the last 24 hours</li>
<li>volume: The total trading volume of Bitcoin in USD in the last 24 hours</li>
</ul>
<p>For more information about the API, please see the documentation:</p>
<p>https://docs.exchange.com/api</p>
</body>
</html>
Use code with caution. Learn more


