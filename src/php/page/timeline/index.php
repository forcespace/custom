<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="../../../style/style.css" rel="stylesheet">
</head>
<body>
<main>
    <section class="container">
        <?php
        $start = (int)strtotime('2023-07-01 00:00:00');
        $end = (int)strtotime('2023-08-01 00:00:00');
        $current = time();
        $completed = (($current - $start) / ($end - $start)) * 100;
        ?>

        <div class="stay">
            <div class="stay__wrapper container">
                <div class="stay__content">
                    <div class="stay__time-line">
                        <div class="time-line">
                            <span class="time-line__line time-line__line_month">Прогресс</span>
                            <div class="time-line__wrapper">
                                <span class="time-line__line time-line__line_all-progress"></span>
                                <span class="time-line__line time-line__line_this-progress" style="width: <?= $completed ?>%"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</main>
</body>
</html>