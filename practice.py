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

lst1=["Alaska", "Alabama", "Arizona", "Arkansas", "Colorado", "Montana", "Nevada"]
#Type your answer here.

lst2=list(map(lambda a:a.count('a'),lst1))


print(lst2)