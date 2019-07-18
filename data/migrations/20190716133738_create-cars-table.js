exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 255)
      .unique()
      .notNullable();
    tbl.string("make", 255).notNullable();
    tbl.string("model", 255).notNullable();
    tbl.decimal("MPG").notNullable();
    tbl.string("transmission_type", 255);
    tbl.string("title_status", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
