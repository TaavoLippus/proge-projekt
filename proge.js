let vabandused =["ei vviitsind eriti", "koer suri ära", "oli hambaarst"]
let PõhjusetaPuudumine = true;

function Genereeri(){
if(PõhjusetaPuudumine=true){
let indeks = Math.floor(Math.random() * vabandused.length);
let vabandus = "Puudusin, sest" + " " + vabandused[indeks];
document.getElementById("vabandustekst").innerHTML = vabandus;

}
else{
console.log(":))))))))))))"); 
}
}

document.addEventListener('keydown', function(event){
    if(event.keyCode == 32) {
        Genereeri();
    }
})