<?php 
$name = $_POST['screenform__field-name'];
$phone = $_POST['screenform__field-phone'];
$street = $_POST['screenform__field-street'];
$house = $_POST['screenform__field-house'];
$corpus = $_POST['screenform__field-corpus'];
$flat = $_POST['screenform__field-flat'];
$floor = $_POST['screenform__field-floor'];
$comment = $_POST['screenform__field-comment'];
$pay = $_POST['screenform__radio'];


$checkbox = $_POST['dont-call'];
$checkbox = isset($checkbox) ? "no" : "yes";



$mail_message = '
<html>
<head>
<title>Заявка на бургеры </title>
</head>

<body>

<h2>Заказ бургера </h2>
<ul>

    <li>Имя:' . $name . '</li>
    <li>Телефон:' . $phone . '</li>
    <li>Улица:' . $street . '</li>
    <li>Дом:' . $house . '</li>
    <li>Корпус:' . $corpus . '</li>
    <li>Кварита:' . $flat . '</li>
    <li>Этаж:' . $floor . '</li>
    <li>Дополнительная информация:' . $comment . '</li>
    <li>Способ оплаты:' . $pay . '</li>
    <li>Нужно ли перезванивать:' . $checkbox . '</li>
</ul>
</body>
</html>';



$headers = "From: Администратор сайта <	rw1zz@yandex.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";
               

    $mail = mail('spureful@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }


    echo json_encode($data);


?> 