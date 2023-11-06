
function loadLayout() {
     
    let Name = `Deepinder Kaur Warya`;
    let Country =  `Canada`;
    let userName =`Deep`;
    let myId = `98`;
    let mycurrentProgram = `Computer Systems Technology – Software Engineering`;
    document.getElementById('myheading').innerHTML = `WINTER-2023 project and my name is ${Name} belong to ${Country}`;
    document.querySelector('footer').innerHTML = `My College userName is - ${userName} , My CollegeID is - ${myId} , My current Program is - ${mycurrentProgram}`;
    var cityN = localStorage.getItem("cName");
   
    //XMLHttpRequest Code
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../json/cities.json', true);
    xhttp.send();
    xhttp.onload = function () {
        data = this.responseText;
        dataJSON = JSON.parse(data);
        console.log(dataJSON);
        mainScreen(dataJSON);
    }
       
    function mainScreen(dataJSON){
        let detailOfCity = JSON.parse(data);
        let result = "";
        let result2 = "";
        let colleges = [];
        for (let d of detailOfCity) {

            if (d.cName == cityN) {
                console.log("Colleges ", d.colleges);
                if (d.colleges == null || d.colleges.length == 0) {
                    result += `<div id="${d.cName}">
                    <p>${d.description}</p>
                    <p">Colleges in this city of ${d.cName}</p>
                    </div>
                    `;
                }
                else {
                    console.log('cityO', d);
                    for (let col of d.colleges) {
                        result2 += `
                        <button id="${col}" onclick="collgedpt(this)"> ${col}
                        </button>
                    `;
                    }
                     result += `<h1>About City Detail</h1>
                        <p class="styledetail">${d.description}</p>
                        <h2>Colleges in the city of ${d.cName}</h2>
                        <p>${result2}</p>
                    </div>
                    `;
                }


            }

        }
        document.querySelector('.detailOfCity').innerHTML = result;
        document.getElementById('cName').innerHTML = cityN;
    }


}



const back = () => {
    window.location.href = '../pages/province.html';
}