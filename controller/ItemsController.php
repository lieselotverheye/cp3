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
		//print_r($_SESSION);
		$errors = array();



		   $data = $_POST;
       if(!empty($data)){

       	if(empty($data['email'])){
       		$errors['email'] = "Please enter an email";
       	}
       	if(empty($data['pass'])){
       		$errors['password'] = "Please enter a password";
       	}



       	if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
       		if(empty($errors)){
       			header('Content-Type: application/json');
	        	echo json_encode(array('result' => true, 'data' => $data, 'session' => $_SESSION, 'errors' => $errors));
      			$_SESSION['user'] = $data['email'];
      		}else{
      			header('Content-Type: application/json');
	       		echo json_encode(array('result' => false, 'data' => $data, 'session' => $_SESSION, 'errors' => $errors));
      		}


	        die();
					}
        }else{
        }


	}


	public function checkUsername(){

    //todo: db logica
		$data = $_POST;
		$errors = array();


		if(empty($data['email'])){
			$errors['email'] = "please enter an email";
		}
		if(empty($data['password'])){
			$errors['password'] = "please enter a password";
		}

		if(!empty($errors)){
					$this->set('errors', $errors);
		die();

		}


		if(empty($errors)){
   		$_SESSION['user'] = $data;
		}

    header('Content-Type: application/json');
    echo json_encode(array('result' => $_SESSION['user'], 'errors' => $errors));
    die();


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
