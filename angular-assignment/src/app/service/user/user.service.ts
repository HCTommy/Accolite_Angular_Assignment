import { Injectable, OnInit } from "@angular/core";
@Injectable({
    providedIn:'root'
})

export class userService implements OnInit{
    //static loggedIn:boolean = false;
    //static userName:any;
    //static userMap:Map<string,string> = new Map();
    usersList:any
    constructor(){
        let users=[{name:'adminstrator',password:'adminstrator'}]
        window.sessionStorage.setItem("users",JSON.stringify(users))

        //userService.userMap.set('adminstrator','adminstrator')

    }
    ngOnInit(): void {
        
    }

    getUsersList():any{
        this.usersList = window.sessionStorage.getItem("users")
        this.usersList= JSON.parse(this.usersList)
    }


    alreadyExistUserName(name:string):boolean{
        this.getUsersList();
        for(let user of this.usersList){
            if(user.name===name){
                return true;
            }
        }
        return false;
    }

    register(name:string,password:string):void{
        this.getUsersList()
        this.usersList.push({name:name,password:password})
        window.sessionStorage.setItem("users",JSON.stringify(this.usersList))
        //userService.userMap.set(name,password)
    }

    login(name:string,password:string){
        this.getUsersList()
        if(!this.alreadyExistUserName(name)){
            alert('User name does not exist')
            return;
        }
        var loggingUser;
        for(let user of this.usersList){
            if(user.name===name){
                loggingUser=user;
                break;
            }
        }

        if(loggingUser.password===password){
            window.sessionStorage.setItem("loggedIn","TRUE")
            window.sessionStorage.setItem("userName",loggingUser.name)
            alert('Login successful')

        }else{
            alert('User name or password does not match')
        }
    }

    logoff():void{
        //userService.loggedIn=false;
        window.sessionStorage.setItem("loggedIn","FALSE");
        
    }
}