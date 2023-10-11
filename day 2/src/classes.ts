//private property
//pubic property
//private methods
//public methods
//constructor
//static method and property
//getter and setter methods

//-------------------------------------------------------------

// class Hero{

//     public title:string = "Batman";
//     private _fisrtname:string = "Bruce";
//     private _lastname:string = "Wayna";
//     static version:number = 1001;

//     constructor(ntitle:string, nfirstname:string, nlastname:string){
//         this.title = ntitle;
//         this._fisrtname = nfirstname;
//         this._lastname = nlastname;
//     }

//     get fisrtname(){
//         return this._fisrtname;
//     };
//     set fisrtname(nfirstname:string){
//         this._fisrtname = nfirstname;
//     };
 
//     get lastname(){
//         return this._lastname;
//     };
//     set lastname(nlastname:string){
//         this._lastname = nlastname;
//     };

// }

//----------------------------------------------------
//we are creating above class in another way in typescrpit

// class Hero {

//     static version:number = 1001;

//     constructor(public title:string, private _firstname:string, private _lastname:string){
//           //values assigned automaticall, we dont need to write this.title
//     }

//     fullname(){
//         return this._firstname+" "+this._lastname;
//     }

//     get fisrtname(){
//         return this._firstname;
//     };
//     set fisrtname(nfirstname:string){
//         this._firstname = nfirstname;
//     };
 
//     get lastname(){
//         return this._lastname;
//     };
//     set lastname(nlastname:string){
//         this._lastname = nlastname;
//     };

// }

//-------------------------------------------------
class Person{
    constructor(public canwalk:string){}
}

interface IHero{
   title:string;
   fullname():string;
}

class Hero extends Person implements IHero{

    static version:number = 1001;

    constructor(public title:string, private _firstname:string, private _lastname:string, ncw:string){
          //values assigned automaticall, we dont need to write this.title
            super(ncw);
        }

    fullname(){
        return this._firstname+" "+this._lastname;
    }

    get fisrtname(){
        return this._firstname;
    };
    set fisrtname(nfirstname:string){
        this._firstname = nfirstname;
    };
 
    get lastname(){
        return this._lastname;
    };
    set lastname(nlastname:string){
        this._lastname = nlastname;
    };

}

let hero = new Hero("Spider man","batman","parher","No I can fly");
console.log(hero.title);
console.log(hero.fisrtname);
console.log(hero.canwalk);