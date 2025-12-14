# Quick Start Guide - Fresh Database Setup

## ✅ What's Already Done

Your application has been completely migrated to a **new, empty Supabase database**:

- ✅ New Project ID: `tdlrxymlanvpasjbnadn`
- ✅ Frontend configured with new project credentials
- ✅ Server updated to use new environment variables
- ✅ All old project references removed
- ✅ Clean slate - no old data or users

## 🔑 What You Need To Do (One-Time Setup)

### Step 1: Get Your Service Role Key

1. Visit your Supabase project: https://supabase.com/dashboard/project/tdlrxymlanvpasjbnadn
2. Go to: **Settings** → **API**
3. Find the section "Project API keys"
4. Copy the **`service_role`** key (the secret one)

### Step 2: Set Environment Variables

You need to provide these TWO environment variables to the system:

```
SUPABASE_URL=https://tdlrxymlanvpasjbnadn.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (your key here)
```

**That's it!** Once you set these, everything will work.

## 🚀 What Happens Next

Once the environment variables are set:

1. **First Load**: App displays login/signup page
2. **Create Account**: Sign up with email, password, and name
3. **Auto-Setup**: System automatically creates 8 sample products
4. **Start Using**: Full inventory system ready to use!

## 📊 Database Structure

Your new database uses a simple key-value store:

- **Products**: `user:{userId}:product:{timestamp}`
- **Notifications**: `user:{userId}:notification:{timestamp}`

Each user's data is **completely isolated** - users never see each other's inventory.

## 🔒 Security

- ✅ Service role key is server-side only (never exposed to frontend)
- ✅ Users can only access their own data
- ✅ All requests authenticated via session tokens
- ✅ Email confirmation auto-enabled (no email server needed)

## 🧪 Testing Your Setup

After providing the environment variables:

### Test 1: Health Check
- App loads without errors ✓
- Login page appears ✓

### Test 2: Create Account
- Click "Sign Up"
- Enter email, password (min 6 chars), and name
- Should succeed with "Account created successfully!"

### Test 3: Sign In
- Use the credentials you just created
- Should automatically load sample data
- Dashboard shows 8 products

### Test 4: User Isolation
- Create a second account
- Sign in with the new account
- Should see fresh sample data (different from first account)
- Each user has their own separate inventory

## 🆘 Troubleshooting

### "Server configuration error: Missing Supabase service role key"
→ The `SUPABASE_SERVICE_ROLE_KEY` environment variable is not set

### "Failed to create user account"
→ Check the browser console for error details
→ Verify the service role key is correct

### "Authentication required" or 401 errors
→ Try signing out and signing back in
→ Clear browser cache/cookies

## 📁 Key Files Modified

- `/utils/supabase/info.tsx` - New project ID and anon key
- `/utils/supabase/client.tsx` - Simplified client setup
- `/supabase/functions/server/index.tsx` - New environment variables
- `/contexts/AuthContext.tsx` - Fixed signup endpoint
- `/components/NotificationDropdown.tsx` - Fixed API endpoints

## 🎯 Next Steps After Setup

1. Create your account and explore the sample data
2. Try adding new products
3. Test stock updates (restock/sell)
4. View reports and charts
5. Customize to your needs!

---

**Need Help?** Check the detailed guides:
- [ENVIRONMENT_VARIABLES.md](./ENVIRONMENT_VARIABLES.md) - Detailed env var setup
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - What changed
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Database architecture
