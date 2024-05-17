def hello():
   print("hello Akirachix")

def hello(name):
    print(f"Hello {name}")

def year_of_birth(name,age):
   # year_of_birth("Raziah",20)
   # year_of_birth(name="Raziah",age=20)
    #year_of_birth(20,"Raziah")
    #year_of_birth(age=20,name="Raziah")
    print(f"hello {name},you were born in {2024-age}")
  
def my_country(country="Uganda"):
   # my_country()
    #my_country(country="Rwanda")
    #my_country(country="kenya")
    print(f"Hello AkiraChix from {country}")

#Creating a function that can accept any number of positional arguments

def greet(*names):
    for name in names:
      print(f"Hello {name}")

#Creating a function that can accept any number of keyword arguments
def create_sentence(**words):
    print(words)
    sentence = " "
    for word in words.values():
        sentence += word
        sentence += " "
    return sentence

def sum_and_greet(*args,**kwargs):
    total = 0
    for x in args:
        total+=x

    f= kwargs["first_name"]
    l=kwargs["last_name"]
    greeting=f"Hello {f} {l} the sum of your number is {total}"
    return greeting




