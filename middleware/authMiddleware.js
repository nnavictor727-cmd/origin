const token = 'localStorage.getItem("token")';

export default function checkToken(req, res, next) {
  if (!token) {
    res.status(404).json({ message: "token not found" });
  }

  next();
}
