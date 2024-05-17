from collections import deque
#How to create a queue
queue = deque()
queue.appendleft(10)
queue.appendleft(20)
queue.appendleft("kesa")
queue.appendleft(30)
queue.appendleft('faith')
print(queue)

#To remove an item from a queue
print(queue.popleft())
print(queue.pop())