function returnResultWithoutSort() {
    var mineArray2 = [5, 5, 6, 3, 0.6564, -4534, -56, 0.5434, 65, 6456, 4334,1, 543, -435, 435.435, 423.231232];
    var mineArreyChel2 = [];
    var mineArreyChel3 = [];
    for  (let i=0; i<mineArray2.length; i++){
        if(parseInt(mineArray2[i])>0 && Number.isInteger(mineArray2[i])){
            mineArreyChel2.push(mineArray2[i]);
        }
    }
    var minimal1 = Math.min(...mineArreyChel2);
    var Index = mineArreyChel2.indexOf(Math.min(...mineArreyChel2));
    mineArreyChel3 =mineArreyChel2.slice();
        mineArreyChel2.splice(Index, 1);
    var minimal2 = Math.min(...mineArreyChel2);
    var minimalSum = minimal1 + minimal2;
    document.getElementById('titleOfFunction').innerText = ("Сумма минимальных значений без Sort")
    document.getElementById('outResultSumMin').innerText = ("Исходный массив: " + mineArray2 + '\n' + "Отфильтрованный массив: " + mineArreyChel3 + '\n' + "Первое наименьшее число из массива: " + minimal1 + '\n' + "Второе наименьшее число из массива: " + minimal2 + '\n' + "Сумма нименьших целых положительных чисел массива " + minimalSum);
}