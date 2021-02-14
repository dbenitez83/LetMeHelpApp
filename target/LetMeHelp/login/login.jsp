<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
	<HEAD>
		<META HTTP-EQUIV='Pragma' CONTENT='no-cache'>
		<META http-equiv='Expires' content='-1'>
		<META http-equiv='Last-Modified' content='0'>
		<META http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<META name="GENERATOR" content="IBM WebSphere Studio">
		<META http-equiv="Content-Style-Type" content="text/css">
		<link rel="stylesheet" type="text/css" href="css/message.css"/>	
		<script type="text/javascript">
			function enviar(){
			    document.forms[0].usuario.value = document.forms[0].usuario.value.toUpperCase();
			    document.forms[0].j_password.value = document.forms[0].j_password.value.toUpperCase();
				document.forms[0].j_username.value = document.forms[0].usuario.value;
				document.getElementById("LOGIN").submit();
			}
		</script>
	</HEAD>
	<body>
	<form method="POST" action="j_security_check" id="LOGIN">
		<div id="center">
			<div id="main">
				<span id="title">Introduzca usuario y contraseña v1.04</span>
				<div id="content">
					<table border="0">
					<tr>
						<td><span class="txt2">USUARIO</span></td><td><input type="text" name="usuario" value=""  class="cuadro_texto" onKeyUp="document.forms[0].j_username.value=document.forms[0].j_username.value.toUpperCase();"/></td>
					</tr>
					<tr>
						<td><span class="txt2">PASSWORD&nbsp;&nbsp;</span></td><td><input type="password" id="PASSWD" name="j_password" value=""  class="cuadro_textoPass" /></td>
					</tr>
					<tr>
						<td><a id="aceptarLogueo" class="txtBoton"  name="aceptarLogueo" href="#" onClick="enviar()">ACEPTAR</a></td>
					</tr>
					</table>
				</div>
			</div>
		</div>
	
	
		<input type="hidden" id="j_username" name="j_username" value="">
	</form>
	</body>
</HTML>
