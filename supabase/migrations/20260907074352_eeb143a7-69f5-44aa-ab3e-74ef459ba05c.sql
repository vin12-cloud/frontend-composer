CREATE TABLE public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  request_type TEXT NOT NULL,
  product TEXT,
  quantity TEXT,
  delivery_location TEXT,
  needed_by DATE,
  notes TEXT,
  attachment_path TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.quote_requests TO anon;
GRANT INSERT, SELECT, UPDATE, DELETE ON public.quote_requests TO authenticated;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage quote requests"
  ON public.quote_requests
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_quote_requests_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_quote_requests_updated_at
  BEFORE UPDATE ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_quote_requests_updated_at();