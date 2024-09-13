var id =0;
function sell(){
    id++;
    var pname = form_big.pname.value;
    var qty = form_big.qty.value;
    var gia= form_big.up.value;
    var discount = form_big.discount.value;
    var sum = qty*gia*(1-discount/100);
    var giaDollar = "$" + gia;
    var sumDollar = "$" + sum; 
    var row ="<tr>";
    row +="<td>" + id+"</td>";
    row +="<td>" + pname+"</td>";
    row +="<td>" + qty +"</td>";
    row +="<td>" +giaDollar+"</td>";
    row +="<td>" + discount+"</td>";
    row += "<td>" + sumDollar + "</td>";
    row +="</tr>";
    document.getElementById("bang").innerHTML +=row;
}
function cancel(){
    form_big.pname.value ="";
    form_big.qty.value ="";
    form_big.up.value="";
    form_big.discount.value="";
}