var space;

function floatySpace() {
//   var colors = [
//     "#FF3F8E", "#04C2C9", "#2E55C1"
//   ];
//   Pts.namespace( window );

//   var space = new CanvasSpace("#pt");
//   space.setup({ bgcolor: "#fff" });
//   var form = space.getForm();


//   space.add( () => form.point( space.pointer, 10 ) );

//   let run = Pts.quickStart( "#pt", "#e2e6ef" );//( t => form.point( space.pointer, 10 ) );


//   run( (time, ftime)  => {
//     // rectangle
//     var rect = Rectangle.fromCenter( space.center, space.size.$divide(2) );
//     var poly = Rectangle.corners( rect );
//     poly.shear2D( Num.cycle( time%2000/2000 ) - 0.5, space.center );
    
//     // drawing
//     form.fillOnly("#123").polygon( poly );
//     form.strokeOnly("#fff", 3).rect( rect );
//   });


  Pts.namespace(this);
    var space = new CanvasSpace("#pt").setup({ bgcolor: "#fff" });
    var form = space.getForm();

// animation
space.add( (time, ftime) => {

  // rectangle
  var rect = Rectangle.fromCenter( space.center, space.size.$divide(2) );
  var poly = Rectangle.corners( rect );
  poly.shear2D( Num.cycle( time%5000/5000 ) - 0.5, space.center );
  
  // triangle
  var tris = poly.segments( 2, 1, true );
  tris.map( (t) => t.push( space.pointer ) );
  
  // circle
  var circles = tris.map( (t) => Triangle.incircle( t ) );
  
  // drawing
  form.fillOnly("#123").polygon( poly );
  form.fill("#f03").circles( circles );
  form.strokeOnly("#fff ", 3 ).polygons( tris );
  form.fill("#123").point( space.pointer, 5 );
  
});

  space.bindMouse().bindTouch().play();
//   space = new CanvasSpace("pt", "#252934" ).display();
//   var form = new Form( space );

//   // Elements
//   var pts = [];
//   var center = space.size.$divide(1.8);
//   var angle = -(window.innerWidth * 0.5);
//   var count = window.innerWidth * 0.05;
//   if (count > 150) count = 150;
//   var line = new Line(0, angle);
//   debugger;
//   line = line.to(space.size.x, 0);
//   var mouse = center.clone();

//   var r = Math.min(space.size.x, space.size.y) * 1;
//   for (var i=0; i<count; i++) {
//     var p = new Vector( Math.random()*r-Math.random()*r, Math.random()*r-Math.random()*r );
//     p.moveBy( center ).rotate2D( i*Math.PI/count, center);
//     p.brightness = 0.1
//     pts.push( p );
//   }

//   // Canvas
//   space.add({
//     animate: function(time, fps, context) {

//       for (var i=0; i<pts.length; i++) {
//         // rotate the points slowly
//         var pt = pts[i];

//         pt.rotate2D( Const.one_degree / 20, center);
//         form.stroke( false ).fill( colors[i % 3] ).point(pt, 1);

//         // get line from pt to the mouse line
//         var ln = new Line( pt ).to( line.getPerpendicularFromPoint(pt));

//         // opacity of line derived from distance to the line
//         var opacity = Math.min( 0.8, 1 - Math.abs( line.getDistanceFromPoint(pt)) / r);
//         var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse))

//         if (distFromMouse < 50) {
//           if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
//         } else {
//           if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
//         }

//         var color = "rgba(255,255,255," + pts[i].brightness +")"
//         form.stroke(color).fill( true ).line(ln);
//       }
//     },

//     onMouseAction: function(type, x, y, evt) {
//       if (type=="move") {
//         mouse.set(x,y);
//       }
//     },

//     onTouchAction: function(type, x, y, evt) {
//       this.onMouseAction(type, x, y);
//     }
//   });

//   space.bindMouse();
//   space.play();
}

// floatySpace();

// $(window).resize(function(){
//   space.removeAll();
//   $('canvas').remove();
//   floatySpace();
// });

window.addEventListener('DOMContentLoaded', floatySpace);
