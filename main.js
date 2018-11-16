
const wordInput = document.querySelector("#word-input");



// console.log(str)

const checker = document.querySelector('#checker')
const answer = document.querySelector('#answer')

checker.addEventListener('click', palindrome);

function palindrome() {
    let str = wordInput.value;

    let regex = str.replace(/[\W_]/g, '').toLowerCase();
    console.log(regex === regex.split('').reverse().join(''))
    console.log(str)
    answer.textContent = (regex === regex.split('').reverse().join(''))

}

// let ans = palindrome('racecar')
// console.log(ans)


