<!DOCTYPE html>
<html>
<head>
<title>Всплывающая форма обратной связи </title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="stylesheet" type="text/css" href="css/style.css"/>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</head>

<div id="content" style="height:800px; width:980px; margin:0 auto; border:1px solid black; padding:200px 100px; text-align:center;">
    <a href="#" id="callback">Форма обратной связи</a>
	<Br/>
</div>
<div id="feedback">
    <form id="contact_form" role="form" method="post" action="action.php">
        <h3>Напишите нам</h3>
        <input type="text" name="name"  placeholder="Как к вам обращаться?">
        <input type="text" name="tel"  class="required" placeholder="Контакный телефон (обязательно)">
        <input type="text" name="email" placeholder="Email">
        <input type="hidden" name="send" value="1">
        <textarea name="message" placeholder="Текст сообщения" rows="5"></textarea>
        <a href="#" id="button" class="btn button form_submit">Отправить</a>
    </form>
    <a href="#" id="feedback_close"></a>
</div>
</body>
</html>