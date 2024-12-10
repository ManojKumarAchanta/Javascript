class Rectangle{
    constructor(width,height)
    {
        this.width = width;
        this.height  = height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }else{
            console.error(`With must be positive number`);
        }
    }
    set height(newheight){
        if(newheight>0){
            this._height = newheight;
        }else{
            console.error(`height must be positive number`);
        }
    }get width(){
        return this._width;
    }get hieght(){
        return this._hieght;
    }
}

const rectangle = new Rectangle(2,3); 

console.log(rectangle.width);
console.log(rectangle.height);
