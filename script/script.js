var userName = document.getElementById("userName");
var pwd = document.getElementById("pwd");

function validate(){
    if(userName.value.trim()==""||pwd.value.trim()==""){
        alert("Fields could not be empty");
        return false;
    }
    else if(userName.value!='admin'){
        alert("User name invalid!!!");
        return false;
    }
    else if(pwd.value!='12345'){
        alert("Password invalid!!!");
        return false;
    }
    else{
        // alert('Good!!!');
        return true;
    }
}