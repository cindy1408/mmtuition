class User {
    constructor (email, name) {
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

var userOne = new User ('cindycheung1408@gmail.com', 'Cindy Cheung')
var userTwo = new User ('williamburdett1995@gmail.com', 'William Burdett')

userOne.login().updateScore().updateScore().logout();