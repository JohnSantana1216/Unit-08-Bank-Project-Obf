var deposit;
var name;
var transaction=[];
var names=[];
var totalAmount=[];
$(".newDeposit").click(function() {
    deposit = $(".accountDeposit").val();
   deposit=parseInt(deposit);
    name = $(".accountName").val();
    $(".ledger").append("<p>" +  name + "</p><p>" + "$" + deposit + "</p>");
    transaction.push(deposit);
    $(".number").text(transaction.length);
//  $(".total").text(total.length);
    
    transaction.forEach(function(totals) {
    $("body").append();   
        
        //$("body").append("<img src=" + picture + ">");
    });
    totalAmount.push(deposit);
    var total =0;
    totalAmount.forEach(function(price) {
    total = total + price;
});
console.log(total);
$(".total").text(total);
});