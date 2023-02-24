function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname ==='admin@admin.com' , pwd === '123456')
		{
			alert("Login successful");
		}
		else 
		{
        	alert("Incorrect email or password");
		}
    }


    function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd").value="";
	}	