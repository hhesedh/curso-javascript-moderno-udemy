let ComparaComThis = function (param) {
    console.log(this === param)
}

ComparaComThis(global)

const obj = {}

ComparaComThis = ComparaComThis.bind(obj)
ComparaComThis(global)
ComparaComThis(obj)

let comapraComThisArrow = param => console.log(this === param)
comapraComThisArrow(global)
comapraComThisArrow(module.exports)

comapraComThisArrow = comapraComThisArrow.bind(obj)
comapraComThisArrow(obj)
comapraComThisArrow(module.exports)