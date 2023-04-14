function adduser(){
    var username = document.getElementById("newname").value
    localStorage.setItem("user_name", username)
    window.location="chatty_room.html"
}