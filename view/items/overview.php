
		<header>
			<h1>Blackboard</h1>
		</header>


			<form>
				<li><input type="text" name="loginEmail" placeholder="email"></li>
				<li><input type="text" name="loginPass" placeholder="password"></li>
				<li><input type="submit" value="login" data-control="login"></li>
			</form>

			<?php
			if(!empty($_SESSION['user'])){

			?>
			<div class="user_controls">
				<a href="#" class="control" data-control="add_project">new project</a>
				<form class=".rolloutInput">
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
