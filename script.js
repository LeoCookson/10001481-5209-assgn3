function myFunction(){
    alert("Message has been Sent");
}

function Gps(){
    let x= confirm("Do you allow Gps (without it you can not use the gps locator on this app)");
    if (x == true){
        alert("Gps is now on");
    }else{
        alert("GPS is not on some features will not work")
    }
}


function Safe(){
    let x= confirm("Are you sure you meant to push im safe?")
    if(x == true){
        alert("Im safe has been sent to whanau");
    } else{
        alert("Closing");
    }
}

function Panic(){
    let x= confirm("Are you sure you meant to push PANIC")
    if(x == true){
        alert("PANIC has been sent to whanau")
    }else{
        alert("Closing");
    }
}