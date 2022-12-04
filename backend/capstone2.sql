\echo 'Delete and recreate db?' \prompt 'Return for yes or control-C to cancel > ' foo
DROP DATABASE capstone2;


CREATE DATABASE capstone2;

\connect capstone2;

\i capstone2-schema.SQL \i capstone2-seed.SQL \echo 'Delete and recreate capstone2_test db?' \prompt 'Return for yes or control-C to cancel > ' foo
DROP DATABASE capstone2_test;


CREATE DATABASE capstone2_test;

\connect capstone2_test;

\i capstone2-schema.SQL