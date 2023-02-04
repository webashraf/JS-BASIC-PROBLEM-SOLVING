let friends = ['AAAAAAAAAAAA', 'BBBBBBBB', 'CCCCCCCCCCCCCCCCCC', 'DDDDDDD', 'EEEEEEEE', 'FFFFFFFFFFFFFFFFFFFF']

function bestFriend(friendsArr){
    let bFriend = '';
    for (let i = 0; i < friendsArr.length; i++) {
        const element = friendsArr[i];
        if(element.length > bFriend.length) bFriend = element;
    }
    return bFriend
}
console.log(bestFriend(friends));