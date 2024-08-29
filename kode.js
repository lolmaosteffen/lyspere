function skruPå() {
    document.getElementById("lyspære").style.backgroundColor = 'yellow';
    document.getElementById("tekst").innerHTML = "Nå er lyspæra på!";
    document.getElementById("buttons").innerHTML = /*HTML*/`
        <button id="lysbryter" onclick="skruAv()">Av</button>`;
}
function skruAv() {
    document.getElementById("lyspære").style.backgroundColor = 'grey';
    document.getElementById("tekst").innerHTML = "Nå er lyspæra av!";
    document.getElementById("buttons").innerHTML = /*HTML*/`
        <button id="lysbryter" onclick="skruPå()">På</button>`;
}