import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGODB_URI = 'mongodb://localhost:27017/scratch-portal';
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'adminn123';

async function seedAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const AdminSchema = new mongoose.Schema({
      username: { type: String, required: true, unique: true },
      passwordHash: { type: String, required: true },
    });

    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

    // Clear existing to be sure
    await Admin.deleteMany({ username: ADMIN_USERNAME });
    
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await Admin.create({ username: ADMIN_USERNAME, passwordHash });
    
    console.log(`Admin user "${ADMIN_USERNAME}" created successfully with password "${ADMIN_PASSWORD}"`);

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding admin:', err);
  }
}

seedAdmin();
