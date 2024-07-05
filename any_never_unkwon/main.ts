// IN ANY ANYTING ISPOSSIBLE




// IN UNKNOWN YOU HAVE TO NARROW THE TYPE YOU WANT




// never
type user = "standard" |"admin"


function login(user: user) {


    switch(user){
        case "standard":
            return true
            break;
        case "admin":
        return true ;
        break ;
        
        
        default:
         const unreachAble: never = user 
         console.error("wrong user")
    }
}