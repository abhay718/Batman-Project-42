class Drop {

    constructor(x,y){

        var pro = {

            restitution: 0.1,
            friction: 0.1,
            frictionAir: 0.01
        }

        this.drop = Bodies.circle(x,y,5,pro);
        this.radius = 5;
        
  World.add(world,this.drop);

    }

    display(){

        var position = this.drop.position;

        push();
            
        translate(position.x,position.y);

        fill("blue");

        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius)



        pop();




    }


    update(){

        if(this.drop.position.y > height){

            
            //this.drop.position.x = Math.round(random(10,391));

            Matter.Body.setPosition(this.drop, {x:Math.round(random(10,391)),y:Math.round(random(10,391))})



        }



    }


}