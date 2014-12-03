<?php
session_start();

define('DS', DIRECTORY_SEPARATOR);
define('WWW_ROOT', __DIR__ . DS);

$routes = array(
	'home' => array(
		'controller' => 'Items',
		'action' => 'overview'
	),
	'register' => array(
		'controller' => 'Users',
		'action' => 'register'
	),
	'logout' => array(
		'controller' => 'Users',
		'action' => 'logout'
	),
	'checkusername' => array(
		'controller' => 'Items',
		'action' => 'checkUsername'
	)
);

if(empty($_GET['page'])) {
	$_GET['page'] = 'home';
}

/*
if(empty($_SESSION['user']) && $_GET['page'] != 'login-register'){
	header('Location: index.php?page=login-register');
	exit();
}*/

if(empty($routes[$_GET['page']])) {
	header('Location: index.php');
	exit();
}

$route = $routes[$_GET['page']];
$controllerName = $route['controller'] . 'Controller';

require_once WWW_ROOT . 'controller' . DS . $controllerName . ".php";

$controllerObj = new $controllerName();
$controllerObj->route = $route;
$controllerObj->filter();

if ( ! isset($_SERVER['HTTP_X_REQUESTED_WITH']) ) {
	$controllerObj->render();
}

