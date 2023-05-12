var list= [];
function getE(id){
    return document.getElementById(id);
}
getE("btnThemSo").onclick = function(){
    var number = +getE("addNumber").value;
    list.push(number);
    getE("footer-card").innerHTML = list;
}
getE("btnTongSoDuong").onclick = function(){
    var total = 0;
    for(var i = 0;i < list.length;i++){
        if(list[i] > 0){
            total += list[i];
        }
    }
    getE('footer-card').innerHTML ="Tổng số dương là: "+ total;
}
getE("btnDemSoDuong").onclick = function(){
    var count= 0;
    for(var i = 0;i < list.length;i++){
        if(list[i] >= 0){
            count++;
        }
    }
    getE('footer-card').innerHTML ="Đếm số dương: "+ count;
}
getE("btnSoNhoNhat").onclick = function(){
    var min = list[0];
    for(var i = 0;i < list.length;i++){
        if(list[i] < min){
            min = list[i];
        }
    }
    getE('footer-card').innerHTML ="Số nhỏ nhất là: "+ min;
}
getE("btnSoDuongNhoNhat").onclick = function(){
    var min = list[0];
    for(var i = 0;i < list.length;i++){
        if(list[i] >= 0 && list[i] < min){
            min = list[i];
        }
    }
    getE('footer-card').innerHTML ="Số nhỏ nhất là: "+ min;
}
getE("btnSoChanCuoiCung").onclick = function(){
    let lastNum = null;
    for(var i = 0;i < list.length;i++){
        const number = list[i];
        if(number % 2 === 0){
            lastNum = number;
        }
    }
    getE("footer-card").innerHTML = "Số chẵn cuối cùng là: " + lastNum;
}
getE("btnDoiCho").onclick = function(){
    var index_1= +getE("num-1").value -1;
    var index_2= +getE("num-2").value -1;
    var temp = list[index_1];
    list[index_1]= list[index_2];
    temp = list[index_2];
    getE("footer-card").innerHTML = "Sau khi đổi vị trí mảng có giá trị là: " + list;
}
getE("btnSapXepTang").onclick= function(){
    for(var i = 0;i< list.length;i++){
        for(var j = i + 1;j < list.length;j++){
            if(list[i] > list[j]){
                var temp = list[j];
                list[j] = list[i];
                list[i] = temp;
            }
        }
    }
    getE("footer-card").innerHTML = "Thứ tự tăng dần là: "+ list;
}
getE("btnSNT").onclick = function(){
    var primeNumber;
    for(var i = 0; i < list.length;i++){
        var isPrime = true;
        for(var j = 2;j < list.length;j++){
            if(list[i] % j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeNumber = list[i];
            break;
        }
    }
    getE("footer-card").innerHTML = "SNT đầu tiên là: "+ primeNumber;

}
getE("btnDemSoNguyen").onclick = function(){
    var count = 0;
    for(var i = 0; i < list.length;i++){
        if(Number.isInteger(list[i])){
            count++;
        }
    }
    getE("footer-card").innerHTML = "Số nguyên là: "+count;

}
getE("btnSoDuongAm").onclick = function(){
    var countDuong = 0;
    var countAm = 0;
    for(var i = 0; i < list.length;i++){
        if(list[i] > 0){
            countDuong++;
        }
        else if(list[i] < 0){
            countAm++;
        }
     } 
      if(countDuong > countAm){
        getE("footer-card").innerHTML = "Số dương > Số âm";
        }
        else if(countDuong < countAm){
        getE("footer-card").innerHTML = "Số dương < Số âm"; 
        }
        else{
            getE("footer-card").innerHTML = "Số dương = Số âm"; 
       
        }
        
}