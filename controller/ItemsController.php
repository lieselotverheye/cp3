<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'UserDAO.php';

require_once WWW_ROOT . 'phpass' . DS . 'Phpass.php';

class ItemsController extends Controller {

	private $userDAO;

	function __construct() {
		$this->userDAO = new UserDAO();
	}

	public function overview() {

		//LOGIN

		if(!empty($_POST['action'])) {
			if($_POST['action'] == 'login') {
				$this->_handleLogin();
			} else if($_POST['action'] == 'register') {
				$this->_handleRegister();
			}
		}




	}


	private function _handleLogin() {
		$errors = array();

		if(empty($_POST['loginEmail'])) {
			$errors['loginEmail'] = 'Please enter your email';
		}
		if(empty($_POST['loginPass'])) {
			$errors['loginPass'] = 'Please enter your password';
		}
		if(empty($errors)) {
			$existing = $this->userDAO->selectByEmail($_POST['loginEmail']);
			if(!empty($existing)) {
				$hasher = new \Phpass\Hash;
								//if empty(id -> redirect!)

				if ($hasher->checkPassword($_POST['loginPass'], $existing['pass'])) {
					$_SESSION['user'] = $existing;
					$_SESSION['info'] = "Logged in successfully!";
					$this->redirect('index.php?page=item&key=0');
				} else {
					$_SESSION['error'] = 'Unknown username / password';
				}
			} else {
				$_SESSION['error'] = 'Unknown username / password';
			}
		} else {
			$_SESSION['error'] = 'Unknown username / password';
		}
		$this->set('errors', $errors);
	}




	private function _handleRegister() {
		$errors = array();

		print_r($errors);
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



}
