function temp(){
    let a = parseInt( document.getElementById("To").value);
    let b = parseInt( document.getElementById("Ts").value);
    let c = parseFloat( document.getElementById("k").value);
    let d = parseInt( document.getElementById("t").value);
    let f = Math.round(b+(a-b)*Math.exp(-c*d));
    document.getElementById('res').innerHTML=f;
    }