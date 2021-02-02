function returnResult() {
    var mineArray = [1, 5, 5, 6, 3, 0.6564, -4534, -56, 0.5434, 65, 6456, 4334];
    var mineArreyChel = [];
    for  (let i=0; i<mineArray.length; i++){
        if(parseInt(mineArray[i])>0){
            mineArreyChel.push(mineArray[i]);
        }
    }
    mineArreyChel.sort(function(a,b){
        return a-b})
    var minimalSum = mineArreyChel[0] + mineArreyChel[1];
    document.getElementById('titleOfFunction').innerText = ("Сумма минимальных значений с применением Sort")
    document.getElementById('outResultSumMin').innerText = ("Исходный массив: " + mineArray + '\n' + "Отфильтрованный массив: " + mineArreyChel + '\n' + "Первое наименьшее число из массива: " +mineArreyChel[0] + '\n' + "Второе наименьшее число из массива: " +  mineArreyChel[1] + '\n' + "Сумма нименьших целых положительных чисел массива " + minimalSum);
}
