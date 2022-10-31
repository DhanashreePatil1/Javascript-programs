function odd_positioned_chars(my_string) {
    console.log(`-------------------------------------------`);
    console.log(`Odd Positioned Characters`);
    console.log(`-------------------------------------------`);
    //var my_string = "Hard work always pays back";
    for (let index = 0; index < my_string.length; index++) {
        var char = my_string.charAt(index);
        if (index % 2 != 0 && char != " ") {
          
           
                console.log(`${my_string.charAt(index)}`);
            
        }
    }
}
var my_string1 = "Hard work always pays back";
var my_string2 = "Soon I will be Angular IT Champ";
odd_positioned_chars(my_string1);
odd_positioned_chars(my_string2);