from app import db
from sqlalchemy.sql import func

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    twitch_id = db.Column(db.String)
    twitch_username = db.Column(db.String)
    discord_id = db.Column(db.String)
    discord_username = db.Column(db.String)
    verus = db.Column(db.String)
    eth = db.Column(db.String)
    rental = db.Column(db.String)
    points = db.Column(db.Integer)
    airdrop_amount = db.Column(db.Integer)
    discord_verified = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    bio = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'twitch_id': self.twitch_id,
            'twitch_username': self.twitch_username,
            'discord_id': self.discord_id,
            'discord_username': self.discord_username,
            'verus': self.verus,
            'eth': self.eth,
            'rental': self.rental,
            'points': self.points,
            'airdrop_amount': self.airdrop_amount,
            'discord_verified': self.discord_verified,
            'created_at': self.created_at,
        }

    def __repr__(self):
        return f'<User {self.id}>'
