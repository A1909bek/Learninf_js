//first way
// for (i = 1; i<19 ;i++){
//     console.log(i); 
// }

//second way
// let i = 1
// do{
// console.log(i)
// i++
// }while(i<=15
// )

//third way
// let i = 5;
// while(i<24){
//     console.log(i);
//     i++
 
// }

// let answers = []
// let questions = [
//     'what is your name',
//     'how old are you',
//     'how the day been'
// ]
// for(i=0;i<questions.length;i++){
//     answers[i]=prompt(questions[i])
// }
// console.log(answers);


// let answers = []
// let questions = [
//     'what is your name',
//     'how old are you',
//     'how the day been'
// ]
// let i = 0
// do{
//     answers[i]=prompt(questions[i])
//     console.log(answers)
//     i ++
// }while(i<questions.length)

let answers = []
let questions = [
    'what is your name',
    'how old are you',
    'how the day been'
]
let i = 0
while(i<questions.length){
    answers[i]= prompt(questions[i])
    console.log(answers);
    i ++
}

