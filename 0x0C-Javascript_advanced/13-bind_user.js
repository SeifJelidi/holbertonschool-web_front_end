let user = {
    'hobby': 'Calligraphy',
    'favoriteSport': 'Hockey',
    'astrologicalSign': 'Aries',
    'firstName': 'Buillaume',
    'lastName': 'Ialva',
    'location': 'Telaviv',
    'occupation': 'Engineer'
};
function logWelcomeUser(welcomeString) {
    let pri = `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`;
    console.log(pri);
}
let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
