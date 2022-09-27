const musics = []

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
}

let hossz = new Zene()


function cimAdas(){
    cim = document.getElementById('cim').textContent
}

function hosszAdas(){
    hossz = document.getElementById('hossz').textContent
}


function felvesz(){
    document.getElementById('ossz').innerHTML=""
    let osszes = 0
    musics.push(Zene.hossz)
    for(let i = 0; i < musics.length; i++){
        osszes+=musics[i]
        document.getElementById('ossz').innerText=osszes
    }
}

function init(){
    document.getElementById('cim').addEventListener('change', cimAdas)
    document.getElementById('hossz').addEventListener('change', hosszAdas)
    document.getElementById('felvesz').addEventListener('click', felvesz)
}

document.addEventListener('DOMContentLoaded', init)

