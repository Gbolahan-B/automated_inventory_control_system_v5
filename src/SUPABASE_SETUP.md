# Fresh Supabase Setup - New Database

This project has been configured to use a **NEW** Supabase project with a fresh, empty database.

## Project Information

- **Project ID**: `tdlrxymlanvpasjbnadn`
- **Supabase URL**: `https://tdlrxymlanvpasjbnadn.supabase.co`

## Required Environment Variables

The following environment variable needs to be set for the backend server to function:

### Server-Side (Required)
- `INVENTORY_SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (secret, never expose to frontend)

### Optional Server-Side
- `INVENTORY_SUPABASE_URL` - Defaults to `https://tdlrxymlanvpasjbnadn.supabase.co` if not set

## What's Been Updated

1. ✅ **Project ID** - Changed to new project: `tdlrxymlanvpasjbnadn`
2. ✅ **Anon Key** - Updated in `/utils/supabase/info.tsx`
3. ✅ **Server Environment Variables** - Now uses `INVENTORY_SUPABASE_SERVICE_ROLE_KEY`
4. ✅ **Clean Slate** - All old project references removed

## How the System Works

### Frontend (Client)
- Uses the anon key hardcoded in `/utils/supabase/info.tsx`
- Connects to the new Supabase project for authentication
- Safe to expose to users

### Backend (Server)
- Reads `INVENTORY_SUPABASE_SERVICE_ROLE_KEY` from environment variables
- Uses service role key for admin operations (creating users, etc.)
- Must be kept secret

## User Data Isolation

Each user has their own isolated data:
- Products are stored with prefix: `user:{userId}:product:`
- Notifications are stored with prefix: `user:{userId}:notification:`
- The server verifies user authentication before any data access
- Users cannot access each other's data

## Next Steps

You need to provide the **Service Role Key** from your new Supabase project:

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/tdlrxymlanvpasjbnadn
2. Navigate to Settings → API
3. Copy the `service_role` key (secret)
4. Set it as the environment variable `INVENTORY_SUPABASE_SERVICE_ROLE_KEY`

## Testing the Setup

Once the service role key is set, you can:
1. Sign up for a new account
2. The system will automatically create sample inventory data
3. Each user will have their own isolated inventory database
