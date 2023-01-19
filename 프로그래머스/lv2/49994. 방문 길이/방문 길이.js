function solution(dirs) {
    let coordinates = {
        x: 0,
        y: 0,
    }
    return dirs.split("").reduce((acc, cur) => {
        let {x , y} = coordinates
        
        switch(cur){
            case "U":
                if(y === 5) break;
                acc.add(`${x} / ${y + 0.5}`)
                coordinates.y++
                break;
            case "D":
                if(y === - 5) break;
                acc.add(`${x} / ${y - 0.5}`)
                coordinates.y--
                break;
            case "R":
                if(x === 5) break;
                acc.add(`${x + 0.5} / ${y}`)
                coordinates.x++
                break;
            case "L":
                if(x === -5) break;
                acc.add(`${x - 0.5} / ${y}`)
                coordinates.x--
                break;
                
        }
        return acc
            
    }, new Set()).size
}