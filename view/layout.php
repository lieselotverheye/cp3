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
		       <video src="{{{video_url}}}" controls></video>
		       <input type="submit" value="delete" class="btn-delete"></input>
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
						<span class="error erroremail"></span>
						<span class="error errorpassword"></span>
					</form>
				</header>
			</script>

<script id="loggedin-template" type="text/template">
				<header>

				<form id="formie" method="post" action="index.php?page=home">

				<h1 class="title">Whiteboard</h1>

					<a class="logout" href="index.php?page=logout">Logout</a>
					<select class="selectprojects">
					<option value="empty">My projects</option>
					</select>;
					<p class="loggedin">logged in as  {{user}} </p>

			</form>
			</header>

			<div class="projectcontr">

			<div class="user_controls">
				<form method="post" action="index.php?page=addproject">
						<input type="submit" class="control newproject" data-control="add_project" value="new project"/>
						<input type="text" class="project_name" placeholder="project name"></li>
						<input type="submit" class="rolloutInput submitNewProject" value="submit" data-control="new_project"></li>
					<div class="containerrechts">
						<input type="submit" value="invite user" class="control" data-control="invite_user"/>
						<input type="submit" value="save" class="control" data-control="save_project"/>
						<input type="submit" value="delete"class="control" data-control="delete_project"/>
					</div>
				</form>

			</div>

			<div class="project_controls">
				<input type="submit" value="add image" class="control" data-control="add_image"/>
				<input type="submit" value="add post-it" class="control" data-control="add_post-it"/>
				<input type="submit" value="add video" class="control" data-control="add_video"/>

			<div class="containerrechts2">
				<input type="file" name="image" class="file" data-control=""/>
				<input type="submit" class="upload" name="upload" value="upload" class="control" data-control="upload"/>
			</div>
			</div>

			<div id="sessionmessages">

      </div>
			</div>


			</script>

    <script src="js/vendor/handlebars.min.js"></script>
    <script src="js/vendor/jquery-2.1.1.min.js"></script>
    <script src="js/script.dist.js"></script>

</html>
