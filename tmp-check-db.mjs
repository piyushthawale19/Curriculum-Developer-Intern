import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGODB_URI = 'mongodb://localhost:27017/scratch-portal';

async function checkAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const AdminSchema = new mongoose.Schema({
      username: { type: String, required: true, unique: true },
      passwordHash: { type: String, required: true },
    });

    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

    const admins = await Admin.find({});
    console.log('Admins in DB:', JSON.stringify(admins, null, 2));

    if (admins.length > 0) {
      const admin = admins[0];
      const isMatch = await bcrypt.compare('adminn123', admin.passwordHash);
      console.log('Password "adminn123" matches first admin:', isMatch);
    } else {
      console.log('No admins found in DB');
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err);
  }
}

checkAdmin();
