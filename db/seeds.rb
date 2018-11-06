# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#create a user

user_one = User.create(
    name: 'Doge'
)

user_one.spreads << Spread.create(
    date: "06-NOV-2018",
    notes: "second spread (heck) so spread much code"
)

# #create a spread (or spreads)

spread_test = Spread.create(
    user_id: user_one.id,
    date: "06-NOV-2018",
    notes: "(wow) much card so fortune"
)


#create two cards to a user's spread
