class wave {
    Points = [];
    constructor(x, y, radius,c) {
        this.c=c.current.getContext('2d')
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.angle = 0.01;
        this.angle2 = 0.02;
        this.radiusChange = this.radius;
        this.originX = this.x;
        this.originY = this.y;
        this.n = 5;
        this.WaveArr = [];
        this.move = 0;
    }
    draw(){
        this.c.beginPath();
        this.c.lineWidth = 2;
        this.c.moveTo(0,0);
        this.c.lineTo(this.x, this.y);
        this.c.stroke();
      }
       
    update(c) {
        c.translate(200, 300);
        let x = 0;
        let y = 0;
      
        for (let i = 0; i < this.n; i++) {
            let prevX = x;
            let prevY = y;

            c.beginPath();
            let n = i * 2 + 1;
            this.angle += 1;
            let radius = (100 * (4 / (n * Math.PI))) / 3;
            x += radius * Math.sin((this.angle * n) / 180);
            y += radius * Math.cos((this.angle * n) / 180);

            c.beginPath();
            c.arc(prevX, prevY, radius, 0, 2 * Math.PI);
            c.fillStyle = "red";
            // c.fill();
            c.stroke();
            /// line to move along circle
            c.beginPath();
            c.lineWidth = 2;
            c.moveTo(prevX, prevY);
            c.lineTo(x, y);
            c.stroke();
        }

        // console.log(y);

        c.translate(300, 0);
        c.beginPath();
        c.lineWidth = 2;
        c.strokeStyle = "yellow";
        c.moveTo(x - 300, y);
        c.lineTo(0, y);
        c.stroke();
        this.Points.push(new points(0, y));

        this.Points.forEach((e) => {
            e.drawPoints(c);
        });
        if (this.Points.length > 0) {
            if (this.Points[0].x > window.innerWidth / 3) {
                this.Points.shift();
            }
            // console.log(this.Points[0].x);
        }
    }
}
class points {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    drawPoints(c) {
        c.beginPath();
        this.x += 1;
        c.arc(this.x, this.y, 1, 0, Math.PI * 2);
        c.strokeStyle = "red";
        c.stroke();
    }
}