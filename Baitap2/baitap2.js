var id=0;
var total =0;
function Add(){
    id++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.up.value;
    var sum =(qty*price);
    total += sum;
    var row ="<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>$" + price+ "</td>";
    row += "<td>$" +sum+ "</td>";
    row +="</tr>";
    document.getElementById('bang').innerHTML +=row;
    document.getElementById('total').innerHTML= "$"+total;
}