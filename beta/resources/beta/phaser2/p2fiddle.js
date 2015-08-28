


P2FID=function(){
z()

    c=can(500).id('myCanvas').a()()

    var canvas, ctx, w, h, world, boxBody, planeBody, mouseConstraint, mouseBody;
    var scaleX = 50, scaleY = -50;

    init();
    animate();

    function init(){canvas = document.getElementById("myCanvas");

        w = canvas.width;
        h = canvas.height;

        ctx = canvas.getContext("2d");
        ctx.lineWidth = 0.05;

        // Init p2.js
        world = new p2.World();

        // Add a box
        boxShape = new p2.Rectangle(2,1);
        boxBody = new p2.Body({
            mass:1,
            position:[0,3],
            angularVelocity:1
        })


        boxBody.addShape(boxShape);
        world.addBody(boxBody);

        // Add a plane

        planeShape = new p2.Plane()

        planeBody = new p2.Body()


        planeBody.addShape(planeShape);

        world.addBody(planeBody)

        // Create a body for the cursor
        mouseBody=new p2.Body()

        world.addBody(mouseBody)



        canvas.addEventListener('mousedown',
            function(event){

            // Convert the canvas coordinate to physics coordinates
            var position = getPhysicsCoord(event);

            // Check if the cursor is inside the box
            var hitBodies = world.hitTest(position, [boxBody]);

            if(hitBodies.length){

                // Move the mouse body to the cursor position
                mouseBody.position[0] = position[0]
                mouseBody.position[1] = position[1]

                // Create a RevoluteConstraint.
                // This constraint lets the bodies rotate around a common point
                var localPointInBox=[0,0]
                boxBody.toLocalFrame(localPointInBox, position);

                mouseConstraint = new p2.RevoluteConstraint(mouseBody, [0, 0], boxBody, localPointInBox);

                world.addConstraint(mouseConstraint);

            }})


        // Sync the mouse body to be at the cursor position
        canvas.addEventListener('mousemove', function(event){
            var position = getPhysicsCoord(event);
            mouseBody.position[0] = position[0];
            mouseBody.position[1] = position[1];
        });


        // Remove the mouse constraint on mouse up
        canvas.addEventListener('mouseup', function(event){
            world.removeConstraint(mouseConstraint);
            mouseConstraint = null;
        });
    }

// Convert a canvas coordiante to physics coordinate
    function getPhysicsCoord(mouseEvent){
        var rect = canvas.getBoundingClientRect();
        var x = mouseEvent.clientX - rect.left;
        var y = mouseEvent.clientY - rect.top;

        x = (x - w / 2) / scaleX;
        y = (y - h / 2) / scaleY;

        return [x, y];
    }

    function drawbox(){
        ctx.beginPath();
        var x = boxBody.position[0],
            y = boxBody.position[1];
        ctx.save();
        ctx.translate(x, y);        // Translate to the center of the box
        ctx.rotate(boxBody.angle);  // Rotate to the box body frame
        ctx.rect(-boxShape.width/2, -boxShape.height/2, boxShape.width, boxShape.height);
        ctx.stroke();
        ctx.restore();
    }

    function drawPlane(){
        var y = planeBody.position[1];
        ctx.moveTo(-w, y);
        ctx.lineTo( w, y);
        ctx.stroke();
    }

    function render(){
        // Clear the canvas
        ctx.clearRect(0,0,w,h);

        // Transform the canvas
        ctx.save();
        ctx.translate(w/2, h/2); // Translate to the center
        ctx.scale(scaleX, scaleY);

        // Draw all bodies
        drawbox();
        drawPlane();

        // Restore transform
        ctx.restore()}



// Animation loop
    function animate(){
        RAF(animate)

        // Move physics bodies forward in time
        world.step(1/60);

        // Render scene
        render();
    }

}