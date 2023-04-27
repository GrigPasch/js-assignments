class Triangle{
    constructor(side1, side2, side3, semiPerimeter){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.semiPerimeter = semiPerimeter;
    }

    get area(){
        return this.calcArea()
    }

    calcArea(){
        this.semiPerimeter = (this.side1 + this.side2 + this.side3)/2;
        return Math.sqrt((this.semiPerimeter)*(this.semiPerimeter - this.side1)*(this.semiPerimeter - this.side2)*(this.semiPerimeter - this.side3));
    }
}

const triangle1 = new Triangle(5, 6, 7, null);
console.log("The triangle area is: Triangle Area = " + triangle1.area);