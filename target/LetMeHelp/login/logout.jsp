<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
<%@ page 
language="java"
contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"
%>
<META http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<META name="GENERATOR" content="IBM WebSphere Studio">
<TITLE>Fin de Sesi&ocaute;n</TITLE>
<script>
function vuelveALogin()
{
//	document.logout.submit();
}
</script>
</HEAD>
<BODY onLoad="setTimeout('vuelveALogin()',1300);">
<form name="logout" method="post" action="ibm_security_logout">
<input type="hidden" name="logoutExitPage" size=30 VALUE="">
</form>
<table width="90%" height="90%">
<tr><td width="90%" height="90%" align="center" valign="middle" class=M0>
<br>
Desconectando <br>
<% session.invalidate(); %>
</td>
</tr>
</table>
</BODY>
</HTML>
