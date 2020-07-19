"""Game mechanic

Revision ID: 19b5c7b19900
Revises: 9d95151e2f04
Create Date: 2020-07-19 13:39:17.066416

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '19b5c7b19900'
down_revision = '9d95151e2f04'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('game',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('field', sa.String(length=64), nullable=True),
    sa.Column('settings', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('turn',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('info', sa.String(length=64), nullable=True),
    sa.Column('game_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['game_id'], ['game.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('player', sa.Column('game_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'player', 'game', ['game_id'], ['id'])
    op.add_column('room', sa.Column('game_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'room', 'game', ['game_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'room', type_='foreignkey')
    op.drop_column('room', 'game_id')
    op.drop_constraint(None, 'player', type_='foreignkey')
    op.drop_column('player', 'game_id')
    op.drop_table('turn')
    op.drop_table('game')
    # ### end Alembic commands ###
