let kvoodid =["Iga hetk kui sa ei jookse, ma jõuan sulle lähemale", "KUS ON SINU MOTIVATSIOON?", "Grindi iga päev, ja ka sina võid näha välja nii hea", "Kui ma viskan su lihaveskisse, ja ainuke asi mis sinust järele jääb on sinu silmamuna, siis sa oled tõenäoliselt surnud", "Burunyuu :3"]
let pildid = ["Peter_Griffin.png", "vergil.jpg", "kitsuragi_cube.jpg", "jerm.jpg", "neko-arc.jpg"]
mottMadal = true;

function Genereeri(){
if(mottMadal=true){
let indeks = Math.floor(Math.random() * kvoodid.length);
let kvoot = kvoodid[indeks];
let pilt = "pildid/"+pildid[indeks];
document.getElementById("kvoot").innerHTML = '"' + kvoot + '"';
document.getElementById("pilt").src=pilt;}
else{
console.log(":))"); }}

document.addEventListener('keydown', function(event){
    if(event.keyCode == 32) {
        Genereeri();}})