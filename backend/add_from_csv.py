import csv
import os
from extensions import app, db
from models import User
basedir = os.path.abspath(os.path.dirname(__file__))

# function to loop through csv user file and enter those users into the database
with app.app_context():
    def add_users_from_csv():
        with open('user_info.csv', 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                user = User(
                    twitch_id=row['Twitch ID Number'],
                    twitch_username=row['Twitch Username'],
                    discord_id=row['DiscordID#'],
                    discord_username=row['Discord Username'],
                    verus=row['VRSC Address'],
                    eth=row['ETH address'],
                    rental=row['Rental Wallet'],
                    points=row['Points'],
                    airdrop_amount=row['Airdrop Amount'],
                )
                db.session.add(user)
            db.session.commit()
        return 'Users added to the database'

    print(add_users_from_csv())
