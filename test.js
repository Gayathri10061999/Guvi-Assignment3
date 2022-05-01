let data = [{name: "Joey",age: 3,type: "dog"},
            {name: "Lizzy",age: 6,type: "dog"},
            {name: "Red",age: 2,type: "dog"},
            {name: "Sheru",age: 4,type: "dog"},
            {name: "Butters",age: 6,type: "dog"},
            {name: "John",age: 35,type: "human"}];
let dogtypes=data.filter(function(dogtype){
           if (dogtype.type==='dog'){
           return dogtype}
           
});
// console.log(dogtypes.age);
let dogage=dogtypes.map((dog)=>{
   return dog.age*7
});
console.log(dogage);
let dognewage=dogage.reduce((c1,c2)=>{
    return c1+c2;
});
console.log(dognewage);