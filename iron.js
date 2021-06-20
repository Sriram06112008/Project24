class Iron{
	constructor(x,y,width,height){
	// assign options to the iron 
	var options = {
        'restitution':0.8,
        'friction':3,
        'density':30
    };
		
        this.width=width;
        this.height=height;
		this.body = Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);

	};
	display()
	{
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
            rotate(this.body.angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("Black");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.width, this.height);
			pop()
	}

}