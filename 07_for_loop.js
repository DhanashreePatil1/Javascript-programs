/*for(var index=0; index<10;index++)
{
    console.log(index);
}*/
/*for(var index=0; index<10;index= index+2)
{
    console.log(index);
}
for(var index=10; index>=0;index= index-2)
{
    console.log(index);
}*/

for(var index=10; index>=0;index--)
{
    console.log(index);
}
console.log("======================");
//0 1 2 3 4 5 6 7 8 9 10 11 ---- 20
for (let index = 0; index <= 20; index++) {
    if(index%2 == 0){
        console.log(`Even number ${index}`);
    }else{
        console.log(`ODD number ${index}`); 
    }
    
}