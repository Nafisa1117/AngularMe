// let commomman = {
//     title : "Bruce"
// };
// let addpower = function(power:number){
//     return function(hero:any){
//         return{
//             title : hero.title,
//             power : power
//         }
//     }
// };

// commomman = addpower(7)(commomman);
// console.log(commomman);

//------------------------------------------------
let AddPower = function(power:number){
    return function(targetClass:any){
        return class{
            title:string = new targetClass().title;
            power:number = power;
        }
    }
}

@AddPower(7)
class CommonMan{
    title:string = "Bruce";
}

//console.log(new CommonMan().power);