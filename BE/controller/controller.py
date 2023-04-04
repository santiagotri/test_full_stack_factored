from sqlalchemy.orm import Session
import bcrypt
from db import models
from model import schemas

salt = b'$2b$12$d1dmKA9tJ16jB4N5ng6Bm.'
stringsalt = '$2a$12$MTfKYEJb0edxyEVWzQ5Cde'

def hash_password(password:str):
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password.decode('utf-8')

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def login_user (db: Session, email:str, password:str):
    hashed_password = hash_password(password)
    return db.query(models.User).filter(models.User.email == email, models.User.hashed_password == hashed_password)\
        .first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = hash_password(user.password)
    db_user = models.User(email=user.email, name=user.name, img=user.img, position=user.position, description=user.description, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_skills(db: Session, user_id: int):
    return db.query(models.Skill).filter(models.Skill.owner_id == user_id).all()


def create_user_skill(db: Session, skill: schemas.SkillCreate, user_id: int):
    db_skill = models.Skill(**skill.dict(), owner_id=user_id)
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill
