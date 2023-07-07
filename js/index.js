console.log('hey')

const posts = [
{title:'Why you should learn javascript',
 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non atque voluptatibus aspernatur, harum impedit dolores nobis distinctio, iure dolorem delectus mollitia sit soluta hic tenetur adipisci quam natus velit.',
 img:'./img/img1.jpeg'
},
{title:'React is a cool library',
 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non atque voluptatibus aspernatur, harum impedit dolores nobis distinctio, iure dolorem delectus mollitia sit soluta hic tenetur adipisci quam natus velit.',
 img:'./img/img2.jpeg'
},
{title:'Software engineer pays well',
 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non atque voluptatibus aspernatur, harum impedit dolores nobis distinctio, iure dolorem delectus mollitia sit soluta hic tenetur adipisci quam natus velit.',
 img:'./img/img3.jpeg'
},

]

let allPosts =""

for (let post of posts) {
  allPosts += 
    `
<div class="preview">
<div class="preview-article">
     <h1>${post.title}</h1>
     <p>${post.description}</p> 
     <a href="">Read more ...</a>
</div>

<img class="preview-image" src=${post.img}>
</div>

`
}
previews.innerHTML = allPosts



