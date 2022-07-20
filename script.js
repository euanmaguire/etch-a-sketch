var grid = document.createElement('div');
grid.className = 'grid';
grid.id = 'grid';
document.getElementsByTagName('body')[0].appendChild(grid);

for(let i = 1; i < 17; i++){
    var column = document.createElement('div');
    column.className = 'column';
    column.id = `column${i}`;
    document.getElementById("grid").appendChild(column);
    for(let j = 0; j < 16; j++){
        var block = document.createElement('div');
        block.className = "block";
        block.style.width = `${50/16}vh`
        block.style.height = `${50/16}vh`
        document.getElementById(`column${i}`).appendChild(block);
    }
}

const blocks = document.querySelectorAll(".block");
blocks.forEach(block => block.addEventListener('mouseover', function() {
    block.classList.add("hover"); }));


function changeGridSize() {
    let newGridSize = prompt("What size grid do you want ?");
    
    if(parseInt(newGridSize) > 0 && parseInt(newGridSize) <= 100){
        const blocks = document.querySelectorAll(".block");
        blocks.forEach(block => block.remove());
        const columns = document.querySelectorAll(".column");
        columns.forEach(column => column.remove());

        for(let i = 1; i < parseInt(newGridSize) + 1; i++){
            var column = document.createElement('div');
            column.className = 'column';
            column.id = `column${i}`;
            document.getElementById("grid").appendChild(column);
            for(let j = 0; j < parseInt(newGridSize); j++){
                var block = document.createElement('div');
                block.className = "block";
                block.style.width = `${50/parseInt(newGridSize)}vh`
                block.style.height = `${50/parseInt(newGridSize)}vh`
                document.getElementById(`column${i}`).appendChild(block);
            }
        }

        document.querySelectorAll(".block").forEach(block => block.addEventListener('mouseover', function() {
            block.classList.add("hover"); }));
    }
    else{
        alert("Please choose an integer between 0 and 100");
    }
}