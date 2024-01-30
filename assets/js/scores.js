const highscores = document.querySelector('#highscores');
const clear = document.querySelector('#clear');

dataFilling();

//player display function
function dataFilling() {
    
    var storedPlayers = JSON.parse(localStorage.getItem("players"));

    if (storedPlayers !== null) {
        
        storedPlayers.forEach((player) => {

            li = document.createElement('li');
            li.innerHTML = `${player.name + ' - ' + player.time}`;

            highscores.append(li);

        });
    };
};