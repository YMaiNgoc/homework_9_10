var id =0;
total =0;
function Add() {
    id++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.up.value;
    var sub = qty*price;
    total +=sub;
    var row = "<tr>";
    row += "<td>"+id+ "</td>";
    row += "<td>"+ pname + "</td>";
    row += "<td>"+ qty+ "</td>";
    row += "<td>"+ price + "</td>";
    row += "<td>"+ sub +"</tr>";
    row += "</tr>";
    document.getElementById('table').innerHTML += row;
    document.getElementById('total').innerHTML = "$" + total;
}