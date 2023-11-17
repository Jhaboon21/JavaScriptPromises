let baseURL = "http://numbersapi.com";
let favorite = 4;

// part 1.1
// $.getJSON(`${baseURL}/${favorite}?json`).then(data => { 
//     console.log(data); 
// });

async function part1() {
    let data = await $.getJSON(`${baseURL}/${favorite}?json`);
    console.log(data);
}
part1();

// part 1.2
let multipleFavorite = [1,2,3];
// $.getJSON(`${baseURL}/${multipleFavorite}?json`).then(data => {
//     console.log(data);
// });

async function part2() {
    let data = await $.getJSON(`${baseURL}/${multipleFavorite}?json`);
    console.log(data);
}
part2();

// part 1.3
// Promise.all(
//     Array.from({ length: 4 }, () => {
//         return $.getJSON(`${baseURL}/${favorite}?json`);
//     })
// ).then(facts => {
//     facts.forEach(data => 
//         $("body").append(`<p>${data.text}</p>`));
// });

async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favorite}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();