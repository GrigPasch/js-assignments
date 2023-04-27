class Circle{
    constructor(radius,diameter){
        this.radius = radius;
        this.diameter = diameter;
    }
//circumference with radius
    get circumferenceOption1(){
        return this.calcCircumferenceOption1()
    }

    calcCircumferenceOption1(){
        this.diameter = 2 * (this.radius);
        return 2 * ((Math.PI) * (this.radius));
    }
//circumference with diameter
    get circumferenceOption2(){
        return this.calcCircumferenceOption2()
    }

    calcCircumferenceOption2(){
        this.radius = (this.diameter)/2;
        return ((Math.PI) * (this.diameter));
    }
//surface area with radius
    get surfaceAreaOption1(){
        return this.calcSurfaceAreaeOption1()
    }

    calcSurfaceAreaeOption1(){
        this.diameter = 2 * (this.radius);
        return ((Math.PI) * (Math.pow(this.radius,2)))
    }
//surface area with diameter 
    get surfaceAreaOption2(){
        return this.calcSurfaceAreaeOption2()
    }

    calcSurfaceAreaeOption2(){
        this.radius = (this.diameter)/2;
        return ((Math.PI) * (Math.pow(this.diameter,2)))/4;
    }
}

const circle1 = new Circle(4,null);
const circle2 = new Circle(null,8)
console.log("This side down are the circumferences, first with radius and then with diameter");
console.log("The circle circumference with only the radius given is: Circumference = " + circle1.circumferenceOption1);
console.log("The circle circumference with only the diameter given is: Circumference = " + circle2.circumferenceOption2);
console.log("This side down are the surface areas, first with radius and then with diameter");
console.log("The circle surface area with only the radius given is: Surface Area = " + circle1.surfaceAreaOption1);
console.log("The circle surface area with only the diameter given is: Surface Area = " + circle2.surfaceAreaOption2);
