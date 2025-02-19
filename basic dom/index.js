const container = document.getElementById("container");
const buttons = document.querySelectorAll("button");


const imRed = document.createElement('p');
imRed.textContent = "Hey, I'm red.";
imRed.style.color = 'red';

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = '1px solid black';

const h1 = document.createElement('h1');
h1.textContent = "Hey, I'm in a div.";


const meToo = document.createElement('p');
meToo.textContent = "Me too!";

div.append(h1, meToo);


container.append(imRed, div);




// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
  

