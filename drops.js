class Drop {
    constructor(x,y) {
        var options = {
            friction: 0.01,
            restitution: 0.1
        }
        this.radius = 5;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
      update(){
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});
        }
      }
}