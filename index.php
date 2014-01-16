<?php
session_cache_limiter(false);

session_start();

require 'vendor/autoload.php';


$app = new \Slim\Slim(array(
	'template.path'=> './templates'
	));


$app->error(function($msg) use ($app){
	$app->render('error.php', array('err'=>$msg));
});


$app->get('/', function() use ($app){
	$app->render('home.php');
});


$app->post('/login', function() use($app){
	$username = $_POST['username'];
	$password = $_POST['password'];

	if($username == '' || $password == ''){
		$app->render('login.php', array('err'=>'You need to enter both a username and password.'));
		exit();
	}

	if(!file_exists('./user/user.json') ){
		$app->error('There is no user.json file. Please create one.');
	}

	$content = json_decode(file_get_contents('./user/user.json')) ;
	if($username == $content->username && $password == $content->password){
		$_SESSION['username'] = $username;
		$app->redirect('/bmarks');
	}else{
		$app->render('login.php', array('err'=> 'Username/Password was incorrect.'));
	}
});


$app->get('/bmarks', function() use ($app){
	$app->render('app.php');
});

$app->post('/create/new', function() use ($app){
	$response = $app->response();
	$response['Content-Type'] = 'application/json';
	$response->setBody(json_encode(array('name'=>'sdfas', 'desc'=>'sdfsd', 'links'=>array())));

});

$app->get('/bookmark/:name', function() use ($app){
	$response = $app->response();
	$response['Content-Type'] = 'application/json';
	$response->setBody(json_encode(array('name'=>'sdfas', 'desc'=>'sdfsd', 'link'=>array())));

});




$app->run();


?>