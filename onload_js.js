<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		<div id="demo" style="width:200px">some text</div>
    <script>
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    x.style.width = '100px';
};
</script>
	</body>
</html>
