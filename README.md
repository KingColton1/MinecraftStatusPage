# Minecraft server status page (but in JavaScript)
A simple page to see if your minecraft server is online with some basic stats like the version and amount of players online.

[Edited template located on GitHub Pages](https://chillgrief.github.io/status)

## Requirements
- Any server for static sites

## Setup
1. Clone this repository on your webserver
2. Open index.html
3. In "STATUS SECTION" add the required number of servers:
```html
...
<div class="section"> <!-- STATUS SECTION -->
  <div id="server_id"></div> <!-- thats your server -->
</div>
...
```
4. Replace assets/minecraft-logo.svg by your logo
5. And replace assets/background.jpg by your background
6. Open fetch.js
7. Find this piece of code and add your server
```javascript
...
async function fetchServers()
{
	// your server setup
	let server_id = await fetchData('mc.hypixel.net');
	insertData('server_id', server_id, "Hypixel", "My description");
}
...
```
8. Save all changes and upload your website
9. Enjoy

## Screenshots
![dummy screenshot 1](https://raw.githubusercontent.com/DonTSmi1e/MinecraftStatusPage/main/screenshot1.png)
![dummy screenshot 2](https://raw.githubusercontent.com/DonTSmi1e/MinecraftStatusPage/main/screenshot2.png)

## Credits
### Thanks to [styxit](https://github.com/styxit/MinecraftStatusPage) for creating his original page and styling it, your template really helped me not to worry about the look of my site.
