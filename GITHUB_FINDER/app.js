// Init GitHUb
const github = new Github;

// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if(userText !== '') {
        // Make a HTTP call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // show alert
                ui.showAlert('User Not Found!', 'alert alert-danger');
            } else {
                // show profile 
                ui.showProfile(data.profile );
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});