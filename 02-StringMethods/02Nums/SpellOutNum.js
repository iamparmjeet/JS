const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
    // Write your solution here
    
    
    let thousand = ['', 'thousand', 'million', 'billion', 'trillion']
    let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    let twenty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


    if (n < 100) {
        n = n == 1 ? "One" : n;
        n = n == 2 ? "Two" : n;
    }

    console.log(thousand)
    console.log(hundred)
    return n
	// return thousands
}

console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`)