#Accessing items in a tuple
my_tuple=(1,2,3,4)
print(my_tuple[0])
print(my_tuple[3])

#Adding items in a tuple
my_tuple=(1,2,3,4)
new_tuple = my_tuple+(5,)
print(new_tuple)

tuple1 = ('mango','melon','banana')
tuple2 = (6,7,8)
new_tuple = tuple1+tuple2
print(new_tuple)

#Removing items from a tuple
my_tuple = ('apple','banana','mango')
new_tuple=tuple(item for item in my_tuple if item !='mango')
print(new_tuple)

tuple1 = ('mango','melon','banana',9,6,10)
new_tuple = tuple(item for item in tuple1 if item !=6)
print(new_tuple)






