var pO, myproName, proimage, description, cities = [], size;

function loadLayout(){
    
    let Name = `Deepinder Kaur Warya`;
    let Country =  `Canada`;
    let userName =`Deep`;
    let myId = `98`;
    let mycurrentProgram = `Computer Systems Technology – Software Engineering`;
    document.getElementById('myheading').innerHTML = `WINTER-2023 project and my name is ${Name} belong to ${Country}`;
    document.querySelector('footer').innerHTML = `My College userName is - ${userName} , My CollegeID is - ${myId} , My current Program is - ${mycurrentProgram}`;
  
    //XMLHttpRequest Code
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'json/provinces.json', true);
    xhttp.send();
    xhttp.onload = function (){
        data = this.responseText;
        dataJSON = JSON.parse(data);
        console.log(dataJSON);
        mainScreen(dataJSON);
    }

        function mainScreen(dataJSON){
        let prov = JSON.parse(data);
        let result = "";
        for(let x of prov){
            result +=`<h3 id="${x.myproName}" onclick="prodetails(this)"> <p class="prname">${x.myproName}</p> </h3>`; 
            console.log('proName', x.myproName);
            console.log('cities', x.cities);
            console.log('city', x.cities[1]);
            console.log('proO', pO);
        }
        document.querySelector('.myproList').innerHTML = result;  
    }    
    
}
function prodetails(n) {
    const proN = n.id;
    localStorage.setItem('province', proN);
    window.location.href = 'pages/province.html';
  }