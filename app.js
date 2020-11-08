// search input
const searchUser = document.getElementById('searchUser');
// initialize github
const github = new Github;

// init ui 
const ui = new UI;
// Add event listener to the search 
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    if(userText !== "") {
        github.getUser(userText)
        .then(data=>{
            if(data.profileData.message === 'Not Found') {
                // we want to alert that the user could not be found
                ui.showAlert('User not found ', 'alert alert-danger');
            }else {
                //  show profile
                 ui.showUser(data.profileData);
                ui.showRepos(data.repoData);
            }
        })
    }else{
        // clear profile
        ui.clearProfile();
    }
})