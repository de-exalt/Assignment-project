function getData() {
	fetch("https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6")
	  .then(res => {
		return res.json();
	  })
	  .then(json => {
		console.log(json.clients);
		const html = json.clients
		  .map(function(item) {
			return "<p> Name :" + item.name + "</p>";
		  })
		  .join("");
		console.log(html);
		document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
	  })
	  .catch(error => {
		console.log(error);
	  });
  }
  
  getData();