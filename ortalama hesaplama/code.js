function hesaplama(){
    let not1=document.getElementById("not1").value
    let not2=document.getElementById("not2").value
    let perfor=document.getElementById("per").value
    let sonuc =(Number(not1)+Number(not2)+Number(perfor))/3
    console.log(sonuc)
    document.body.remove
    if(sonuc>=50){
        document.getElementById("sonucek").innerHTML="İYİ YIRTIN   ortalama:" + sonuc.toFixed(1)
        document.body.style.backgroundColor="green"

    }
    else{
        document.getElementById("sonucek").innerHTML="bravo sınıfta kaldın  ortalama:" + sonuc.toFixed(1)
        document.body.style.backgroundColor="red"
    }

    
}
function sıfır(){
    document.body.style.backgroundColor="white"
    document.getElementById("sonucek").innerHTML=""

}