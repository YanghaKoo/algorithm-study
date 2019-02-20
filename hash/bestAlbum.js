
function solution(gen, play){
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
    
    let getAnswer = []
    for(let i=0; i<gen.length; i++){
      if(gen[i] === infos[0].name) getAnswer.push({index : i, value : play[i]})
    }
    
    getAnswer.sort((a,b)=>{
      return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
    })
    getAnswer.slice(0,2).forEach(r => answer.push(r.index))
    infos.shift()
    }
    return answer
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
