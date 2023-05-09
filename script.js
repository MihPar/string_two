const str = `
test─┬─b84e5d90─┬─60714ca
     │          ├─66b3c─┬─one.js
     │          │       └─two.js
     │          └─7b8f
     ├─f74e59─┬─a3960
     │        └─d39466─┬─aef0c
     │                 ├─bab8f
     │                 └─c974
     ├─zaw90───four.js
     └─three.js
`

// ─┬─, ───
// ├─, └─
// │
// \n

let arr = []
let tmp = ''
for (const char of str) {
    if (char !== '─' && char !== '┬' && char !== '├' && char !== ' ' && char !== '└' && char !== '\n' && char !== '│') {
        tmp += char
    } else {
        if (tmp !== '') {
            arr.push(tmp)
        }
        tmp = ''
    }
}
console.log(arr)

// console.log(result)

// const arr2 = []
// for (const char of arr2) {
//     arr2.push(...char.split('─┬─'))
// }
// console.log(arr2)

// result = result.filter(function(elem) {
//     return (elem !== '' && elem !== '─┬─' && elem !== '├─' && elem !== '└─' && elem !== '│' && elem !== '───')
// })
// // result = result.filter(Boolean)
// console.log(result)

