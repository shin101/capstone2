CREATE TABLE cuisines (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY, 
  name TEXT
);

CREATE TABLE recipes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  cuisine_id uuid REFERENCES cuisines ON DELETE CASCADE,
  food_title TEXT NOT NULL,
  image TEXT,
  servings TEXT, 
  instructions TEXT NOT NULL
);

CREATE TABLE users (
  username VARCHAR(15) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1), 
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);


CREATE TABLE users_recipes (
  username VARCHAR(15) REFERENCES users ON DELETE CASCADE,
  recipe_id uuid REFERENCES recipes ON DELETE CASCADE, 
  liked_at TIMESTAMPTZ
);

-- CASCADE Cascade deletes. 
-- PROTECT Prevent deletion of the referenced object by raising ProtectedError,