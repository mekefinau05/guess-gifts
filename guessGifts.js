
    function guessGifts(arry, arry2){
        let rtnArry = []

        for (let i = 0; i < arry.length; i++) {
            for(let j=0; j< arry2.length; j++) {
                if(arry[i].size === arry2[j].size && arry[i].clatters === arry2[j].clatters && arry[i].weight === arry2[j].weight){
                    rtnArry.push(arry[i].name)
                }
            }
        }
        console.log(rtnArry)
    }



var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]