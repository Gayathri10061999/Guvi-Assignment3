// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)
        // let obj = [{brand: "Apple",Model: "IOS",},
        //            {brand: "Dell",Model: "Vostro",},
        //            {brand: "Dell",Model: "Inspiron",},
        //            {brand: "HP",Model: "Pavillion",},
        //            {brand: "Apple",Model: "IOS",},];
//    for:
//    -----
         let obj = [{brand: "Apple",Model: "IOS",},
                   {brand: "Dell",Model: "Vostro",},
                   {brand: "Dell",Model: "Inspiron",},
                   {brand: "HP",Model: "Pavillion",},
                   {brand: "Apple",Model: "IOS",},];
                   for (i = 0; i < obj.length; i++) 
 { 
     console.log(obj[i]);
 }