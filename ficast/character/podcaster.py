from pydantic import BaseModel
from .base import Character

class Podcaster(Character):
    """
    A class to represent a podcast participant.

    Attributes:
    -----------
    name : str
        Name of the podcaster.
    desc : str
        Description of the podcaster.
    mode : str
        Mode of participation (e.g., 'podcast').

    Methods:
    --------
    introduce():
        Returns an introduction string for the podcaster.
    """

    name: str
    desc: str
    mode: str

    def __str__(self) -> str:
        """Return an introduction string for the podcaster."""
        return f"{self.name}: {self.desc}"