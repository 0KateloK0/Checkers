"""Game

Revision ID: e004e7f3f09f
Revises: 9d95151e2f04
Create Date: 2020-07-20 16:19:02.724997

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e004e7f3f09f'
down_revision = '9d95151e2f04'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('game',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('field', sa.String(length=64), nullable=True),
    sa.Column('setup', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('turn',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('info', sa.String(length=64), nullable=True),
    sa.Column('game_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['game_id'], ['game.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('turn')
    op.drop_table('game')
    # ### end Alembic commands ###
