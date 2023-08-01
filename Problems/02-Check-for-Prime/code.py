import math

def checkPrime(n):
    for i in range(2, int(math.sqrt(n))+1):
        if n%i==0:
            return "No"
    return "Yes"


print(checkPrime(10))