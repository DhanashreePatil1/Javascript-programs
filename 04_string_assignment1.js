console.log(`Assignment 2 :`);
console.log(`-------------------------------------------------------------`);

var str = "  Hey you are doing good, keep it up  ";

string_assignment();

function string_assignment() {
    console.log(`1. The String is: ${str}`);

    var len_str=str.length;
    console.log(`2. Length of the String is:${len_str}`);

    var trimmedString = str.trim();
    console.log(`3. After Removing the spaces:${trimmedString}`);

    /*var len = str.length;
    var strt = str.trim();
    var newlen = strt.length;*/
    var words = len_str - trimmedString.length;

    console.log(`4. The Removing Space count:${words}`);
    
    var pos=trimmedString.length-1;
    var val1 = trimmedString.charAt(0);
    var val2 = trimmedString.charAt(pos);
    console.log(`5. First Character: ${val1} Last Character: ${val2}`);

    var words1 = trimmedString.split(" ");
    var words_count=words1.length;
    console.log(`6. Count the total no. of words:${words_count}`);

    var position = trimmedString.indexOf("good");
    console.log(`7. The Index of word "good":${position}`);

    var substr = trimmedString.substring(22);
    console.log(`8. The Substring starting from index 22:${substr}`);

    var endstr = trimmedString.endsWith("up");
    console.log(`9. String Ends with "up" : ${endstr}`);

    var startstr = trimmedString.startsWith("Hey");
    console.log(`10. String starts with "Hey" :${startstr}`);
    
    var last_index_of = trimmedString.lastIndexOf("e");
    console.log(`11. Last index of: ${last_index_of}`);


}