const posts = [
    {
        "id": 0,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=24"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postsContainer = document.getElementById('container');

// CICLARE LE IMMAGINI

for (let i = 0; i < posts.length; i++) {

    postsContainer.innerHTML += 
    `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${[posts[i].author.image]}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${[posts[i].author.name]}</div>
                        <div class="post-meta__time">${[posts[i].created]}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${[posts[i].content]}</div>
            <div class="post__image">
                <img src="${[posts[i].media]}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="${[i]}" id="clicked-${[i]}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${[i]}" class="js-likes-counter">${[posts[i].likes]}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `    
}


let likeButtons = document.querySelectorAll(`.like-button`);
for(let i = 0; i < likeButtons.length; i++){
    //console.log(buttonLike);
    const buttonLike = likeButtons[i];
    buttonLike.addEventListener('click', function(){
        const counterLike = document.getElementById(`like-counter-${[i]}`);
        
        if(buttonLike.classList.contains('like-button--liked')){
            posts[i].likes--;
        }
        else{
            posts[i].likes++;
        }
        counterLike.innerHTML = posts[i].likes;
        
        buttonLike.classList.toggle('like-button--liked');
    });
}