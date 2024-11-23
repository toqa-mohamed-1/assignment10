var siteName=document.getElementById("site")
var siteUrl=document.getElementById('url')
 var allSites=[];

 if (localStorage.getItem("all")!=null){
allSites=JSON.parse(localStorage.getItem("all"))
displayInput()
 }

 vaildName()
 vaildUrl()
 function vaildName(){



    var regex= /^[a-z]{3,}/
    if(regex.test(siteName)==true){
        return true
    }
    return false
 }

 function vaildUrl(){
    var regex=/^(https|http)/
    if(regex.test(siteUrl)==true){
        return true
    }
    return false
 }
function addSite(){

    if(vaildName()==true && vaildUrl()==ture ){
        var site ={
            name:siteName.value,
            url:siteUrl.value
        }
        console.log(site);
        allSites.push(site)
        console.log(JSON.stringify(allSites));
        localStorage.setItem("all",JSON.stringify(allSites))
        clearInput()
        displayInput()



    }
    else{
        window.alert("Site name must contain at least 3 characters and Site URL must be a valid one ")

    }
    
}
function clearInput(){
    siteName.value=""
    siteUrl.value=""
}

function displayInput(){
    var cartona=""
  for (var i =0; i<allSites.length;i++){
     cartona +=`<tr>
    <td>${i+1}</td>
    <td>${allSites[i].name}</td>
    <td><button class="btn btn-warning"><i class="fa-solid fa-eye"></i>Visit</button></td>
    <td><button class="btn btn-danger" onclick='clearSite(${i})' > <i class="fa-solid fa-trash"></i>Delete</button></td>
</tr> `
    }
    document.getElementById("tbody").innerHTML=cartona
}
function clearSite(index){
    console.log("delete");
    
 allSites.splice(index,1);
 localStorage.setItem("all",JSON.stringify(allSites));
 displayInput()
}


