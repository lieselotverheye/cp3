
		<div id="loginheader">



		</div>

<div class="projectcontr">
			<?php
			 if(!empty($_SESSION['user'])){
				?>

			<div class="user_controls">
				<form method="post">
						<input type="submit" class="control newproject" data-control="add_project" value="new project"/>

						<input type="text" class="project_name" placeholder="project name"></li>
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
				<input type="file" name="image" class="file" data-control=""/>
				<input type="submit" class="upload" name="upload" value="upload" class="control" data-control="upload"/>
			</div>
			</div>
			<?php
				}
			?>



			<div id="sessionmessages">

						<?php if(!empty($_SESSION['info'])): ?><div class="alert alert-success"><?php echo $_SESSION['info'];?></div><?php endif; ?>
            <?php if(!empty($_SESSION['error'])): ?><div class="alert alert-danger"><?php echo $_SESSION['error'];?></div><?php endif; ?>
      </div>
</div>



		<div class="indicators">
			<div class="control-bar">
				<div class="wrap">&nbsp;</div>
			</div>
		</div>


		        <div class="board">
		        	<header class="boardheader">
		        		<h2>Project Title here</h2>
		        		<p>users working on this project:</p>

		        	</header>

            </div>
