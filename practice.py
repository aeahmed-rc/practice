# print('Hello')

# Names = {"ahmed": 28, 'rana':19}
#for key , value in Names.items():
        #print(key + ':', value)


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