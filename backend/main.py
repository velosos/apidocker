from typing import Optional, List
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Person(BaseModel):
  id: int
  name:str
  age:int


DB: List[Person] = [
  Person(id=1, name="Jamila", age=22),
  Person(id=2, name="Alex", age=24),

]

@app.get("/api")
def read_root():
  return DB




