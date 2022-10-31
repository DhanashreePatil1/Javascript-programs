function even_positioned_chars(my_string) {
    console.log(`-------------------------------------------`);
    console.log(`Even Positioned Characters`);
    console.log(`-------------------------------------------`);
    //var my_string = "Hard work always pays back";
    for (let index = 0; index < my_string.length; index++) {
        var char = my_string.charAt(index);
        if (index % 2 == 0 && char != " ") {
          
           
                console.log(`${char}`);
            
        }
    }
}
var my_string1 = "Hard work always pays back";
var my_string2 = "Soon I will be Angular IT Champ";
even_positioned_chars(my_string1);
even_positioned_chars(my_string2);