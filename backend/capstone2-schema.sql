
-- SET DEFAULT "hello"

CREATE TABLE recipes (
  id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  cuisine_id INTEGER REFERENCES cuisines ON DELETE CASCADE,
  food_title TEXT NOT NULL,
  image TEXT,
  author TEXT NOT NULL,
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

CREATE TABLE cuisines (
  id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY, 
  name TEXT NOT NULL
);

CREATE TABLE users_recipes (
  username VARCHAR(15) REFERENCES users ON DELETE CASCADE,
  recipe_id REFERENCES recipes ON DELETE CASCADE, 
  liked_at TIMESTAMPTZ
);

-- CASCADE Cascade deletes. 
-- PROTECT Prevent deletion of the referenced object by raising ProtectedError,