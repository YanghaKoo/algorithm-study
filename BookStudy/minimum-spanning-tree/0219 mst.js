/*
  무방향 가중치 그래프, 모든 도시를 잇는 엣지들의 집합을 구하는 문제
  MST의 답은 항상 트리가됨, (but not rooted tree)
  
  조건 1) 노드가 n개이면 edge는 항상! n-1개가 된다는 것
  조건 2) MST에는 사이클이 형성되지 않는다



  1) 크루스칼 알고리즘
  2) 프림 알고리즘
  으로 나뉜다.

  
*/


/*
  1. Kruscal
  
  Union-find problem : kruscal 알고리즘은 집합을 사용, find(u) : u가 속한 집합이 무엇이냐? union(u,v) : u와 v를 합집합 해줌 이런 매소드들이 필요함
  
  결론부터 말하면 각각의 집합들을 하나의 tree로 표현해서 한다!
    뭐가 루트가 되고 그런거 관련 없이 --> 그냥 하나의 트리만 되면 됨
    하나가 자식이 몇개고 이러든 상관 없음

    일반적인 트리와 다르게 루트에서 내려가는 연산은 하지 않고,
    리프에서 부모로 올라가는 연산을 많이함(상향식 트리)

    각각의 노드 : 내 부모가 누구다 정도의 정보만 있으면 된다.
                    ==> 밑에서 올라가는 일만 할것이기 때문에

    결론 : 각각의 집합을 하나의 상향식 트리로 표현을 한다.
    그 노드의 부모가 자기와 다르다 --> 루트노드가 아니다
    그 노드의 부모가 자기와 동일 --> 그 노드가 루프노드이다.                

    이게 존나 간단한게 모든 트리를 그냥 하나의 배열로 표현할 수 있음
        각각  a,b,c,d,e,f,g,h,i의 부모를 나타냄
    배열 p = [a,a,f,d,e,f,f,c,f] 이런식으로
    


*/