class Ground{
    constructor(x, y, w, h){
        var Ground_optons={
            isStatic:true
        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    
    }
display(){
    rect(this.x, this.y, this.w, this.h)
    
}    
}