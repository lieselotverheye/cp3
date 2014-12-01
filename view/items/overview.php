
		<header>

			<form method="post" action="login">

				<h1 class="title">Whiteboard</h1>

				<input type="text" name="loginEmail" class="loginEmail" placeholder="email"/>
				<span class="error"><?php if(!empty($errors['loginEmail']) && (!empty($_POST['count']))){ echo $errors['loginEmail']; } ?>
				<input type="password" name="loginPass" class="loginPass" placeholder="password"/>
				<input  type="submit" value="login" class="loginknop" data-control="login"/>
				<a href="index.php?page=register" class="register">register</a>

			</form>

		</header>





			<div class="user_controls">
				<form method="post">
				<input type="submit" class="control newproject" data-control="add_project" value="new project"/>

					<input type="text" placeholder="project name"></li>
					<input type="submit" class="rolloutInput" value="submit" data-control="new_project"></li>

				<div class="containerrechts">
				<input type="submit" value="invite user" class="control" data-control="invite_user"/>
				<input type="submit" value="save" class="control" data-control="save_project"/>
				<input type="submit" value="delete"class="control" data-control="delete_project"/>
			</div>
				</form>

		</div>
			<div class="project_controls">
				<a href="#" class="control" data-control="add_image">add image</a>
				<a href="#" class="control" data-control="add_post-it">add post-it</a>
				<a href="#" class="control" data-control="add_video">add video</a>
		</div>



		<div class="indicators">
			<div class="control-bar">
				<div class="wrap">&nbsp;</div>
			</div>
		</div>
