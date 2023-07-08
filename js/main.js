let model = {
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ',
    currentLetter: null,
    categories: `spill
    Navn
    Guttenavn
    Jentenavn
    Geografisk stedsnavn
    Noe jeg kan se
    Noe jeg ikke kan se
    Land
    By
    Bilselskap
    Transportmiddel
    Matrett
    Noe man kan spise
    Et verb
    En bokstav i alfabetet
    Et adjektiv
    Frukt
    Grønnsak
    Musiker
    Film
    Dyreart
    Idrettsutøver
    Bygning
    Filmkarakter
    Skuespiller
    Kjendis
    Superhelt
    Bilmakro
    Sport
    Drikke
    Musikkgenre
    Instrument
    Yrke
    TV-serie
    Landemerke
    Vitenskapelig begrep
    Musikkband
    Oppfinnelse
    Høytidsdag
    Måned
    Møbel
    Dyr i Afrika
    Matvaremerke
    Nettsted
    Videospill
    Motevaremerke
    Vitenskapelig fag
    Kjæledyr
    Matrett fra Asia
    Musikkalbum
    Idrettsspill
    Romanforfatter
    Tegneseriefigur
    Kjærlighetsfilm
    Politisk leder
    Teaterstykke
    Skoledisiplin
    Matvare i boks
    TV-kokk
    Verdensrekord
    Musikkfestival
    Friluftsaktivitet
    Naturfenomen
    Bokanmelder
    Vokalgruppe
    Fotograf
    Bryggeri
    Kjæledyrsside
    TV-show
    Romanfigur
    Matlagingsteknikk
    Nobelprisvinner
    Automerket
    Legendarisk idrettslag
    Romvesen
    Sjakkstykke
    Kjent maleri
    Reisemål
    Vinprodusent
    Oppdagelsesreisende
    Klesdesigner
    Bokforfatter
    Fotballturnering
    Politisk parti
    Skogdyr
    Stjernetegn
    Vintype
    Filmregissør
    Dataprogram
    Vitenskapelig oppdagelse
    Musikkpris
    Skummelt sted
    Barnebokforfatter
    Sangtekst
    Historisk hendelse
    Dansesjanger
    Eksotisk frukt
    TV-realityshow
    Verdensleder
    Kjøkkenredskap
    Fotballspiller
    Verdenshav
    Fototeknikk
    Skiskisted
    Bilmodell
    Artist i Grammy Awards
    Bokstav i navnet
    Astrologisk tegn
    Prisvinnende film
    Bysymbol
    Mode designer
    Populært nettsted
    Gresk gud
    Oppdagelsesreisendes reisemål
    Hjemmedyrket frukt
    Slangord`.split("\n"),
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
