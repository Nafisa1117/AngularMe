"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// commomman = addpower(7)(commomman);
// console.log(commomman);
//------------------------------------------------
let AddPower = function (power) {
    return function (targetClass) {
        return class {
            title = new targetClass().title;
            power = power;
        };
    };
};
let CommonMan = class CommonMan {
    title = "Bruce";
};
CommonMan = __decorate([
    AddPower(7)
], CommonMan);
//console.log(new CommonMan().power);
