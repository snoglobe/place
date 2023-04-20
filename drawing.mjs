export default function drawing(drawing) {
  /* START DRAWING HERE */

  drawing.strokeStyle = "blue";
  drawing.strokeRect(50, 50, 50, 50);
  
  drawing.fillStyle = "green";
  drawing.fillRect(75, 75, 50, 50);
  
   drawing.fillStyle = "red";
  drawing.fillRect(75 * Math.PI, 75 * Math.PI, 50  * Math.PI, 50  * Math.PI);

  /* STOP DRAWING HERE */
}
