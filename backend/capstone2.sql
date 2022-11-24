-- both test users have the password "password"

INSERT INTO recipes (food_title, image, author, servings, instructions)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        'joel@joelburton.com',
        FALSE),
       ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'Admin!',
        'joel@joelburton.com',
        TRUE);

INSERT INTO users (username, password, first_name, last_name, email, is_admin)
VALUES ('bauer-gallagher', 'Bauer-Gallagher', 862,
        'Difficult ready trip question produce produce someone.', NULL),
       ('edwards-lee-reese', 'Edwards, Lee and Reese', 744,
        'To much recent it reality coach decision Mr. Dog language evidence minute either deep situation pattern. Other cold bad loss surface real show.',
        '/logos/logo2.png'),
       ('hall-davis', 'Hall-Davis', 749,
        'Adult go economic off into. Suddenly happy according only common. Father plant wrong free traditional.',
        '/logos/logo2.png'),
       ('watson-davis', 'Watson-Davis', 819, 'Year join loss.',
        '/logos/logo3.png'),
       ('baker-santos', 'Baker-Santos', 225,
        'Compare certain use. Writer time lay word garden. Resource task interesting voice.',
        '/logos/logo3.png'),
       ('erickson-inc', 'Erickson Inc', 267,
    

