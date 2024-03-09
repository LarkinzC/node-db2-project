// STRETCH
const cars = [
    {
    vin: '1829312789123',
    make: 'toyota',
    model: 'camry',
    mileage: 18273,
    title: 'clean',
    transmission: 'automatic',
},
{
    vin: '9032740232222',
    make: 'chevy',
    model: 'tahoe',
    mileage: 13923,
    title: 'clean',
},
{
    vin: '0173517350933',
    make: 'kia',
    model: 'sorento',
    mileage: 243242,
},
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
}
