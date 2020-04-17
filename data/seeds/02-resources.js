
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {name:"Laptop #1",description:"The one with the red sticker bro"},
        {name:"Big Server",description:"The one that alwasy crashes"},
        {name:"Red pen",description:"Chewed on the cap"},
      ]);
    });
};
