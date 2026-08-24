function getProfile(id, callback) {
    // Simulate an API call or some asynchronous operation
    setTimeout(() => {
        const profile = {
            id: id,
            name: `User ${id}`,
            email: `user${id}@example.com`
        };
        callback(null, profile);
    }, 1000);
}
function getPosts(userId, callback) {
    // Simulate an API call or some asynchronous operation
    setTimeout(() => {
        console.log("posts fetched");
        const posts = ["Post 1", "Post 2", "Post 3"];
        callback(null, posts);
    }, 1000);
        }
        getUser(1, function (error, user){
            if (error) {
                console.error("Error fetching user:", error);
                return;
            }
            getProfile(user.id, function (error, profile) {
                if (error) {
                    console.error("Error fetching profile:", error);
                    return;
                }
                getPosts(user.id, function (error, posts) {
                    if (error) {
                        console.error("Error fetching posts:", error);
                        return;
                    }
                    console.log("User:", user);
                    console.log("Profile:", profile);
                    console.log("Posts:", posts);
                });
            });
        });
        