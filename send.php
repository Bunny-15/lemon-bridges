<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    
    $to = "info@lemon-bridges.com"; 
    
    // Очищення та зчитування даних з форми
    $name    = trim(strip_tags($_POST['name'] ?? ''));
    $company = trim(strip_tags($_POST['company'] ?? ''));
    $email   = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $phone   = trim(strip_tags($_POST['phone'] ?? ''));
    $kW      = trim(strip_tags($_POST['kW'] ?? ''));
    $kWt     = trim(strip_tags($_POST['kWt'] ?? ''));
    $message = trim(strip_tags($_POST['message'] ?? 'Не вказано'));

    // Перевірка ОБОВ'ЯЗКОВИХ полів (включаючи назву компанії)
    if (empty($name) || empty($company) || !$email || empty($phone) || empty($kW) || empty($kWt)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Будь ласка, заповніть усі обов'язкові поля."]);
        exit;
    }

    // Тема листа з назвою компанії
    $subject = "Заявка на розрахунок енергостійкості: $company ($name)";
    
    // Формування структурованого тексту листа
    $email_content  = "НОВА ЗАЯВКА З САЙТУ\n";
    $email_content .= "========================================\n\n";
    $email_content .= "Ім'я клієнта: $name\n";
    $email_content .= "Компанія / Завод: $company\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Телефон: $phone\n\n";
    $email_content .= "ТЕХНІЧНІ ДАНІ ПІДПРИЄМСТВА:\n";
    $email_content .= "- Дозволена потужність: $kW кВт\n";
    $email_content .= "- Споживання (пікове): $kWt кВт\n\n";
    $email_content .= "Додаткове повідомлення:\n$message\n";
    $email_content .= "========================================\n";

    // Заголовки листа
    $host = $_SERVER['HTTP_HOST'] ?? 'site.com';
    $headers = "From: no-reply@" . $host . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Відправка
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Дякуємо! Вашу заявку прийнято."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Помилка сервера. Не вдалося відправити лист."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Доступ заборонено."]);
}
?>