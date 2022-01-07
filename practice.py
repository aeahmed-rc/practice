'''
Write a lambda function that takes x as parameter and returns x+2. Then assign it to a variable named L
'''
i=6

L=lambda x:x+2

print(L(i))


'''
Using .sort() method, create a lambda function that sorts the list in descending order. Refrain from using the reverse parameter.
'''

lst=[100, 10, 10000, 1, 9, 999, 99]

lst.sort(key=lambda x:100/x)

print(lst)

