function joinFunction() {
    let number=prompt("Import number");
    let string=number.toString();
    let array=[string[0]];
    for(let i=1;i<string.length;i++)
    {
        if((string[i-1]%2==0) && (string[i]%2==0))
        {
            array.push('-',string[i]);
        }
        else {
            array.push(string[i]);
        }
    }
    alert(array.join(''));
}