from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    title = Column(String)
    img = Column(String)
    description = Column(String)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    active = Column(Boolean, default=True)
    skills = relationship("Skill", back_populates="owner")


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    value = Column(Integer)
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="skills")