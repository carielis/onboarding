/* tslint:disable */
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
const JWT_SECRET = "your_jwt_secret_key";

// Generates a JWT token
export const generateToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

// Validates a JWT token
export const verifyToken = (token: any) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

// Hashes a password
export const hashPassword = async (password: any) => {
  return await bcrypt.hash(password, 10);
};

// Validates a password
export const verifyPassword = async (password: any, hashedPassword: any) => {
  return await bcrypt.compare(password, hashedPassword);
};

export default async function login(req: any, res: any) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user: any = null;

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken({ userId: user.id });

    res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Secure`);
    return res.json({ message: "Logged in successfully" });
  }

  res.status(404).end();
}

export const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    const token = props.token;

    if (!token) {
      router.replace("/login");
      return null;
    }

    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      router.replace("/login");
      return null;
    }
    // @ts-ignore
  };

  return Wrapper;
};

// async function createTask(task) {
//   const db = await connect();
//   const result = await db.collection("tasks").insertOne(task);
//   return result.insertedId;
// }
