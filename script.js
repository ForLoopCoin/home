document.addEventListener("DOMContentLoaded", function() {
    const circle = document.getElementById('shine-circle');
    const path = document.getElementById('infinity-path');
    
    const pathLength = path.getTotalLength();
    
    let progress = 0;
    
    function moveCircle() {
        progress = (progress + 0.2) % 100;
        
        const point = path.getPointAtLength((progress / 100) * pathLength);
        
        circle.setAttribute('cx', point.x);
        circle.setAttribute('cy', point.y);
    }
    
    setInterval(moveCircle, 16);
});
