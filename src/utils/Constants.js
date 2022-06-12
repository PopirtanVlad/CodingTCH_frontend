export const javaInitialText = `import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        
    }
}`

export const pythonInitialText = ``

export const cInitialText = `#include <stdio.h>

int main() {

}`


export function textColor(difficulty){
    switch (difficulty) {
        case "EASY":
            return "green"
            break
        case "MEDIUM":
            return "#FFBF00"
            break
        case "HARD":
            return "red"
            break
        default:
            return "black"
    }
}