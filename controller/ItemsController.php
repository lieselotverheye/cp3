<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
//require_once WWW_ROOT . 'dao' . DS . 'UserDAO.php';

require_once WWW_ROOT . 'phpass' . DS . 'Phpass.php';

class ItemsController extends Controller {

	//private $userDAO;

	function __construct() {
		//$this->userDAO = new UserDAO();
	}

	public function overview() {

		//LOGIN

		$this->_handleLogin();




	}

	private function _handleLogin(){


		if(!empty($_POST)){


			 $count = $_POST['count'];



					if(!empty($_POST['loginEmail'])){
						$loginEmail = $_POST['loginEmail'];
					}
					if(!empty($_POST['loginPass'])){
						$loginPass = $_POST['loginPass'];
					}

					if(!empty($_POST['loginEmail']) && !empty($_POST['loginPass'])){
									$resultArray = array(
											'succes' => 'true',
											'email' => $loginEmail,
											'pass' => $loginPass
					);

				}

		}


					$errors = array();

							if(empty($_POST['loginEmail'])) {
								$errors['loginEmail'] = 'Please enter your email';
							}
							if(empty($_POST['loginPassword'])) {
								$errors['loginPassword'] = 'Please enter your password';
							}/*
							if(empty($errors)) {
								$existing = $this->userDAO->selectByUsername($_POST['loginEmail']);
								if(!empty($existing)) {
									$hasher = new \Phpass\Hash;
													//if empty(id -> redirect!)

									if ($hasher->checkPassword($_POST['loginPassword'], $existing['password'])) {
										$_SESSION['user'] = $existing;
										$_SESSION['info'] = "Je bent ingelogd!";
										$this->redirect('index.php?page=item&key=0');
									} else {
										$_SESSION['error'] = 'Unknown username / password';
									}
								} else {
									$_SESSION['error'] = 'Unknown username / password';
								}
							} else {
								$_SESSION['error'] = 'Unknown username / password';
							}*/
							$this->set('errors', $errors);



					if(!empty($resultArray['email'])){

					echo json_encode($resultArray);
				}
	}



}
