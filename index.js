const musics = []

let osszes = 0

class Zene{
    #cim = ""
    #hossz = 0

    constructor(cim, hossz){
        this.cim = cim
        this.hossz = hossz
    }

    get cim(){
        return this.#cim
    }

    get hossz(){
        return this.#hossz
    }

    set hossz(hossz){
        this.#hossz = hossz
    }

    set cim(cim){
        this.#cim = cim
    }

    static osszegzes(hossz){
        osszes+= hossz
        return osszes
    }
}




function felvesz(){
    let zcim = document.getElementById('cim').value
    let zhossz = parseInt(document.getElementById('hossz').value)
    let zene = new Zene(zcim, zhossz)
    musics.push(zene)
    document.getElementById('ossz').innerHTML=Zene.osszegzes(zhossz)
}

function init(){
    document.getElementById('felvesz').addEventListener('click', felvesz)
}

document.addEventListener('DOMContentLoaded', init)

