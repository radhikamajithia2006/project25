class Paper{
    constructor(x,y,radius)    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    
    }
     
    display()      {
        var pos=this.Paper.position
        ellipse(100,20,30,40,90);
         

    }
     
}