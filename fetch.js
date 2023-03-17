function insertData(id, json, name, description)
{
	if (arguments[1]['online'] == true) {
		const template_online = `
	<div class="status-header">
		<h1 class="title"><i class="status online fa fa-circle"></i> ${arguments[2]}</h1>
		<h2 class="subtitle">${arguments[3]}</h2>
	</div>

	<div class="status-list">
		<div class="label"><i class="fa fa-server"></i> Server stats</div>
		<table class="table">
			<tbody>
			<tr>
				<td>Version</td>
				<td>${arguments[1]['version']['name_clean']}</td>
			</tr>
			<tr>
				<td>Protocol</td>
				<td>${arguments[1]['version']['protocol']}</td>
			</tr>
			</tbody>
		</table>
	</div>
	<div class="status-list">
		<div class="players">
			<div class="label"><i class="fa fa-users"></i> Players online</div>
			<div class="bar">
				<progress class="progress" value="${arguments[1]['players']['online']}" max="${arguments[1]['players']['max']}"><?= $this->e($players['percentage']) ?>%</progress>
			</div>
			<div class="amount has-text-centered">${arguments[1]['players']['online']}/${arguments[1]['players']['max']}</div>
		</div>
	</div>
	`;
		document.getElementById(arguments[0]).innerHTML = template_online;
	} else {
		const template_offline = `
	<div class="status-header">
		<h1 class="title"><i class="status offline fa fa-circle"></i> ${arguments[2]}</h1>
		<h2 class="subtitle">Not available</h2>
	</div>

	<div class="status-list">
		<div class="label"><i class="fa fa-warning"></i> Server offline</div>
		<table class="table">
			<tbody>
			<tr>
				<td>Version</td>
				<td>Not available</td>
			</tr>
			<tr>
				<td>Protocol</td>
				<td>Not available</td>
			</tr>
			</tbody>
		</table>
	</div>
	`;
		document.getElementById(arguments[0]).innerHTML = template_offline;
	}
}
async function fetchData(ip)
{
	let response = await fetch('https://api.mcstatus.io/v2/status/java/' + arguments[0]);
	let data = await response.json();
	data = JSON.stringify(data);
	data = JSON.parse(data);
	return data;
}
async function fetchServers()
{
	// your server setup
	let server_id = await fetchData('mc.hypixel.net');
	insertData('server_id', server_id, "Hypixel", "My description");
}
fetchServers();