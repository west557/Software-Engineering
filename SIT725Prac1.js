// create a biosensor simulator 
// useful for many people 
// display output the console. 
// simulate the hr

let getRandomArbitrary=function(min, max) {
    return parseInt(Math.random() * (max - min) ) + min;
}

class Biosensor{
    constructor(name){
        this.name=name;
        this.live();
    }
    beat(){
        let hr = getRandomArbitrary(50,70)
        console.log(this.name)
        console.log(hr)
        console.log("-------------------------Beat-------------------------");
    }
    live(){
        setInterval(()=>{this.beat()},1000)
        }
}


let Andrea = new Biosensor("Andrea heartbeat ");
let James = new Biosensor("James heartbeat ");
