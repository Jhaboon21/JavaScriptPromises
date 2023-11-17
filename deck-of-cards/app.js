$(function() {
    let baseURL = "https://deckofcardsapi.com/api/deck"

    // part 2.1
    // $.getJSON(`${baseURL}/new/draw/`).then(data => {
    //     let { suit, value } = data.cards[0];
    //     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    // });
    async function part1() {
        let data = await $.getJSON(`${baseURL}/new/draw/`);
        let { suit, value } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }
    part1();

    // part 2.2
    // let firstCard = null;
    // $.getJSON(`${baseURL}/new/draw/`)
    //     .then(data => {
    //         firstCard = data.cards[0];
    //         let deckId = data.deck_id;
    //         return $.getJSON(`${baseURL}/${deckId}/draw`);
    //     })
    //     .then(data => {
    //         let secondCard = data.cards[0];
    //         [firstCard, secondCard].forEach(function(card) {
    //             console.log(
    //                 `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
    //             );
    //         });
    //     });
    async function part2() {
        let firstCard = await $.getJSON(`${baseURL}/new/draw/`)
        let deckId = firstCard.deck_id;
        let secondCard = await $.getJSON(`${baseURL}/${deckId}/draw`)
        [firstCard, secondCard].forEach(card => {
            let { suit, value } = card.cards[0];
            console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });
    }
    part2()

    // part 2.3
    // let deckId = null;
    // let $btn = $('button');
    // let $cardArea = $('#card-area');

    // $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    //     deckId = data.deck_id;
    //     $btn.show();
    // });

    // $btn.on('click', function() {
    //     $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
    //         let cardSrc = data.cards[0].image;
    //         let angle = Math.random() * 90 - 45;
    //         let randomX = Math.random() * 40 - 20;
    //         let randomY = Math.random() * 40 - 20;
    //         $cardArea.append(
    //             $('<img>', {
    //                 src: cardSrc,
    //                 css: {
    //                     transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
    //                 }
    //             })
    //         );
    //         if (data.remaining === 0) $btn.remove();
    //     });
    // });
    async function part3() {
        let $btn = $('button');
        let $cardArea = $('#card-area');
        let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
        $btn.show().on('click', async function() {
            let cardData = await $.getJSON(`${baseURL}/${deckId}/draw/`)
            let cardSrc = cardData.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append(
                $('<img>', {
                    src: cardSrc,
                    css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (cardData.remaining === 0) $btn.remove();
        });
    }
    part3();

});