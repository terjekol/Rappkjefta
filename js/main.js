let model = {
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ',
    currentLetter: null,
    categories: `spill
    navn
    guttenavn
    jentenavn
    geografisk stedsnavn
    noe jeg kan se
    noe jeg ikke kan se
    land
    by
    bilselskap
    transportmiddel
    matrett
    noe man kan spise
    et verb
    en bokstav i alfabetet
    et adjektiv`.split("\n"),
    currentCategory: null
};

let pickButton = document.getElementById("pick");
pickButton.addEventListener("click", randomStuff);

function show() {
    let randNum = document.getElementById('randNum');
    let randomCategory = document.getElementById("randCategory");
    randNum.innerHTML = model.currentLetter;
    randomCategory.innerHTML = model.currentCategory;
}

function randomLetter() {
    let index = Math.floor(Math.random() * model.letters.length);
    model.currentLetter = model.letters[index];
}

function randomStuff(){
    randomLetter();
    randomCategory();
    show();
}

function randomCategory(){
    let index = Math.floor(Math.random() * model.categories.length);
    model.currentCategory = model.categories[index];
}

randomStuff();