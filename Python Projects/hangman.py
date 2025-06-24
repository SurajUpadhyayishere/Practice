from random import choice


def run_game():
    guessing_word:str = choice(["apple","secret","code","magic"])

    username:str = input("What is your name ? :")
    print(f"Welcome to Hangman,${username}")

    guessed:str = ""
    tries:int = 3


    while tries > 0:
        blanks:int=  0
        guess: str = input("Enter the letter")

        print("Word",end="")
        for char in guessing_word:
            if char in guessed:
                print(char,end="")
            else:
                print(guess,end="")
                blanks += 1
    
        print()


        if blanks == 0:
            print("You won the game")
        
        if guess in guessing_word:
            print(f"You already got the ${guess}.Try the other words")

        guessed += guess

        if guess not in guessed:
            print(f"You have typed wrong letter")
