<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="js/bootstrap/dist/css/bootstrap.css" />
		<link rel="stylesheet" href="css/main.css" />
	</head>
	<body>
		<div class="masthead">
			<h1><a href="/">Bookmarks</a></h1>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
		<div class="alert alert-warning"><strong><?=$err;?></strong></div>
		<form action="/login" method="POST" role="form">
			<div class="form-group">
				<label class="control-label">Username</label>
				<input type="text" name="username" class="form-control" />
			</div>
			<div class="form-group">
				<label class="control-label">Password</label>
				<input type="text" name="password" class="form-control" />
			</div>

			<button type="submit" class="btn btn-default btn-lg">Login</button>
		
		</form>
	</div>
		</div>
	</div>
	</body>	
</html>