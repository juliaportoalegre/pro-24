class Iron{
	constructor(x, y)
	{
		var options = {
			restitution: 0.8 ,
			friction: 3,
			density: 30
		}
		this.x=x;
		this.y=y;
        this.width = 50
        this.height = 80
		this.body=Bodies.rectangle(x, y, 50, 80, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos = this.body.position;
            var angle = this.body.angle
			push()
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			rect(0, 0, this.width, this.height)
			pop()
	}

}