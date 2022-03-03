Little Mirko has paid a touristic visit to a village nearby Donji Andrijevci, a town in Slavonia. As it happens, the arrangement of streets in the village looks awfully familiar to the shape of a perfect binary tree of the order K. A perfect binary tree of order K consists of 2K - 1 nodes arranged in K levels (just like in the image). Each node contains a building labeled with a house number. Moreover, all buildings but the ones in the last level have a left and right child (see the image again). 

Perfect binary tree of orders 2 and 3

Mirko has visited all the buildings in a village and noted down the exact entrance order. Now he wants to describe to you how the village looks like, but he can't quite remember. Luckily, he remembers the way in which he visited the buildings: 

in the beginning, he was standing in front of the only building in the first level 
if the building which he is currently standing in front of has a left child which he hasn't visited yet, he will move in front of the left child 
if the building doesn't have a left child or he has already visited it, he will enter the current building and write its house number on his paper 
if he has already visited the current building and the building has a right child, he will move in front of the right child 
if he has visited the current building and its left and right child, he will return to the parent of the current building 
After visiting the villages in the pictures above, the paper would look like this: 2-1-3 for the first village and 1-6-4-3-5-2-7 for the second village. Write a programme to help Mirko reconstruct the order of house numbers on each level.

입력
The first line of input contains the integer K (1 ≤ K ≤ 10), the number of levels of the village Mirko just visited. The second line of input contains 2K integers, the sequence of house numbers on Mirko's paper. The house numbers will be unique and from the interval [1, 2K]. 

출력
The output must consist of K lines. The ith line must contain the sequence of house numbers in the ith level of the village.

1. 출발 때, first level 앞에만 있을 수 있다.
2. 서있는 곳에 빌딩이 왼쪽 자식을 가지고있고, 그 왼쪽자식을 아직 방문한적이 없는 경우, 그는 왼쪽자식으로 갈 것이다.
3. 빌딩이 왼쪽 자식을 가지고있지 않거나, 이미 방문한 경우, 현재 빌딩을 방문하고, house number를 적는다.
4. 이미 현재 빌딩을 방문하였고, 그 빌딩이 오른쪽 자식을 가지고 있는경우, 오른쪽 자식으로 간다.
5. 현재 빌딩을 방문하였고, 왼쪽과 오른쪽자식을 가지고있는 경우 부모로 되돌아 간다.