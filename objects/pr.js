// // Duck typing is a concept closely related to structural typing. The principle is "If it looks like a duck and quacks like a duck, it is a duck." In other words, an object's suitability is determined by the presence of certain methods and properties, rather than the actual type of the object.



let gadhaGari = {
    name: "gadha",
    runs: ()=> {
        
        console.log("it is running");
        console.log("this is superCar");
    }
}



let ferrari = {
    name: "la ferrari",
    runs: ()=> {
        console.log("it is running");
        
    }
}


function test(obj){

obj.runs()    //Here we can see that it doesn't matter who is giving the "test" function, "runs" method. That is the concept of DUCK typing, if something looks like the required, then it is that things. Duck typing is behavior of javaScript.
}

test(gadhaGari)
test(ferrari)
