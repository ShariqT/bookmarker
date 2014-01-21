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
	$title = $_POST['title'];
	$desc = $_POST['desc'];
	$slug = $_POST['slug'];
	$response = $app->response();
	$response['Content-Type'] = 'application/json';
	$content = json_encode(array('name'=>$title, 'desc'=>$desc, 'slug'=>$slug, 'links'=>array()));
	$handle = fopen("./bjson/{$slug}.json", "x+");
	fwrite($handle, $content);
	fclose($handle);
	$response->setBody($content);

});

$app->get('/bookmark/:slug', function($slug) use ($app){
	$response = $app->response();
	$response['Content-Type'] = 'application/json';
	try{
		$contents = file_get_contents("./bjson/{$slug}.json" );
		$response->setBody($contents);

	}catch(Exception $e){
		$response->setBody(json_encode(array('error'=>'There was no file found')));
	}


});


$app->post('/bookmark/save', function() use ($app){
	$response = $app->response();
	$response['Content-Type'] = 'application/json';
	$linksToAdd = array();
	try{
		foreach($_POST['links'] as $link){
			array_push($linksToAdd,$link);
		}
		$handle = fopen("./bjson/{$_POST['slug']}.json", 'w');
		$dataToWrite = json_encode(array('slug'=>$_POST['slug'], 
										'name'=>$_POST['name'],
										 'desc' => $_POST['desc'],
										 'links' => $linksToAdd));
		
		fwrite($handle, $dataToWrite);
		fclose($handle);
		$response->setBody(json_encode(array('success'=>true)));
	}catch(Exception $e){
		$response->setBody(json_encode(array('err'=>true)));
	}
});

$app->get('/bookmark/get/all', function() use ($app){
	$response = $app->response();
	$response['Content-Type'] = 'application/json';
	$bookmark_dir = scandir('./bjson');
	$all_bookmarks = array();
	foreach($bookmark_dir as $b){
		if($b !== '.' && $b !== '..'){
			$c = json_decode(file_get_contents('./bjson/' . $b));
			array_push($all_bookmarks, $c);
		}
	}

	$response->setBody(json_encode($all_bookmarks));
});

$app->post('/bookmark/delete', function() use ($app){
	$response = $app->response();
	$response['Content-Type'] = 'application/json';
	try{
		unlink("./bjson/{$_POST['slug']}.json");
		$response->setBody(json_encode(array('success'=>true)));
	}catch(Exception $e){
		$response->setBody(json_encode(array('err'=>true)));
	}
	$response->setBody(json_encode(array('success' => true)));
});


$app->get('/export/:slug', function($slug) use ($app){
	$exporter = new \Bookmark\Export();
	$exporter->readFile("./bjson/{$slug}.json");
	$exporter->crawlLinks();
	$exporter->transformFile();
	$response = $app->response();
	$response['Content-Type'] = 'application/octet-stream';
	$response['Content-Transfer-Encoding'] ='Binary';
	$response['Content-disposition'] = 'attachment;filename="'. $slug .'.html"';
	echo $exporter->getExportedContent();

});


$app->run();





?>