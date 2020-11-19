# github-repo-api
<a href="https://rcovery-githubapi.netlify.app/">Click me!</a>

<b>An application that consumes the GitHub API

How to use:</b>
Download the script.js and link:

```html
<script src="script.js"></script>
```
 

Create a root element with an id attribute. Specify the id value and place it in the parameter of the getParameter function along with a username:

```html
<div id="rootElementID"></div>
<script>getRepository("yourUsername", "rootElementID")</script>
```
 

In line 8 of script.js edit "dataReturn" and insert your return. For example:

```js
let dataReturn = `<a id="projectLink" href="${item.html_url}" target="_blank"><div>
<span>Name: ${item.name}</span>
<p>${item.description}</p>
</div></a>`;
```
Thx for reading!
