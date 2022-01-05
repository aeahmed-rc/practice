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
'''
def test_equal_operators(name):
    if name == "Bond":
        print("Welcome on board 007.")
    else:
        print("Good morning " + name)

test_equal_operators("Bond")
'''

#function for testing evens 
'''
def evens(i):
    if i % 2 == 0:
        return True
    else:
        return False




print(evens(99))
print(evens(98))

print(99.09-int(99.09))
'''
''''treepersqkm is a dictionary showing the tree number of countries per square kilometer for random countries with sizeable population numbers. Write a function named "moretrees" that returns a list of country names with more than 20.000 trees per square kilometer.'''
treepersqkm = {"Finland": 90652, "Taiwan": 69593, "Japan": 49894, "Russia": 41396, "Brazil": 39542, "Canada": 36388, "Bulgaria": 24987, "France": 24436, "Greece": 24323, "United States": 23513, "Turkey": 11126, "India": 11109, "Denmark": 6129, "Syria": 534, "Saudi Arabia": 1}

def moretrees(dict):
    lst = []
    for key,value in dict.items():
        print("this is key"+key)
        print("this is value"+str(value))
        if value > 20.000:
            print(value)
            print(key)
            lst.append(key)
            print(lst)
    return lst
print(moretrees(treepersqkm))