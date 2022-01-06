'''
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

'''

'''
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
'''
'''
take list of numbers reverse them , remove the spaces
add them to another list that we reversed 
return the answer in a list and reversed
'''

class Solution:
    lst1 = [2,4,3]
    lst2 = [5,6,4]
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        reversed_lst1 = l1.reverse()
        print(reversed_lst1)

    addTwoNumbers(lst1)
