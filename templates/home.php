<!DOCTYPE html>
<html>
	<head>
		<title>Bookmarks</title>
		<link rel="stylesheet" href="js/bootstrap/dist/css/bootstrap.css" />
		<link rel="stylesheet" href="css/main.css" />
	</head>
	<body>
		<div class="masthead">
			<h1><a href="/">Bookmarks</a></h1>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<h2>Login </h2>
					<form action="/login" method="POST">
						<div class="form-group">
							<label class="control-label">Username</label>
							<input type="text" name="username" class="form-control" />
						</div>
						<div class="form-group">
							<label>Password</label>
							<input type="password" name="password" class="form-control"/>
						</div>
						<input type="submit" value="Login" class="btn btn-default"/>
					</form>
				</div>
			</div>			
		</div>
		<script src="js/jquery/jquery.js"></script>
	</body>
</html>