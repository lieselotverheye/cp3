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



		if(!empty($_POST)){



					if(!empty($_POST['loginEmail'])){
						$loginEmail = $_POST['loginEmail'];
					}
					if(!empty($_POST['loginPass'])){
						$loginPass = $_POST['loginPass'];
					}

					$resultArray = array(
											'succes' => 'true',
											'email' => $loginEmail,
											'pass' => $loginPass
											);

		}




					if(!empty($resultArray['email'])){

					echo json_encode($resultArray);
				}


	}



}
