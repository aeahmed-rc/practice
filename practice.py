# print('Hello')

# Names = {"ahmed": 28, 'rana':19}
#for key , value in Names.items():
        #print(key + ':', value)

'''
def announce(f):
    def wrapper():
        print("1")
        f()
        print("2")
    return wrapper

@announce      
def hello():
    print("hello")
hello()
'''

'''
count = [1,2,3]
def add_list ():
    sum =0
    for num in range(1,4):
        sum +=num
        print(num)
    print(sum)
    
add_list()
'''
'''
lst1=["Phil", "Oz", "Seuss", "Dre"]
lst2=[]
for name in lst1:
    pre ="Dr."
    lst2.append(f"{pre}" + name)
  
print(lst2)
'''

## for loop square numers and append to new lst

lst1=[3, 7, 6, 8, 9, 11, 15, 25]
lst2=[]
for num in lst1:
    lst2.append(pow(num,2))
print(lst2)