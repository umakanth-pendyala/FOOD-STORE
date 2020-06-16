var totalItems = [0, 0, 0, 0];
const itemCost = [40, 50, 70, 100];


const addItem = (index, cost) => {
    totalItems[index] += 1;
}

const subractItem = (index, cost) => {
    if (totalItems[index] > 0) totalItems[index] -= 1;
}

const updateUi = (operation, itemIndex) => {
    if (operation == 'addition') {
        console.log(itemIndex);
        var item = document.querySelectorAll('.number h3')[itemIndex];
        // item.value = totalItems[itemIndex];
        item.innerHTML = totalItems[itemIndex];
    } else if (operation == 'subraction') {
        console.log(itemIndex);

        var item = document.querySelectorAll('.number h3')[itemIndex];
        // item.value = totalItems[itemIndex];
        item.innerHTML = totalItems[itemIndex];

    }
}

document.querySelectorAll('.fa-minus-circle')[0].addEventListener('click', () => {
    subractItem(0, itemCost[0]);
    updateUi('subraction', 0);
})
document.querySelectorAll('.fa-minus-circle')[1].addEventListener('click', () => {
    subractItem(1, itemCost[1]);
    updateUi('subraction', 1);
})
document.querySelectorAll('.fa-minus-circle')[2].addEventListener('click', () => {
    subractItem(2, itemCost[2]);
    updateUi('subraction', 2);
})
document.querySelectorAll('.fa-minus-circle')[3].addEventListener('click', () => {
    subractItem(3, itemCost[3]);
    updateUi('subraction', 3);
})

document.querySelectorAll('.fa-plus-circle')[0].addEventListener('click', () => {
    addItem(0, itemCost[0]);
    updateUi('addition', 0);
})
document.querySelectorAll('.fa-plus-circle')[1].addEventListener('click', () => {
    addItem(1, itemCost[1]);
    updateUi('addition', 1);
})
document.querySelectorAll('.fa-plus-circle')[2].addEventListener('click', () => {
    addItem(2, itemCost[2]);
    updateUi('addition', 2);
})
document.querySelectorAll('.fa-plus-circle')[3].addEventListener('click', () => {
    addItem(3, itemCost[3]);
    updateUi('addition', 3);
})





const caliculateFinalCost = () => {

}



// for (var i = 0; i < document.querySelectorAll('.fa-minus-circle').length; i++) {
//   document.querySelectorAll('.fa-minus-circle')[i].addEventListener('click', () => {
//       subractItem(i, itemCost[i]);
//       updateUi('subraction', i);
//   })

//   document.querySelectorAll('.fa-plus-circle')[i].addEventListener('click', () => {
//       addItem(i, itemCost[i]);
//       updateUi('addition', i);
//   })
// }