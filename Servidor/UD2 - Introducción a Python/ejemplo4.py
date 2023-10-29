# Algoritmo que pida un número y diga si es positivo, negativo o 0.
num = int(input("Dime un número: "))
if num == 0:
    print("Es igual a 0")
else:
    if num > 0:
        print("Es positivo")
    else:
        print("Es negativo")

# Tambien se puede hacer de esta forma.
#if num == 0:
#    print("Es igual a 0")
#elif num > 0:
#    print("Es positivo")
#else:
#    print("Es negativo")