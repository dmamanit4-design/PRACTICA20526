
function factorial(n){
    let f=1;
        for (let i=1;i<=n;i++){
            f=f*i;
        }
            return f
        }
       
function comb(){
    let a = parseInt( document.getElementById("n1").value);
    let b = parseInt( document.getElementById("n2").value);
    let c=a-b
    if (b > a) {
        document.getElementById('res').innerHTML = "Error: 'B' no puede ser mayor que 'A'";
        return;}
        if (a < 0 || b < 0) {
        document.getElementById('res').innerHTML = "Error: A y B deben ser  positivos";
        return;}
    let fdea=factorial(a);
    let fdeb=factorial(b);
    let fdec=factorial(c);
    let combinar = fdea/(fdeb*fdec);
    document.getElementById('res').innerHTML=combinar;
    }