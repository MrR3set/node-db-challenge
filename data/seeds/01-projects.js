
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {name:"Project 1", description:"First one of my path"},
        {name:"Project 2", description:"Second project of my journye"},
        {name:"Project 3"},
        {name:"Project test"},
        {name:"o another project", description:"this is another projecct i made"},
      ]);
    });
};
