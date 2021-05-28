var contact;
if (window.XMLHttpRequest) // for IE7+, Firefox, Chrome, Opera, Safari
    contact=new XMLHttpRequest();
else // for IE6, IE5
    contact=new ActiveXObject("Microsoft.XMLHTTP");
contact.open("GET","../../contact.md",true);
contact.send(null);
contact.onload = function(){
    console.log(contact.responseText);
    var converter = new showdown.Converter();
    var html = converter.makeHtml(contact.responseText);
    document.getElementById("contact").innerHTML = html;
}