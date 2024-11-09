
type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  

  type Shape = Circle | Rectangle;
  
  
  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {

     
      const result = 3.1415 * shape.radius * shape.radius;
      console.log(result)
      return result;
      
    } else if (shape.shape === "rectangle") {
      const result = shape.width * shape.height;
      console.log(result)
      return result;
    }
    return 0;
  }
  

 calculateShapeArea({ shape: "circle", radius: 5 });

calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });

  