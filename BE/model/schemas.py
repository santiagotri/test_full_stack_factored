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
    title: str
    img: Union[str, None] = None
    description: str
    email: str


class UserCreate(UserBase):
    hashed_password: str


class User(UserBase):
    id: int
    is_active: bool
    skills: list[Skill] = []

    class Config:
        orm_mode = True
