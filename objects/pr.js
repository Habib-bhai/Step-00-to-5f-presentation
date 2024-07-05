let gadhaGari = {
    name: "gadha",
    runs: ()=> {
        console.log("it is running");
        
    }
}



let ferrari = {
    name: "la ferrari",
    runs: ()=> {
        console.log("it is running");
        
    }
}


function test(obj){

obj.runs()
}

test(ferrari)
