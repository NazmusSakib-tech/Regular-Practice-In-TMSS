function getLetter(s) {
    let letter;
    // Write your code here
    const exp = s[0];
    
    switch
    (exp) {
     
    case
   'a':
   letter = 'A';
        break;
    case
    'b':
     letter= "B";
        break;    
    case
    'h':
     letter= "C";
        break;    
    case
    'n','z':
     letter= "D";
        break;    
    }
    return letter;
}



    const s = ['f','e','i','o','u'];
    console.log(getLetter(s));
