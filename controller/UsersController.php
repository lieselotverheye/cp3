<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'UserDAO.php';

require_once WWW_ROOT . 'phpass' . DS . 'Phpass.php';

class UsersController extends Controller {

	private $userDAO;

	function __construct() {
		$this->userDAO = new UserDAO();
	}

	public function register() {
		if(!empty($_POST['action'])) {
			if($_POST['action'] == 'Register') {
				$this->_handleRegister();
			}
		}
	}

	private function _handleRegister() {
		$errors = array();

		if(empty($_POST['registerEmail'])) {
			$errors['registerEmail'] = 'Please enter your email';
		} else {
			$existing = $this->userDAO->selectByEmail($_POST['registerEmail']);
			if(!empty($existing)) {
				$errors['registerEmail'] = 'Email address is already in use';
			}
		}
		if(empty($_POST['registerPassword'])) {
			$errors['registerPassword'] = 'Please enter a password';
		}

		if(empty($_POST['registerPassword2'])) {
			$errors['registerPassword2'] = 'Please confirm password';
		}

		if(empty($errors)) {
			$hasher = new \Phpass\Hash;
			$inserteduser = $this->userDAO->insert(array(
				'email' => $_POST['registerEmail'],
				'password' => $hasher->hashPassword($_POST['registerPassword']),
			));
			if(!empty($inserteduser)) {
				$_SESSION['info'] = 'registration successful';
				$_SESSION['user'] = $inserteduser;
				$this->redirect('index.php?page=home');

			}
		}


		$_SESSION['error'] = 'registration failed';
		$this->set('errors', $errors);
	}



	public function logout(){
		unset($_SESSION['user']);
		$this->redirect('index.php');
	}

}
