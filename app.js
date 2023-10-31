const input = document.querySelector('#input');
const button = document.querySelectorAll('button');

let result = '';

[...button].forEach(button=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML === 'C') {
            result = ''
            input.value = result
        }
        else if(e.target.innerHTML === 'DEL'){
            result = result.substring(0,result.length-1)
            input.value = result
        }
        else if (e.target.innerHTML === '=') {
            result = eval(result)
            input.value = result
        }
        else{
            result+= e.target.innerHTML;
            input.value = result;
        };
    });
});