let x = 1;
let y = 4;
let z = -1;

if (x < 2) {
    document.getElementById('para1').innerText = 'x est inférieure à 2';
}

if (y > 3) {
    document.getElementById('para2').innerText = 'y est plus grand que 1';
}

if (z <= 0) {
    document.getElementById('para3').innerText = 'z est in férieure ou égale à 0';
}

if (x < 2 && y > 3 && z <= 0) {
    document.getElementById('para4').innerText = 'Les trois conditions sont vérifié';
}

if (x < 2 && y > 3 || z === -1) {
    document.getElementById('para5').innerText = 'Une des condition et vérifié';
}