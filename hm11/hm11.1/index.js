let tablet = document.querySelector('.tablet');

function createTable(count) {
    for (let i = 0; i <= count; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'row';
        for (let j = 0; j <= count; j++) {
            let newBox = document.createElement('div');
            newBox.className = 'box';
            if(i===0 && j===0){
                newBox.innerHTML= ' ';
                newRow.appendChild(newBox);
            } else if (i ===0 || j===0){
                newBox.innerHTML= j || i;
                newBox.style.color = 'orange';
                newBox.style.fontWeight = 'bold';
                newRow.appendChild(newBox);
            }else {
                if (i === j){
                    newBox.style.color = 'red';
                }
                newBox.innerHTML = i * j;
                newRow.appendChild(newBox);
            }
        }
        tablet.appendChild(newRow);
    }
}

createTable(10);