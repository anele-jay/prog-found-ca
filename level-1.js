// Question one
var weekDay = "thursday";

//Question two
var person = {
    shirt:"floral",
    shoes:"flops"
    }


//Question three

var outOfStock = window.confirm("Click OK,get true. Click Cancel, get false");
if(outOfStock === true) { console.log("out of stock");
                        }
else { console.log("In stock");
     } 

//Question four
var numbers = ["one","two","three","four","five"];
{
console.log(numbers);
}

//Question five
for(i=15; i < 25; i++){
    console.log(i);
}

//Question six 
for( i = 15; i <= 20; i++ ){
    console.log(i);
}

//Question seven
var tv = [ {
    name : "phillips",
    year : 2017,
    hd: true
    },
    {
    name : "telefunken",
    year : 2001,
    hd: false
    }
    ];
    for(i=0; i < tv.length; i++){
    console.log(i);
    }
    console.log(tv[1].year);
    console.log(tv[1].hd)

//Question eight

function whatIDontLike() {
    console.log("I don't like", "onions")
}

//Question nine
function minus(numb1, numb2){
    console.log(numb1 - numb2);
    }
    minus(15,7);

//Question ten 
colorILike();

function colorILIke() {
    console.log("red");
}

colorILIke();

