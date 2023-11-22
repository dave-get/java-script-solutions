//   Exersice 1

    //18
    let sentence = "You cannot end a sentence with because because because is a conjunction";
    var word = sentence.lastIndexOf("because");
    console.log(word);

    //25
    let str = '30 Days Of javaScript ';
    console.log(str.repeat(2));

    //Exersice 2

    //6
    let sent = 'I hope this course is not full of jargon'
    var check = sent.includes('jargon');
    if (check) {
        console.log('there is..');
    } else {
        console.log('there is no!');
    }

    //11
    let list = [1, 2, 3, 4, 5]
    let num = `1 1 1 1 1\n2 1 2 ${Math.pow(list[1], 2)} ${Math.pow(list[1], 3)}\n3 1 3 ${Math.pow(list[2], 2)} ${Math.pow(list[2], 3)}\n4 1 4 ${Math.pow(list[3], 2)} ${Math.pow(list[3], 3)}\n5 1 5 ${Math.pow(list[4], 2)} ${Math.pow(list[4], 3)}`;
    console.log(num);

    //12
    let phrase = 'You cannot end a sentence with because because because is a conjunction';
    let start = phrase.indexOf('because');
    console.log(phrase.substr(start, 23));

    //Exersice 3
    let lis = [];
    let count = 'You cannot end a sentence with because because because is a conjunction';
    let because = lis.push(count.match(/because/gi));
    console.log(lis[0].length);