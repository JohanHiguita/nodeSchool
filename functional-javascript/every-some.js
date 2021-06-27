function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        //return submittedUsers.some(user => user.id)
        return submittedUsers.every(submitedUser => {
            return goodUsers.some(goodUser => goodUser.id == submitedUser.id)
        })
    };
}

module.exports = checkUsersValid/*  */