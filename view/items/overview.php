
		<header>

			<form method="post">

				<input type="text" name="loginEmail" placeholder="email">
				<input type="password" name="loginPass" placeholder="password">
				<input type="submit" value="login" data-control="login">
								<a href="index.php?page=register" class="register">register</a>

			</form>

		</header>




			<?php
			if(!empty($_SESSION['user'])){

			?>
			<div class="user_controls">
				<a href="#" class="control" data-control="add_project">new project</a>
				<form method="post" class=".rolloutInput">
					<input type="text" placeholder="password"></li>
					<input type="submit" value="submit" data-control="login"></li>
				</form>
				<a href="#" class="control" data-control="invite_user">invite user</a>
				<a href="#" class="control" data-control="save_project">save</a>
				<a href="#" class="control" data-control="delete_project">delete</a>

		</div>
			<div class="project_controls">
				<a href="#" class="control" data-control="add_image">add image</a>
				<a href="#" class="control" data-control="add_post-it">add post-it</a>
				<a href="#" class="control" data-control="add_video">add video</a>
		</div>


		<?php
			}
			?>

		<div class="indicators">
			<div class="control-bar">
				<div class="wrap">&nbsp;</div>
			</div>
		</div>
