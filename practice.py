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
'''
## for loop square numers and append to new lst

lst1=[3, 7, 6, 8, 9, 11, 15, 25]
lst2=[]
for num in lst1:
    lst2.append(pow(num,2))
print(lst2)
'''
'''
list1 = ['1','2','3','4']

s = "+"

s = s.join(list1)

print(s)
'''
'''
#practice .format()
def format(name,age):
    str = "this is {name} he is {age} yrs!".format(name=name,age=age)
    print(str)

format("ahmed","27")

'''
'''
def acces_dict():
    myfamily = {
    "child1" : {
        "name" : "Emil",
        "year" : 2004
    },
    "child2" : {
        "name" : "Tobias",
        "year" : 2007
    },
    "child3" : {
        "name" : "Linus",
        "year" : 2011
    }
    }
    child1_name = myfamily['child1']['name']
    child2_name = myfamily['child2']['name']
    print(child1_name,child2_name)
acces_dict()
'''

def test_equal_operators(name):
    if name == "Bond":
        print("Welcome on board 007.")
    else:
        print("Good morning " + name)

test_equal_operators("Bond")