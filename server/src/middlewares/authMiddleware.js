import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    let token;
    if (req.cookies?.refreshToken) {
      token = req.cookies.refreshToken;
    }
    if (!token) {
      return res.status(401).json({ msg: "Unauthorized Entry!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};
