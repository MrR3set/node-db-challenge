
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {description:"Add the thing to the other thing",completed:true, ProjectId:"1"},
        {description:"Upload new version", notes:"Check the instructions on github",completed:false, ProjectId:"1"},
        {description:"Test security vulnerabilities",completed:true, ProjectId:"2"},
        {description:"finish design", completed:false, ProjectId:"3"},
        {description:"Dont do anyuthing", notes:"literally anything",completed:true, ProjectId:"4"},
      ]);
    });
};
