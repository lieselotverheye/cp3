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

				if ($hasher->checkPassword($_POST['loginPass'], $existing['password'])) {
					$_SESSION['user'] = $existing;
					$_SESSION['info'] = "Logged in successfully!";
					$this->redirect('index.php?page=item&key=0');
				} else {
					//$_SESSION['error'] = 'Unknown username / password';
				}
			} else {
				//$_SESSION['error'] = 'Unknown username / password';
			}
		} else {
			//$_SESSION['error'] = 'Unknown username / password';
		}
		$this->set('errors', $errors);





	}



}
