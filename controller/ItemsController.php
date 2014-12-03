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

		/*if(!empty($_POST['action'])) {
			if($_POST['action'] == 'login') {
				$this->_handleLogin();
			}
		}*/
		$email = '';
		$pass = '';
		$errors = array();

		if(!empty($_POST)){
			$email = $_POST['loginEmail'];
			$pass = $_POST['loginPass'];

			if(empty($email)){
				$errors['loginEmail']="enter an email";
			}

			if(empty($pass)){
				$errors['loginPass']="enter a password";
			}

		}


		$resultArray = array(
				'succes' => true,
				'email' => $email,
				'pass' => $pass,
			);


		//checken als het een ajax request is en dan loggen:::::: !!!!!!
		if (isset($_SERVER['HTTP_X_REQUESTED_WITH'])
		    && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
		   // I'm AJAX!

			echo json_encode( $resultArray);
			die();
		}
	}


	public function checkUsername(){


		$data = array();

		if( !empty($_POST) ){

			$email = $_POST['email'];
			$password = $_POST['password'];

			$existing = $this->userDAO->selectByEmail( $email );

			if( empty($existing) ){

				$data['success'] = false;
				$data['errors'] = array(
						'User does not exist'
				);

			}else{

				$hasher = new \Phpass\Hash;
								//if empty(id -> redirect!)

				if ($hasher->checkPassword( $password, $existing['pass'])) {
					$_SESSION['user'] = $existing;
					$_SESSION['info'] = "Logged in successfully!";

					$data['success'] = true;

				}else{
					$data['success'] = false;
					$data['errors'] = array(
							'Password is not correct'
					);
				}

			}


			/*
			if(empty($test)){
				$errors['loginEmail'] = 'Please enter your email';
			}

				if(empty($errors)){
					$existing = $this->userDAO->selectByEmail($_POST['loginEmail']);
					if(!empty($existing)) {
						$hasher = new \Phpass\Hash;
								//if empty(id -> redirect!)

					if ($hasher->checkPassword($_POST['loginPass'], $existing['pass'])) {
					$_SESSION['user'] = $existing;
					$_SESSION['info'] = "Logged in successfully!";
					echo true;
					//$this->redirect('index.php?page=home');
				}


			}*/


		} else{

			$data['success'] = false;
				$data['errors'] = array(
						'POST data does not exist'
				);
		}


		echo json_encode($data);

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
					$this->redirect('index.php?page=home');
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





}
