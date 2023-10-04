const names = ["Andi","Budi","Charlie"]
    names.push("Dhani")
    names.push("Echa","Ghea")
    names.pop()
    names.shift();
    names.unshift("Apple")
    console.table(names)
    names.splice(2,1); /// Menghapus dari index 2 sebanyak 1 element
    console.info(names)

