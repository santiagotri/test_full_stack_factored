from typing import Union
from pydantic import BaseModel


class SkillBase(BaseModel):
    title: str
    value: int


class SkillCreate(SkillBase):
    pass


class Skill(SkillBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    name: str
    position: str
    img: Union[str, None] = None
    description: str
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    active: bool
    skills: list[Skill] = []

    class Config:
        orm_mode = True
