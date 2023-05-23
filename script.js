
const form = document.getElementById('myForm');
form.addEventListener("submit", validateWave);


function validateWave()
{  
    const waveInput = document.getElementById('number');
    const wave = waveInput.value;
    alert(output(wave));
}

function output(wavenumber)
{
    if(wavenumber <= 0) return "No existe man";
    else if(wavenumber == 1) return "Abriste con 5 workers.";
    else if(wavenumber == 2) return "Abriste con 5 workers.";
    else if(wavenumber == 3) return "Sos un brute encubierto.";
    else if(wavenumber == 4) return "Si pudieses pegarle un tiro a los jugadors de Pyro lo harias.";
    else if(wavenumber == 5) return "Abriste con 5 workers.";
    else if(wavenumber == 7) return "Que mal momento para estar jugando Yolo.";
    else if(wavenumber == 8) return "Te gusta boostear a los veteran sin razon alguna.";
    else if(wavenumber == 9) return "Ni en pedo matas al Granddaddy.";
    else if(wavenumber == 10)return "Tu oponente tiene 2 Trinity Archers y le estas mandando igual.";
    else if(wavenumber == 11) return "Estas por mandar y no leiste los spells.";
    else if(wavenumber == 12) return "Querias mandar en 11 y colgaste.";
    else if(wavenumber == 13) return "Te estas por patinar el venture en trabajadores en negro.";
    else if(wavenumber == 14) return "Mira ese undercut papá.";
    else if(wavenumber == 15) return "QUE JUEGO DE MIERDA (Jesus 2023).";
    else if(wavenumber == 16) return "God no?.";
    else if(wavenumber == 17) return "Vos sos de los que pingean el power score";
    else if(wavenumber == 18) return "Siempre que un grupo de rugbiers caga a piñas a alguien decis que es un accidente aislado y que no tiene nada que ver con el rubgy.";
    else if(wavenumber == 19) return "Re si, son sapos.";
    else if(wavenumber == 20) return "Como odias el AOE.";
    else if(wavenumber == 21) return "Hace cuanto que estas ahorrando man?.";
    else if(wavenumber >= 22) return "POSTA HACE CUANTO QUE ESTAS AHORRANDO MAN?";
}