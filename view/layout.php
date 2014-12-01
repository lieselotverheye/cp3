<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Todos</title>
        <link href="css/screen.css" rel="stylesheet">
    </head>
    <body>

        <div id="container">
            <?php if(!empty($_SESSION['info'])): ?><div class="alert alert-success"><?php echo $_SESSION['info'];?></div><?php endif; ?>
            <?php if(!empty($_SESSION['error'])): ?><div class="alert alert-danger"><?php echo $_SESSION['error'];?></div><?php endif; ?>

            <?php echo $content; ?>
        </div>

    </body>
    <!--volgorde belangrijk -->
    <script src="js/vendor/jquery-2.1.1.min.js"></script>
    <script src="js/script.dist.js"></script>

</html>
