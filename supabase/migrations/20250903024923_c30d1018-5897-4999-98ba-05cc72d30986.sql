
-- Ensure there's an index to make deletes by email fast
CREATE INDEX IF NOT EXISTS idx_active_sessions_email ON public.active_sessions (email);

-- Create the trigger that enforces a single active session per email.
-- This uses the already-defined function public.enforce_single_session()
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'enforce_single_session_on_insert'
  ) THEN
    CREATE TRIGGER enforce_single_session_on_insert
    BEFORE INSERT ON public.active_sessions
    FOR EACH ROW
    EXECUTE FUNCTION public.enforce_single_session();
  END IF;
END $$;
