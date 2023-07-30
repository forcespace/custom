<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="src/style/style.css" rel="stylesheet">
    <link href="src/style/page/main/style.css" rel="stylesheet">
    <link href="src/style/blocks/menu/default/style.css" rel="stylesheet">
    <link href="src/style/blocks/navigation/default/style.css" rel="stylesheet">
</head>
<body class="body">
<header class="header js-header">
    <div class="header__navigation">
        <?php
        include 'src/php/block/menu/default/template.php';
        include 'src/php/block/navigation/default/template.php';
        ?>
    </div>
</header>
<main class="main js-main-section">
    <div class="grid">
        <div class="grid__block grid__block_left js-left-block"></div>
        <div class="grid__block grid__block_right js-right-block"></div>
    </div>
</main>
<footer class="footer"></footer>
<script src="src/script/menu/main-page/script.js"></script>
<script src="src/script/navigation/default/script.js"></script>
</body>
</html>