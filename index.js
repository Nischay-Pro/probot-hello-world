module.exports = (robot) =>  {
  robot.on('pull_request.opened', receive); 
  async function receive(context) {
    const response = await context.github.issues.getForRepo(context.repo( {
      state:'all', 
      creator:context.payload.pull_request.user.login
    })); 
    const countPR = response.data.filter(data => data.pull_request); 
    try {
      let repo = context.repo(); 
      context.github.issues.createComment(context.issue( {
        body:"Hello World!"
      })); 
    }catch (err) {
      if (err.code !== 404) {
        throw err; 
      }
    }
  }
}; 