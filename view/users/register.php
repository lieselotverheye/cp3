<h1 class="registertitle">register</h1>


			<div id="sessionmessages">

						<?php if(!empty($_SESSION['info'])): ?><div class="alert alert-success"><?php echo $_SESSION['info'];?></div><?php endif; ?>
            <?php if(!empty($_SESSION['error'])): ?><div class="alert alert-danger"><?php echo $_SESSION['error'];?></div><?php endif; ?>
      </div>



<form method="post" action="index.php?page=register" id="registerForm" autocomplete="off" class="form">
			<label for="registerEmail">Email:</label>
			<input type="text" id="registerEmail" name="registerEmail" value="<?php if(!empty($_POST['registerEmail'])) echo $_POST['registerEmail'];?>" />
			<span class="error"><?php if(!empty($errors['registerEmail'])){ echo $errors['registerEmail']; } ?></span>

			<label for="registerPassword">Password:</label>
			<input type="password" id="registerPassword" name="registerPassword" />
			<span class="error"><?php if(!empty($errors['registerPassword'])){ echo $errors['registerPassword']; } ?></span>

			<label for="registerPassword2">Confirm password:</label>
			<input type="password" id="registerPassword2" name="registerPassword2" />
			<span class="error"><?php if(!empty($errors['registerPassword2'])){ echo $errors['registerPassword2']; } ?></span>

			<input type="submit" name="action" value="Register" />

	</fieldset>
</form>
