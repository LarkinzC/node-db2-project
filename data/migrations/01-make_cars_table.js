exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increment('id')
      tbl.string('vin', 17).notNullable().unique()
      tbl.string('make', 20).notNullable()
      tbl.string('model', 20).notNullable()
      tbl.numeric('mileage').unsigned().notNullable()
      tbl.string('title', 30)
      tbl.string('transmision', 30)
    })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
