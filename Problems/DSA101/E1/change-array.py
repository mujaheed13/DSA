# ==> https://oj.masaischool.com/contest/5369/problem/201

arr = [3, 3, 2, 9, 7];
n = len(arr);

min = float('inf') 

for x in arr :
    if min > x :
        min = x

for i in range(n):
    if arr[i] % min == 0 :
        arr[i] = -1
        

print(arr)