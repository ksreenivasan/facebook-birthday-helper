//I solemnly swear that I am up to no good

//get all the user posts
posts = document.getElementsByClassName('userContent');

var birthday_related = [];
//get all the birthday related stuff
for (post of posts){
    post_kids = post.children;
    for (kid of post_kids){
        //console.log('hi');
        if (kid.tagName == 'P'){
            text = kid.textContent.toLowerCase();
            if (text.contains('birthday')){
                //console.log(kid);
                birthday_related.push(kid);
            }
        }
    }
}

//find the like buttons for each of these and hit em!
for (post of birthday_related){
    big_div = post.parentElement.parentElement;
    likeButton = big_div.getElementsByClassName('UFILikeLink');
    if (likeButton.getAttribute('aria-pressed')){
        likeButton.click()
    }
}