# Environment Variables Configuration

## Required Environment Variables

To connect to the new Supabase database, you need to set the following environment variable:

### Service Role Key (REQUIRED)

The protected `kv_store.tsx` file requires the standard Supabase environment variable names:

```
SUPABASE_URL=https://tdlrxymlanvpasjbnadn.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Where to find the Service Role Key:**
1. Go to https://supabase.com/dashboard/project/tdlrxymlanvpasjbnadn
2. Navigate to: Settings → API
3. Under "Project API keys", find and copy the `service_role` key
4. **IMPORTANT**: This is a secret key - never expose it in frontend code

## Optional Environment Variables

Our server code also supports these custom-named variables (with fallbacks):

```
INVENTORY_SUPABASE_URL=https://tdlrxymlanvpasjbnadn.supabase.co
INVENTORY_SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

However, since the protected `kv_store.tsx` file uses the standard names, **you must set the standard names**.

## Summary

**Minimum Required Setup:**

Set these two environment variables:
1. `SUPABASE_URL` = `https://tdlrxymlanvpasjbnadn.supabase.co`
2. `SUPABASE_SERVICE_ROLE_KEY` = (your service role key from Supabase dashboard)

Once these are set, the entire system will work:
- ✅ User authentication and signup
- ✅ Product data storage
- ✅ User data isolation
- ✅ Notifications
- ✅ All API endpoints

## Frontend Configuration

The frontend (client-side) configuration is already set in `/utils/supabase/info.tsx`:
- Project ID: `tdlrxymlanvpasjbnadn`
- Anon Key: Already hardcoded (safe for public)
- URL: Automatically constructed from project ID

No frontend environment variables needed!

## Verification

After setting the environment variables, the app should:
1. ✅ Load without errors
2. ✅ Show the login/signup page
3. ✅ Allow new user registration
4. ✅ Automatically create sample data on first login
5. ✅ Display 8 sample products in the dashboard
