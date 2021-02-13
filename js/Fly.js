class Fly {
    constructor (bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 100
        }

        this.pointB = pointB;
        this.fly = Constraint.create(options);

        World.add(world, this.fly);
    }

}