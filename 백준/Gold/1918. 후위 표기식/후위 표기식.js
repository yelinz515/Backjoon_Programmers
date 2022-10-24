// https://ddb8036631.github.io/boj/1918_%ED%9B%84%EC%9C%84-%ED%91%9C%EA%B8%B0%EC%8B%9D/

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()


const infix = input.split('')
let postfix = "";
let stack = [];

// infix 를 순회하며, 
// 문자가 알파벳 대문자인지, 열린 괄호인지, 닫힌 괄호인지, 
// + 혹은 - 인지, * 혹은 / 인지에 따라 
// 다른 처리를 하도록 합니다. 

for (let i = 0; i < infix.length; i++) { 
    let ch = infix[i]
    
    // 알파벳 대문자인 경우, 문자열 postfix 뒤에 붙여줍니다.
    if (ch >= "A" && ch <= "Z") postfix += ch;
        // 열린 괄호인 경우, 해당 문자를 스택에 넣어줍니다.
        else if (ch === "(") stack.push(ch);
        // 닫힌 괄호인 경우, 
        // 열린 괄호를 만날 때까지 stack 에 담겨있는 연산자들을 하나씩 빼 postfix 뒤에 붙여줍니다. 
        // 마지막으로 열린 괄호도 제거합니다.
        else if (ch === ")") {
            while (stack.length && stack[stack.length - 1] !== "(") postfix += stack.pop();
            stack.pop();
        } 
        // 연산자 +와 -는 같은 우선순위를, 
        // *와 /는 같은 우선순위를 가지므로, 둘로 구분지어 코드를 작성합니다.
        
        // + 또는 - 인 경우, 
        // 같은 depth 내에 있는 다른 연산자들을 차례대로 빼 postfix 뒤에 붙입니다. 
        // 열린 괄호를 만나기 전까지는 같은 depth 입니다.
        else if (ch === "+" || ch === "-") {
            while (stack.length && stack[stack.length - 1] !== "(") postfix += stack.pop();
            stack.push(ch);
        } 
        // * 또는 / 인 경우, 
        // 같은 우선순위인 * 와 / 이면 빼서 postfix 뒤에 붙입니다. 
        // + 와 - 는 우선순위가 낮으므로 빼지 않습니다.
        else if (ch === "*" || ch === "/") {
            while (stack.length && (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")) postfix += stack.pop();
            stack.push(ch);
        }
}

while (stack.length) postfix += stack.pop();

console.log(postfix);