#Creating a simple stack
my_stack = []
my_stack.append('faith')
my_stack.append('munyao')
my_stack.append(20)
my_stack.append(90)
print(my_stack)

#Accessing item in a stack
my_stack=['banana','mango','orange']
print(my_stack[1])

#Adding items to a stack
my_stack=['banana','mango','orange']
new_item=my_stack.append('kiwi')
new_item=my_stack.append('dragon fruit')
print(my_stack)

#Removing an item from a stack
my_stack=['banana','mango','orange']
new_item=my_stack.pop()
print(new_item)
print(my_stack)





class Stack:
    def __init__(self):
        self.stack = []
    def push(self, item):
        self.stack.append(item)
    def pop(self):
        if len(self.stack) < 1:
            return None
        return self.stack.pop()
    def size(self):
        return len(self.stack)
my_stack = Stack()
my_stack.push('a')
my_stack.push('b')
my_stack.push('c')
print(f'Stack: {my_stack.stack}')













