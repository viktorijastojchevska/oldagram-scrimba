const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postContent = document.getElementById("post-content");

function renderPosts() {
    let post = "";

    for (let i = 0; i < posts.length; i++) {

        post += `
                <div id="post">
                    <div class="post-header">
                        <img src="${posts[i].avatar}" id="avatar">

                        <div class="title">
                            <p id="name">${posts[i].name}</p>
                            <p id="location">${posts[i].location}</p>
                        </div>
                    </div>  

                    <img src="${posts[i].post}" id="post-img">

                    <div class="social">
                        <div class="icons">

                            <button class="like-btn" onclick="likesIncrement(${i})">
                                <img src="images/icon-heart.png" alt="hearth icon image" class="icon-small">
                            </button>

                            <button>
                                <img src="images/icon-comment.png" alt="comment icon image" class="icon-small">
                            </button>

                            <button>
                                <img src="images/icon-dm.png" alt="" class="icon-small">
                            </button>
                        </div>

                        <p id="likes">${posts[i].likes} likes</p>
                        <p id="username">${posts[i].username} <span id="comment">${posts[i].comment}</span></p>
                    </div>
                </div>
                `
    }
    
    postContent.innerHTML = post;
}

renderPosts();


function likesIncrement(i) {
    let likes = posts[i].likes++;
    renderPosts();
}



   


    



    











