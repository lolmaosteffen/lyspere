function skruPå() {
    document.getElementById("lyspære").style.backgroundColor = 'yellow';
}
function skruAv() {
    document.getElementById("lyspære").style.backgroundColor = 'grey';
}
let lysPærePå;
let lysPæreAv;

if (document.getElementById("lyspære").style.backgroundColor = 'yellow') {
    lysPærePå = true
    lysPæreAv = false
}
if (document.getElementById("lyspære").style.backgroundColor = 'grey') {
    lysPærePå = false
    lysPæreAv = true
}


if (lysPærePå = true) {
    document.getElementById("buttons").innerHTML = /*HTML*/`
    <button id="lysbryter" onclick="skruAv()">Skru av</button>`;
    document.getElementById("tekst").innerHTML = "Nå er lyspæra på!"
}
if (lysPæreAv = true) {
    document.getElementById("buttons").innerHTML = /*HTML*/`
        <button id="lysbryter" onclick="skruPå()">Skru på</button>`;
    document.getElementById("tekst").innerHTML = "Nå er lyspæra av!"
}