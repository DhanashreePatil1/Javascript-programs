function do_assignment(callback) {          // imp for interview 
    console.log("Vinayak solving assignment.... ");
    console.log("Completed assignment...");
    callback();      // callback function
}
// Kumar Raut want to copy
function copy_assignment() {
    console.log("Copying assignment");
    console.log("Copying assignment done");
}

do_assignment(copy_assignment);

