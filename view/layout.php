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

			<!-- script header login -->
			<script id="notloggedin-template" type="text/template">
				<header>
					<form id="formie" method="post" action="index.php?page=home">
						<h1 class="title">Whiteboard</h1>

						<input type="text" name="loginEmail" class="loginEmail" value="<?php if(!empty($_POST['loginEmail'])){echo $_POST['loginEmail'];} ?>" placeholder="email"/>
						<input type="password" value="<?php if(!empty($_POST['loginPass'])){echo $_POST['loginPass'];} ?>" name="loginPass" class="loginPass" placeholder="password"/>
						<input class="loginbutton" type="submit" name="action" value="login"/>

						<a href="index.php?page=register" class="register">register</a>
						<span class="error"><?php if(!empty($errors['email'])){ echo $errors['email']; } ?></span>
						<span class="error errorpassword"><?php if(!empty($errors['password'])){ echo $errors['password']; } ?></span>
					</form>
				</header>
			</script>

			<script id="loggedin-template" type="text/template">

				<form id="formie" method="post" action="index.php?page=home">

				<h1 class="title">Whiteboard</h1>

					<a class="logout" href="index.php?page=logout">Logout</a>;
					<select class="selectprojects">;
					<option value="empty">My projects</option>;
					</select>;
					<p class="loggedin">logged in as <?php echo {{user}}; ?> . "</p>";

			</form>

			</script>

    <script src="js/vendor/handlebars.min.js"></script>
    <script src="js/vendor/jquery-2.1.1.min.js"></script>
    <script src="js/script.dist.js"></script>

</html>
