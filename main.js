    const area = document.getElementById('area');
    const contentWrapper = document.getElementById('content');
    const modalResult = document.getElementById('modal-result-wrapper');
    const overlay = document.getElementById('overlay');
    const btnClose = document.getElementById('btn-close');
    let move = 0;
    let result;

    area.addEventListener('click', e => {
        if (e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
        check();
        }
    })

    const check = () => {
        const boxes = document.getElementsByClassName('box');
        const arr = [
            [0,1,2],
            [0,4,8],
            [0,3,6],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
        ];
        
        for(let i = 0; i < arr.length; i++) {
            if(
                boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
            ) {
                result = 'крестики';
                prepareResult(result);
                console.log(result);
            } else if (
                boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'
            ) {
                result ='нолики';
                prepareResult(result);
                console.log(result);
            } else if (move==9){
                counter ='..Что? У нас ничья!';
                prepareResult(counter);
                console.log(result);
                console.log(counter);
            }
    }  
    }
    

    const prepareResult = winner => {
        contentWrapper.innerHTML = `Победили ${winner} !`;
        modalResult.style.display = 'block';
    }

    const closeModal = () => {
        modalResult.style.display = 'none';
        location.reload();
    }

    overlay.addEventListener('click', closeModal);
    btnClose.addEventListener('click', closeModal);
    