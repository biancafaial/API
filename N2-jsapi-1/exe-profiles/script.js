const app = document.getElementById('autores');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const request = new XMLHttpRequest();

request.open('GET', 'https://randomuser.me/api/?results=10', true)

request.onload = function(){
    const data = JSON.parse(this.response);
    console.log(data)

        for(let i=0; i <data.results.length; i++){
            let autor = data[i];
            const card =  document.createElement('div')
            card.setAttribute('class','card');



        }
}


    
request.send();