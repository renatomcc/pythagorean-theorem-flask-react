
from cmath import sqrt

def perform_calculation(square_one, square_two):
    if (square_one.isnumeric() & square_two.isnumeric()):
        result = ("{:.2f}".format(sqrt(int(square_one) * int(square_one) + int(square_two) * int(square_two)).real))
    else:
        result = "Entre um número valido!"

    return result