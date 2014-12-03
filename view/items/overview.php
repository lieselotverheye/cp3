
		<header>

			<form method="post" action="index.php?page=home">

				<h1 class="title">Whiteboard</h1>

				<?php
				if(empty($_SESSION['user'])){
				?>
				<input type="text" name="loginEmail" class="loginEmail" value="<?php if(!empty($_POST['loginEmail'])){echo $_POST['loginEmail'];} ?>" placeholder="email"/>
				<input type="password" value="<?php if(!empty($_POST['loginPass'])){echo $_POST['loginPass'];} ?>" name="loginPass" class="loginPass" placeholder="password"/>
				<input type="submit" name="action" value="login"/>

				<a href="index.php?page=register" class="register">register</a>
				<span class="error"><?php if(!empty($errors['loginEmail'])){ echo $errors['loginEmail']; } ?></span>
				<span class="error errorpassword"><?php if(!empty($errors['loginPass'])){ echo $errors['loginPass']; } ?></span>
				<?php
				}else{
					echo "<a class=\"logout\" href=\"index.php?page=logout\">Logout</a>";
					echo "<p class=\"loggedin\">logged in as " . $_SESSION['user']['email'] . "</p>";
				}
				?>



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
				<input type="submit" value="add image" class="control" data-control="add_image"/>
				<input type="submit" value="add post-it" class="control" data-control="add_post-it"/>
				<input type="submit" value="add video" class="control" data-control="add_video"/>

			<!--- dit komt er pas op als je op "add image" hebt gedrukt: -->
			<div class="containerrechts2">
				<input type="file" name="image" class="control" data-control="add_image"/>
				<input type="submit" class="upload" name="upload" value="upload" class="control" data-control="upload_image"/>
			</div>
			</div>

			<div id="sessionmessages">

						<?php if(!empty($_SESSION['info'])): ?><div class="alert alert-success"><?php echo $_SESSION['info'];?></div><?php endif; ?>
            <?php if(!empty($_SESSION['error'])): ?><div class="alert alert-danger"><?php echo $_SESSION['error'];?></div><?php endif; ?>
      </div>




		<div class="indicators">
			<div class="control-bar">
				<div class="wrap">&nbsp;</div>
			</div>
		</div>
