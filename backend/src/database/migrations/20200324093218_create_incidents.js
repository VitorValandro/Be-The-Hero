exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) { //create table using JS
        table.increments(); // auto increment primary key 
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); //float field type

        table.string('ong_id').notNullable(); //relationship
        table.foreign('ong_id').references('id').inTable('ongs'); //n foreign key
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents');
};
