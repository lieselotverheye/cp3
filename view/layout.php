<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Blackboard</title>
        <link href="css/screen.css" rel="stylesheet">
    </head>
    <body>


        <div id="container">
            <?php echo $content; ?>

        </div>

    </body>
    <!--volgorde belangrijk -->
    <script src="js/vendor/bean.min.js"></script>

    	<script id="imageTemplate" type="text/template">
    		<div class='image'>
		       <img src="{{{image_url}}}">
		      <input type="submit" value="delete" class="btn-delete"></input>
		      </div>
			</script>
			<script id="videoTemplate" type="text/template">
    		<div class='video'>
		       <video src="{{{video_url}}}">
		      <a href="#" class="btn-delete">delete</a>
		      </div>
			</script>

    <script src="js/vendor/handlebars.min.js"></script>
    <script src="js/vendor/jquery-2.1.1.min.js"></script>
    <script src="js/script.dist.js"></script>

</html>
