class Square{
    constructor(a,b,c,d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    get diagonal(){
        return this.calcDiagonal()
    }

    calcDiagonal(){
        return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
    }
}

const square1 = new Square(9, 9, 9, 9);
console.log("The square diagonal is: Square Diagonal = " + square1.diagonal)