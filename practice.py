'''
Write a lambda function that takes x as parameter and returns x+2. Then assign it to a variable named L
'''
# i=6

# L=lambda x:x+2

# print(L(i))


'''
Using .sort() method, create a lambda function that sorts the list in descending order. Refrain from using the reverse parameter.
'''

# lst=[100, 10, 10000, 1, 9, 999, 99]

# lst.sort(key=lambda x:100/x)

# print(lst)

# class Solution:
#     def longestPalindrome(self,s:str) -> str:
#         print("in fun")
#         res = ""
#         resLen = 0
#         for i in range(len(s)):
#             print(i)
#             l,r = i,i
#             print(l,r)

# lp = Solution()
# lp.longestPalindrome("babad")

lst=[99.3890,-3.5, 5, -0.7123, -9, -0.003]
new_lst=list(map(lambda x:abs(x),lst))

ans_1=map(lambda (x, z):x+z, new_lst)

print(ans_1)
