function validate(){
    let user = document.getElementById("username").value;
    let password = document.getElementById("user_password").value;
    if(user=="admin" && password=="admin"){
        window.location.href = "Github_user.html"; 
        return false;
    }
    else{
        alert("Login Failed")
        return false;
    }
}

async function fetchGitHubUsers() {
    try {
      let response=await fetch("https://api.github.com/users?per_page=10");
      let data=await response.json();
      data.forEach((element)=>{
        let h1=document.createElement("h1");
        h1.textContent=element.login;
        let a=document.createElement('a');
        a.textContent=element.login;
        a.setAttribute('href',element.html_url);
        let top=document.getElementById('top');
        top.classList.add("user-details");
        top.appendChild(h1);
        top.appendChild(a);
      });
    }
     catch (error) {
      console.log(error);
    }
  }