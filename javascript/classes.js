class rectangle{
    constructor(len,wid,paint){
        this.lenght=len;
        this.width=wid;
        this.paint=paint;
    }
    area(){
        return this.lenght*this.width;
    }
    paintcolor(){
        let paint=`this is th colour of  ${this.paint}`;
        return paint;
    }

}
let rect1 = new rectangle(10,200,"red");
console.log(rect1.area());
console.log(rect1.paintcolor());