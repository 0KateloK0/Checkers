"""Game mechanics

Revision ID: a3be73cc219c
Revises: e004e7f3f09f
Create Date: 2020-07-20 19:45:42.793879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a3be73cc219c'
down_revision = 'e004e7f3f09f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('game', schema=None) as batch_op:
        batch_op.add_column(sa.Column('started', sa.Boolean(), nullable=True))

    with op.batch_alter_table('player', schema=None) as batch_op:
        batch_op.add_column(sa.Column('game_id', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('player', schema=None) as batch_op:
        batch_op.drop_column('game_id')

    with op.batch_alter_table('game', schema=None) as batch_op:
        batch_op.drop_column('started')

    # ### end Alembic commands ###