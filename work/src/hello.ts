class ammo{
    name:string
    constructor(ammoname:string){
        this.name = ammoname
    }
}

class rifle extends ammo{
    constructor(name:string){
        super(name)
    }
    public ammonumber = 5
}



function fire(ra:rifle){
    ra.ammonumber -= 1
    console.log("bang!")
    console.log(ra.name + " rest " + ra.ammonumber)
}

function reload<A extends rifle>(rl:A): A {
    rl.ammonumber = 5
    console.log("Reload!")
    let a = [1,2,3,4,5]
    for(let i of a){
        console.log(i)
    }
    console.log("ammonumber " + rl.ammonumber)
    return rl
}




