$("form").submit(function(event){
    let error = $("#error");
    let password = $("#password").val();
    let email = $("#primary_email").val();

    let cookies = document.cookie;
    let users = cookies ? cookies.split(';') : [];
    let valid = false;
    let username ="";
    for (let i = 0; i < users.length; i++) {
        let cur_user = users[i];
        let cur_user_cookie = cur_user.split('=');
        let cur_email = cur_user_cookie[0].trim();
        let cur_user_data = JSON.parse(cur_user_cookie[1]);
        if (email === cur_email) {
            valid = true;
            username = cur_user_data["username"];
            document.cookie = 'loggedIn = true';
            document.cookie = `username = ${username}`;
            return true
        }
    }
    error.html("email not registered");
    return false


});