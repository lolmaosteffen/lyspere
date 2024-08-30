// function skruPå() {
//     document.getElementById("lyspære").style.backgroundColor = 'yellow';
// }
// function skruPå() {
//     document.getElementById("tekst").innerHTML = /*HTML*/`
//     <div id="tekst">Nå er lyset av!</div>`;
//     document.getElementById("lyspære").style.backgroundColor = `yellow`;
//     document.getElementById("buttons").innerHTML = /*HTML*/`
//     <button id="lysbryter" onclick="skruAv()">Skru på</button>`;
// }
// function skruAv() {
//     document.getElementById("tekst").innerHTML = /*HTML*/`
//     <div id="tekst">Nå er lyset på!</div>`;
//     document.getElementById("lyspære").style.backgroundColor = `grey`;
//     document.getElementById("buttons").innerHTML = /*HTML*/`
//     <button id="lysbryter" onclick="skruPå()">Skru på</button>`;
// }
function skruPå(text, color) {
    document.getElementById("tekst").innerHTML = /*HTML*/`
    <div id="tekst">${createTekstPå(text)}</div>`;
    document.getElementById("lyspære").style.backgroundColor = `${createColorAv(color)}`;
    document.getElementById("buttons").innerHTML = /*HTML*/`
     <button id="lysbryter" onclick="skruAv('Nå er lyset av!', 'grey')">Skru av</button>`;
}
function skruAv(text, color) {
    document.getElementById("tekst").innerHTML = /*HTML*/`
    <div id="tekst">${createTekstAv(text)}</div>`;
    document.getElementById("lyspære").style.backgroundColor = `${createColorPå(color)}`;
    document.getElementById("buttons").innerHTML = /*HTML*/`
    <button id="lysbryter" onclick="skruPå('Nå er lyset på!', 'yellow')">Skru på</button>`;
}
function createTekstAv(text) {
    return document.getElementById("tekst").innerHTML = /*HTML*/`
    <div id="tekst">${text}</div>`
}
function createTekstPå(text) {
    return document.getElementById("tekst").innerHTML = /*HTML*/`
    <div id="tekst">${text}</div>`
}
function createColorPå(color) {
    return document.getElementById("lyspære").style.backgroundColor = `${color}`;
}
function createColorAv(color) {
    return document.getElementById("lyspære").style.backgroundColor = `${color}`;
}
// let lysPærePå;
// let lysPæreAv;

// if (document.getElementById("lyspære").style.backgroundColor = 'yellow') {
//     lysPærePå = true
//     lysPæreAv = false
// }
// if (document.getElementById("lyspære").style.backgroundColor = 'grey') {
//     lysPærePå = false
//     lysPæreAv = true
// }


// if (lysPærePå = true) {
//     document.getElementById("buttons").innerHTML = /*HTML*/`
//     <button id="lysbryter" onclick="skruAv()">Skru av</button>`;
// }
// if (lysPæreAv = true) {
//     document.getElementById("buttons").innerHTML = /*HTML*/`
//         <button id="lysbryter" onclick="skruPå()">Skru på</button>`;
//     document.getElementById("tekst").innerHTML = "Nå er lyspæra av!"
// }