from pydantic import BaseModel, Field, UUID4, validator
from typing import Optional, List
import uuid
from datetime import datetime
from emoji import UNICODE_EMOJI

class Location(BaseModel):
    latitude: float
    longitude: float

class Position(BaseModel):
    userId: str
    location: Location

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    userId: int
    dateRecorded: datetime
    emojiId: str
    sessionId: Optional[str] = None
    positions: List[Position] = []

    class Config:
        arbitrary_types_allowed=True,
        json_encoders = {
            datetime: lambda v: v.isoformat(),
            uuid.UUID: lambda v: str(v)
        }
        
    @validator('emojiId')
    def is_valid_emoji(cls, v):
        if v not in UNICODE_EMOJI['en']:
            raise ValueError('Invalid emoji')
        return v