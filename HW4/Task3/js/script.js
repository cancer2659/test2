function calculateSolianka() {

    var normaMiasaPorc = 65;
    var normaSmMiasaPorc = 45;
    var normaOilPorc = 0.3;
    var normaGarlPorc = 0.45;
    var normaOnionPorc = 0.15;
    var normaTomatPorc = 0.15;
    var normaCucumberPorc = 0.5;
    var normaWaterPorc = 300;

    var calculationMetod = document.getElementById('selectComponent').value;
    var quantityOfSelectedComponent = parseInt(document.getElementById('quantityComponent').value);

    if (isNaN(quantityOfSelectedComponent)) {
        alert('Необходимо заполнить все поля');
    } else {
        if (calculationMetod===document.getElementById('metod1').value){
            selectNPortion (quantityOfSelectedComponent, normaMiasaPorc, normaSmMiasaPorc, normaOilPorc, normaGarlPorc, normaOnionPorc, normaTomatPorc, normaCucumberPorc, normaWaterPorc);
        }
        else if (calculationMetod===document.getElementById('metod2').value){
            selectNMeat (quantityOfSelectedComponent, normaMiasaPorc, normaSmMiasaPorc, normaOilPorc, normaGarlPorc, normaOnionPorc, normaTomatPorc, normaCucumberPorc, normaWaterPorc);
        }
        else if (calculationMetod===document.getElementById('metod3').value){
            selectNSmMeat (quantityOfSelectedComponent, normaMiasaPorc, normaSmMiasaPorc, normaOilPorc, normaGarlPorc, normaOnionPorc, normaTomatPorc, normaCucumberPorc, normaWaterPorc);
        }


}}

function selectNPortion (n, m, sm, oil, g, onion, tomat, cucum, water){
    document.getElementById('outResult').innerText = "Для приготовления " + n + ' порций потребуется: ' +'\n' + '\n' + "Мясо - " + Math.ceil(m*n) + ' гр.;'+'\n' + "Копчености - " + Math.ceil(sm*n) + ' гр.;'+'\n' + "Подсолнечное масло - " + Math.ceil(oil*n) + ' ст.л.;'+'\n'
    + "Зубчик чеснока - " + Math.ceil(g*n) + ' шт.;'+'\n'
        + "Лук - " + Math.ceil(onion*n) + ' шт.;'+'\n'
        + "Томатная паста - " + Math.ceil(tomat*n) + ' ст.л.;'+'\n'
        + "Соленые огурцы - " + Math.ceil(cucum*n) + ' шт.;'+'\n'
        + "Вода - " + Math.ceil(water*n) + ' мл.;'+'\n'
        + 'Соль, перец, пряности - по вкусу';
}
function selectNMeat (n, m, sm, oil, g, onion, tomat, cucum, water){
        let nPorchiy = Math.ceil(n/m);
        document.getElementById('outResult').innerText =
            "Из " + n + ' гр. мяса Вы сможете приготовить ' + nPorchiy + ' порций солянки. ' + '\n'+ '\n'
            + 'Вам так же протребуется: '+
            "Копчености - " + Math.ceil(sm*nPorchiy) + ' гр.;'+'\n' +
            "Подсолнечное масло - " + Math.ceil(oil*nPorchiy) + ' ст.л.;'+'\n'
            + "Зубчик чеснока - " + Math.ceil(g*nPorchiy) + ' шт.;'+'\n'
            + "Лук - " + Math.ceil(onion*n) + ' шт.;'+'\n'
            + "Томатная паста - " + Math.ceil(tomat*nPorchiy) + ' ст.л.;'+'\n'
            + "Соленые огурцы - " + Math.ceil(cucum*nPorchiy) + ' шт.;'+'\n'
            + "Вода - " + Math.ceil(water*nPorchiy) + ' мл.;'+'\n'
        + 'Соль, перец, пряности - по вкусу';
}
function selectNSmMeat (n, m, sm, oil, g, onion, tomat, cucum, water){
    let nPorchiy = Math.ceil(n/sm);
    document.getElementById('outResult').innerText =
        "Из " + n + ' гр. копченостей Вы сможете приготовить ' + nPorchiy + ' порций солянки. ' + '\n'+ '\n'
        + 'Вам так же протребуется: '+
        "Мясо - " + Math.ceil(m*nPorchiy) + ' гр.;'+'\n' +
        "Подсолнечное масло - " + Math.ceil(oil*nPorchiy) + ' ст.л.;'+'\n'
        + "Зубчик чеснока - " + Math.ceil(g*nPorchiy) + ' шт.;'+'\n'
        + "Лук - " + Math.ceil(onion*n) + ' шт.;'+'\n'
        + "Томатная паста - " + Math.ceil(tomat*nPorchiy) + ' ст.л.;'+'\n'
        + "Соленые огурцы - " + Math.ceil(cucum*nPorchiy) + ' шт.;'+'\n'
        + "Вода - " + Math.ceil(water*nPorchiy) + ' мл.;'+'\n'
        + 'Соль, перец, пряности - по вкусу';
}

