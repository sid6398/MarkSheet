function calculate() {
   var a =parseInt( document.getElementById("eng").value);
   var b =parseInt(document.getElementById("phy").value);
   var c =parseInt(document.getElementById("chem").value);
   var d =parseInt(document.getElementById("maths").value);
   var e =parseInt(document.getElementById("comp1").value);
   var f =parseInt(document.getElementById("comp2").value); 

   if (a>100 || b>100 || c>100 || d>100 || e>100 || f>100) {
       alert("Please enter correct value")
   } else {
       var obtain = a + b + c + d + e + f;
       document.getElementById("obtain").innerHTML = obtain;
       var per = obtain/600 * 100;
       document.getElementById("per").innerHTML = per;
       if (a>40 && b>40 && c>40 && d>40 && e>40 && f>40) {
           document.getElementById("remarks").innerHTML = "<span style='color:green'>Pass<span>";
       } else {
           document.getElementById("remarks").innerHTML = "<span style='color:red'>Fail<span>";
       }
       if (per>80) {
        document.getElementById("grade").textContent = "A";
       }
       else if (per>70) {
        document.getElementById("grade").textContent = "B";
       }
       else if (per>60) {
        document.getElementById("grade").textContent = "C";
       }     
       else if (per>50) {
        document.getElementById("grade").textContent = "D";
       }
       else if (per>40) {
        document.getElementById("grade").textContent = "E";
       }
       else{
        document.getElementById("grade").textContent = "F";
       }
   }



}