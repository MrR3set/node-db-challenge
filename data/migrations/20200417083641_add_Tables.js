
exports.up = function(knex) {
    return  knex.schema
    .createTable("Projects", tbl=>{
      tbl.increments("id").primary();
      tbl.string("name").notNullable().index().unique();
      tbl.string("description");
      tbl.bool("completed").defaultTo(false);
    })
  
    .createTable("Resources", tbl=>{
      tbl.increments("id").primary();
      tbl.string("name").notNullable();
      tbl.string("description");
    })
  
    .createTable("Tasks", tbl=>{
    tbl.increments("id").primary().index();
    tbl.string("description").notNullable();
    tbl.string("notes");
    tbl.bool("completed").defaultTo(false);
    //foreign key Project ID
    tbl.integer("ProjectId")
        .notNullable()
        .references("id")
        .inTable("Projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

    })
  
    .createTable("Projects_resources", tbl=>{
      //foreign Recipe
      tbl.integer("projectId")
          .notNullable()
          .references("id")
          .inTable("Projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      //foreign Ingredients
      tbl.integer("resourceId")
          .notNullable()
          .references("id")
          .inTable("Resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("Projects_resources")
    .dropTableIfExists("Projects")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Tasks");
};
