from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from controller import controller
from db import models
from model import schemas
from db.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = controller.get_users(db, skip=skip, limit=limit)
    return users


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = controller.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return controller.create_user(db=db, user=user)


@app.get("/users/{email}/{password}", response_model=schemas.User)
def login_user(email: str,  password: str, db: Session = Depends(get_db)):
    db_user = controller.login_user(db, email=email, password=password)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.get("/login/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = controller.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/skills/", response_model=schemas.Skill)
def create_skill_for_user(
    user_id: int, skill: schemas.SkillCreate, db: Session = Depends(get_db)
):
    return controller.create_user_skill(db=db, skill=skill, user_id=user_id)


@app.get("/skills/{user_id}/", response_model=list[schemas.Skill])
def read_skills(user_id: int, db: Session = Depends(get_db)):
    skills = controller.get_skills(db, user_id=user_id)
    return skills
