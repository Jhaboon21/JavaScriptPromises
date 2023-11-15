let baseURL = "http://numbersapi.com";
let favorite = 4;

// part 1.1
$.getJSON(`${baseURL}/${favorite}?json`).then(data => { 
    console.log(data); 
});

// part 1.2
let multipleFavorite = [1,2,3];
$.getJSON(`${baseURL}/${multipleFavorite}?json`).then(data => {
    console.log(data);
});

// part 1.3
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favorite}?json`);
    })
).then(facts => {
    facts.forEach(data => 
        $("body").append(`<p>${data.text}<p>`));
});