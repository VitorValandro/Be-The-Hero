exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) { //create table using JS
        table.string('id').primary(); //primary key
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //second param is to specify the length 
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
