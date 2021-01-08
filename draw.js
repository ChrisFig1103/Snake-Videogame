//Guarda en la variable "canvas", la variable del html "canvas" con un selector 
const canvas = document.querySelector(".canvas");
//Ahora tienes el contexto de renderizado 2D para un canvas y puedes dibujar en él.
const ctx = canvas.getContext("2d");
const scale= 10;
const rows = canvas.height / scale;
const columns = canvas.height / scale;

var snake;

(function setup(){
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
  

    window.setInterval(() =>{
        ctx.clearRect(0,0,canvas.width,canvas.height);
     
        snake.update();
        snake.draw();
        fruit.draw();

        if(snake.eat(fruit)){
             fruit.pickLocation();
        }
       
        snake.checkCollision();
        document.querySelector(".score").innerText = snake.total;

    },250);

}());

window.addEventListener('keydown',((evt) =>{
    const direction = evt.key.replace('Arrow','');
    snake.changeDirection(direction);
}));