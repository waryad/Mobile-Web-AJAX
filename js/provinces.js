
function loadLayout(){
    let Name = `Deepinder Kaur Warya`;
    let Country =  `Canada`;
    let userName =`Deep`;
    let myId = `98`;
    let mycurrentProgram = `Computer Systems Technology – Software Engineering`;
    document.getElementById('myheading').innerHTML = `WINTER-2023 project and my name is ${Name} belong to ${Country}`;
    document.querySelector('footer').innerHTML = `My College userName is - ${userName} , My CollegeID is - ${myId} , My current Program is - ${mycurrentProgram}`;
    var myproName = localStorage.getItem("province");
  
    // XMLHttpRequest Code
    const xhttpProv = new XMLHttpRequest();
    xhttpProv.open('GET', '../json/provinces.json', true);
    xhttpProv.send();
    xhttpProv.onload = function(){
        data = this.response;
        dataJSON = JSON.parse(data);
        console.log(dataJSON);
        mainScreen(dataJSON);
    }
        function mainScreen(dataJSON){
        pJdata = JSON.parse(data);
        let result = "";
        let result1 = "";
        for(let y of pJdata){
            if(y.myproName === myproName){
                result += `<p class="provDescription">${y.description}</p></div> <img id="proimage" src="${y.proimage}""/>` ;
                for(let z of y.cities){
                    result1 +=` <h3 id="${z}" onclick="detailOfCity(this)"> <p>${z}</p></h3>`;
                }
                
            }
           
        }

        document.querySelector('.prodesc').innerHTML = result;
        document.querySelector('#proCity').innerHTML = result1;
        document.getElementById('myproName').innerHTML = myproName;
    }

    // fetch  provided link information in assignmentPDF
    fetch(`https://date.nager.at/api/v2/publicholidays/2020/CA`)
    .then((res) => {
        console.log('res', res);
        return res.json();
    })
    .then((JsonH) => {
        console.log('holidays', JsonH);

        var proAbb = localStorage.getItem('proAbb');


        console.log('proAbb: ', proAbb);
        var holiday = [];
        let resultH = "";
        for (let h of JsonH) {
            console.log("holiday counties", h.counties);
            if (h.counties == null) {
                console.log("empty counties");
                holiday.push(h);
            } else {
                for (let i = 0; i < h.counties.length; i++) {
                    console.log("counties: ", h.counties[i]);
                    if (h.counties[i] === "`CA-${proAbb}`") {
                        holiday.push(h);
                    }
                }
            }
        }
        console.log("holidays", holiday);
        for (let fh of holiday) {
            console.log("holiday in this province:", fh.name);
            resultH += `<h1><p>${fh.name}</p><p>Date:${fh.date}<p></div><hr>`;
        }
        console.log("holidaysH:", resultH)
        document.querySelector('.holidays').innerHTML = resultH;

    })
    .catch(err => alert("NO information"))
}

function detailOfCity(n){
    const ctName = n.id;
    localStorage.setItem('cName', ctName);
    
    window.location.href = '../pages/city.html';
  }


  const back = () => {
    window.location.href = '../index.html';
  }