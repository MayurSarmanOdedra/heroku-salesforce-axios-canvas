
axios({
    method: 'get',
    url: 'https://coronavirus-19-api.herokuapp.com/countries/',
    responseType: 'json'
}).then(function (response){
    var impCountries = ['New Zealand', 'UK', 'USA', 'Pakistan', 'China', 'India'];
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.border = "black";
    tbl.style.textAlign = "center";
    tbl.style.backgroundColor = "white";
    tbl.style.color = "white";
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for(var key in response.data){
        var tr = document.createElement('tr');
        tr.style.backgroundColor = "black";
        for(var thisValue in response.data[key]){
            var td = document.createElement('td');
            td.style.padding = "15px";
            td.style.borderRadius = "15px";
            td.style.fontFamily = "Lucida Console, Courier, monospace";
            if(impCountries.includes(response.data[key][thisValue])){
                tr.style.backgroundColor = "green";
                tr.style.border = "none";
            }
            if(response.data[key][thisValue] == null){
                td.appendChild(document.createTextNode(0));
            }else{
                td.appendChild(document.createTextNode(response.data[key][thisValue]));
            }
            
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
})