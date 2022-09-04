let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let N = Number(input[0])
let list = input.slice(1)
let tree = {}

for(let i = 0; i<N; i++){
    const [node, l, r] = list[i].split(" ")
    tree[node] = [l, r]
}

let result = ''

function preorder(node){
    if(node === '.') return;
    const [lt, rt] = tree[node]
    result += node
    preorder(lt)
    preorder(rt)
}

function inorder(node){
    if(node === '.') return;
    const [lt, rt] = tree[node]
    inorder(lt)
    result += node
    inorder(rt)
}

function postorder(node){
    if(node === '.') return;
    const [lt, rt] = tree[node]
    postorder(lt)
    postorder(rt)
    result += node
}

preorder("A")
result += '\n'
inorder("A")
result += '\n'
postorder("A")

console.log(result)