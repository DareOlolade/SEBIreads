import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 10 minutes
  max: 100,                // 1000 requests per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, try again later."
});

export default rateLimiter;
