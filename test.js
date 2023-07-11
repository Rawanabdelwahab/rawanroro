const users=[
    { name:'Yasser',age:29},
    { name:'Ahmad' ,age:30},
    { name:'svein',age:60}
];
const userFinder=(item)=>{
    return item.age>29
}
const result = users.filter(userFinder)

for(let i=0;i<result.length;i++){
    const final=result[i]
        console.log(final.name)
    
}
