
function sol(gen, play){
  let answer = []
  let count = {}
  let infos = []


  for(let i=0; i<gen.length; i++){
    if(count[gen[i]] === undefined) count[gen[i]] = 0
    count[gen[i]] += play[i]
  }
  
  for(let i in count){
    infos.push({name : i, playCount : count[i]})
  }

  infos.sort((a,b)=> a.playCount > b.playCount ? -1 : a.playCount < b.playCount ? 1 : 0)
  console.log(infos)

  while(infos[0]){
    
    let getAnser = []
    for(let i=0; i<gen.length; i++){
      if(gen[i] === infos[0].name) getAnser.push({index : i, value : play[i]})
    }
    
    getAnser.sort((a,b)=>{
      return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
    })
    getAnser.slice(0,2).forEach(r => answer.push(r.index))
    infos.shift()
    }
  
    console.log(answer)
    return answer
}

console.log(
  sol(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
