
const urlPlace = 'https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json';
const urlCafe = 'https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json';

const getCafeData= async()=>{
    const response = await fetch(urlCafe);
    const data =  await response.json();
    
    return  data.cafes;
    
}

const getPalceData = async()=>{
    const response = await fetch(urlPlace);
    const data =  await response.json();
    
    return  data.places;
   
}


document.addEventListener("DOMContentLoaded", async ()=>{
    let cafes = [];
    let places = [];
    cafes = await getCafeData();
    places = await getPalceData();
    console.log(cafes);
    console.log(places);
    
    var ans = [];
    for(var i in cafes){
       var loc = cafes[i].location_id;
       
       for(var j in places){
          var id = places[j].id;
          if(loc === id){
            var obj = {};
            obj.name = cafes[i].name;
            obj.street_no = places[j].street_no;
            obj.locality = places[j].locality;
            obj.postal_code = places[j].postal_code;
            obj.lat = places[j].lat;
            obj.long = places[j].long;
            
            ans.push(obj);
        
        }
    }

       
    }
    
    buildTable(ans);

});
// console.log(ans);

const searchCafe=()=>{
    let myInput = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');

    for(var i=1;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[1];
        if(td){
            let textValue = td.textContent || td.innerHTML;

            if(textValue.toUpperCase().match(myInput)){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }

        }
    }
    
}


//how to show json Array data in html table
// var myArray = [
//     {"id":1,"name": "Bazaar Cafe", "address":"Worth Avenue, Unit A","postal_code":"20619","lat": "36.1152" , "long":"117.521"},
//     {"id":2,"name":"Ashley's Cafe", "address":"Ambey Mantion","postal_code":"29087","lat": "31.21" , "long":"117.7"},
//     {"id":3,"name":"Avenue Cafe", "address": "Three Notch Road","postal_code":"20619","lat": "36.83" , "long":"119.6"},
//     {"id":4,"name":"Hi-Lo Cafe", "address":"Ambey Mantion","postal_code":"29087","lat": "31.21" , "long":"117.7"},
//     {"id":5,"name":"California Chicken Cafe", "address": "Macarthur Blvd","postal_code":"20619","lat": "38.1781 N" , "long":"118.4171 W"},

//     {"id":6,"name":"Corner Bakery Cafe", "address":"Solomos Island Road","postal_code":"20688","lat": "36.7783 N" , "long":"119.4179 W"},
    
//     {"id":7,"name":"Philz Coffee", "address":"Macarthur Blvd","postal_code":"20687","lat": "35.77813" , "long":"119.41791"},
    
//     {"id":8,"name":"The Alma Gathering Cafe", "address":"Gunston Dr Lexington Park","postal_code":"20688","lat": "35.7788" , "long":"119.979"},
    
//     {"id":9,"name":"Lakeland Memory Cafe", "address":"Solomos Island Road","postal_code":"20688","lat": "36.7783 N" , "long":"119.4179 W"},
    
//     {"id":10,"name":"Baron Memory Cafe", "address":"Worth Avenue, Unit A","postal_code":"20619","lat": "36.1152" , "long":"117.521"},
    
//     {"id":11,"name":"Lakeshores Memory Cafe", "address":"Gunston Dr Lexington Park","postal_code":"20688","lat": "35.7788" , "long":"119.979"},
//     {"id":12,"name":"Monarch Memory Cafe", "address":"Solomos Island Road","postal_code":"20688","lat": "36.7783 N" , "long":"119.4179 W"}
// ];

// buildTable(myArray);

function buildTable(data){
    var table = document.getElementById('mytable');

    for(var i=0;i<data.length;i++){
        var row = `<tr>
        
                       <td class="column1">${i+1}</td>
                       <td class="column2">${data[i].name}</td>
                       <td class="column3">${data[i].street_no}, ${data[i].locality}</td>
                       <td class="column4">${data[i].postal_code}</td>
                       <td class="column5">${data[i].lat}</td>
                       <td class="column6">${data[i].long}</td>
        
                  </tr>`

        table.innerHTML += row;
    }
}




