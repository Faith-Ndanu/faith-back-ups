#create a function that takes two sorted arrays and prints one merged sorted array
#question1
def merg(arr1,arr2):
    arr1 = [1,2,3]
    arr2 = [4,5,6]
    arr1.extend(arr2)
    arr1.sort()
    print(str(arr1))

#question2
#reverse str
def reverse(str):
   print(str[::-1])
   str = "faith"
#question4
   #write a program that takes a list of integers as input and outputs the list sorted in descending order
def sort_numbers(my_list):
       my_list = [1,2,3,4,5,6,7]
       print(sort_numbers(my_list.sort()))

   #question5
#returning unique characters
def unique(integers):
        x = set(integers)
        y = list(x)
        print(y)
integers = [1,2,3,4,5,3,2,5,]
unique(integers)


#question7
#creata a program that takes a base and an exponent as input and calculates the exponential value
def exponential(base,exponent):
   x= base**exponent
   print(x)
base = 14.0
exponent = 2.0

#question8
#are anagrams qn
def are_anagrams(str1,str2):
    str1 =str1.lower()
    str2 = str2.lower()
    if len(str1)==len(str2):
       sorted_str1=sorted(str2)
       sorted_str2=sorted(str2)
    if sorted_str1==sorted_str2:
        print(f"{str1} and {str2} are anagrams")
    else:
     print(f"{str1} and {str2} are not anagrams")

str1="god"
str2 = "dog"
are_anagrams(str1,str2)


#question9
#write a program that takes in a string and a list of characters as input,and removes 
#all occurences of those characters from the string




#create a program that takes a string as input and counts the number of vowels in it.
#count vowels
#question 10
def vowels_count(str):
    count=0
    vowels = set("a,e,i,o,u,A,E,I,O,U")
    for alphabet in str:
        if alphabet in vowels:
            count +=1
    print(count)


#question 11
#create a dictionary to store information about your favourite book(tile,author,genre,year published)
 #access the authors name: book_info["author"]
#add a new key-value pair for the number of pages
book_info={ "author":"kulet","title":"Blossoms","genre":"Cultural","year published":2018}
book_info["author"]
print(book_info)
book_info["pages"]=200
book_info.keys()
print(book_info)

#create a dictionary using dictionary comphresion to map numbers to their squares
#question 12
l= [1,2,3,4,5]
squares = {x:x*x for x in l}
print(squares)

#write a function named remove_duplicates that accepts list x below.The function uses a set to remove the duplicate letters and return 
#the list without duplicates.
def remove_duplicates(x):
    y=set(x)
    z=list(y)
    print(z)
    x = ['a','b','a','e','d','b','c','e','f','g','h']

def addition(*integers):
    sum = 0
    for number in integers:
       sum += number
    return sum


def divisibility():
    for num in range(1,100):
     if num%3==0 and num%5 ==0:
         print("fizzbuzz")
        #  continue
     elif num%3==0:
        print("fizz")
        # continue
     elif num%5==0:
         print("buzz")
         continue
     print(num)



#write a program that checks if a year is leap.for the year to e a leap year it must meet the following conditions:
#it must be divisible by 4 and not divisible by 100.if the year is divisible by 100,it must also be divisible by 400. in python
def check_year(year):
  if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print("The year is a leap year!")
        else:
            print("The year is not a leap year!")
    else:
        print("The year is a leap year!")
  else:
    print("The year is not a leap year!")




#A program that removes white space from a string.
def remove_white_space(text):
    newtext = text.split(" ").join("")
    return newtext

#A program that takes in two arrays and calculates the corresponding elememts in the two arrays 
#rerurn a new array containing the new values
def calculate_corresponding_elements(array1,array2):
    result = []
    for i in range(min(len(array1),len(array2))):
        result.append(array1[i]*array2[i])
        return result
              

array1 =[1,2,3,4]
array2 =[5,6,7,8]

#Create a program that asks the user to input a temperature in Celsius. Your program should convert the temperature to 
#Fahrenheit then print the converted temperatures.and viseversa
def convert_temperature(temp):
    new_temp=(temp*9/5)+32
    return new_temp

def temp_convert(fahnhereit):
    new_fahnhereit=(fahnhereit-32)*5/9
    return new_fahnhereit


#write a function that takes in an array of integers,and prints out the first four numbers in 
#the array then adds 10 to those first 4 numbers
def check_numbers(*numbers):
  result = numbers[0:4]
  for i in result:
     print(i+10)

numbers = [1,2,3,4,5,6,7,8,9,10]

def is_prime(number):
    if number<=1:
        return False
    for i in range(2,int(number**0.5)+1): #used to determine the upper limit for the loop tat checks for factors of of the number to determine if its prime
        if number%i==0:
            return False
    return True

#number**0.5 calcultaes the squareroot of the number.and adding 1 ensures 
#that the loop goes upto the square root rounded of to the nearest integer.Its efficient for checking if prime numbers as factors of
#a number wont be found beyond its square root


def capitalize(sentence):
    return sentence.title()

sentence = "i love coding"



#using functions and an array of numbers,return positive if an element within the array is positive,negative 
#if an element is negative , else zero

def check_numbers(*numbers):
    for num in numbers:
     if num<0:
        if num>0:
             print("positive number")
     else:
         print("the number is negative")

    else:
        print("zero")

numbers = [-1,2,3,4,-8,0,6,8]

#write a function that calculate the factorial of a given non-negative integers.a factorial is a non-negative integer n,is the "product"
#of all positive integers less than or equal to n.


# def reserve_room(room_number,guest_name,check_in_date)

































