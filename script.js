console.log('hello oh')

const wrapper = document.querySelector('.wrapper');
console.log('wrapper', wrapper);

function createCard(cardObj) {
    return `
    <div class="card">
        <div class="header">
            <img class="header-image" src="http://localhost:3000/avatar.png" alt="avatar">
            <div class="header-title">
                ${cardObj.author}
            </div>
        </div>
            <div class="image-wrapper">
            <img class="image" src="${cardObj.download_url}" alt="image">
        </div>
        <div class="content">
            The definition of a prompt is a cue given to someone to help him remember what to say, or is something that causes another event or action to occur.
        </div>
    </div>
    `;  
}

fetch('https://picsum.photos/v2/list')
   .then(function(response) {
       return response.json();
})
   .then((data) => {
    console.log('data', data);

    let cardList = '';

    data.forEach((cardObj) => {
        cardList = cardList + createCard(cardObj)
    })

    
    wrapper.innerHTML = cardList;
 
    let msnry;
    setTimeout(() => { 
        msnry = new Masonry(wrapper); 
        console.log('msnry', msnry);
    }, 1000)

    setTimeout(() => {
        msnry.reloadItems();
    }, 2000)
});