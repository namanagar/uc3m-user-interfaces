function checkPassword(){
    let password = $("#password").val();
    //let error = $("#error");
    if (!password || password.length > 8) {
        //error.html("Password must be between 1 and 8 characters");
        return "Password must be between 1 and 8 characters";
    } else if (!password.match(/^[a-zA-Z0-9]*$/)) {
        return "password must only contain letters and numbers";
        //error.html(`password must only contain letters and numbers`) ;
    }
    return undefined;
}

$("form").submit(function(event){
    let error = $("#error");
    let passwordError = checkPassword();
    let checkbox = $("#checkbox").prop('checked');
    if (passwordError){
        error.html(passwordError);
    }
    else if (!checkbox){
        error.html("please accept terms and conditions");
    }
    else {
        let username = $("#username").val();
        let password = $("#password").val();
        let first_name = $("#first_name").val();
        let last_name = $("#last_name").val();
        let email = $("#primary_email").val();
        let dob = $("#dob").val();
        let interests = $("#interests").val();
        let language = $("#language").val();
        let purpose = $("#purpose").val();

        let cookies = document.cookie;
        let users = cookies ? cookies.split(';') : [];
        let taken = false;
        for (let i = 0; i < users.length; i++) {
            let cur_user = users[i];
            let cur_user_cookie = cur_user.split('=');
            let cur_email = cur_user_cookie[0].trim();
            if (email === cur_email) {
                error.html('email already taken');
                return false
            }
        }
        let user = {
            'username': username,
            'password': password,
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'dob': dob,
            'interests': interests,
            'language': language,
            'purpose': purpose,

        };

        let string_user = JSON.stringify(user);
        document.cookie = `${email}= ${string_user}` + ';path=/';
        document.cookie = `loggedIn = false` + ';path=/';
        return true
        }

});