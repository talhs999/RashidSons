import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Read local database.json
    const dbPath = path.join(process.cwd(), 'database.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    // Find admin
    const admin = dbData.admins.find((a: any) => a.username === username);

    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, admin.password_hash);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Create token
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET || 'jrashid_secret_key_123',
      { expiresIn: '1d' }
    );

    // Set cookie
    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400 // 1 day
    });

    return response;

  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
