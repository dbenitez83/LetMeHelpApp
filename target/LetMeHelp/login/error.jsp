<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Cycred Maps - Error</title>
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="css/message.css"/>
</head>
<body>
	<div id="center">
		<div id="main">
			<img id="img" src="img/error.png"/>
			<% 
				String codError = request.getParameter("codError");
				if (codError == null) {
					codError = "Error no identificado"; 
				}
				out.println("<span id='title'>"+codError+"</span>"); 
			%>
			<div id="content">
				Se ha producido un error crítico mientras utilizaba la aplicación <b>Cycred Maps</b>.<br><br><br>
				Si el problema persiste póngase en contacto con el Servicio de Atención al Cliente llamando al teléfono: 902 120 082.
			</div>
		</div>
	</div>
</body>
</html>