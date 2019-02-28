# Maze Runner

## Summary

Given a 2D array, and an array of directions, decide if the endpoint can be reached safely.

If you reach the endpoint before all moves are gone, return "Win".

If you hit any walls or go outside the border, return "Fail".

If you run out of moves before finding the endpoint, return "Lost". 

Key:
0 = Safe place to walk
1 = Wall
2 = Start Point
3 = Finish Point

# Inputs

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

direction = ["N","N","N","N","N","E","E","E","E","E"]

# Outputs

"Win"

