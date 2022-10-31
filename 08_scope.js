var my_name="Chaitali";
// Block scope 
if(true) {
    const salary = "400000";
    console.log(salary); 
    console.log(my_name);
 }
 //console.log(salary);
 console.log(my_name);

 function display(){
    var my_city="Pune";
    if(true) {
   let my_state="MH";
   var my_country="India";
   //console.log(my_state);
  // console.log(my_city);
    }
    //console.log(my_state);
    console.log(my_country);
 }
 //console.log(my_country);
 display();
