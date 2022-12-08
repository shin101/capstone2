INSERT INTO recipes (food_title, image, servings, instructions)
VALUES ('Sweet Potato Casserole Gourmet & Holiday Baking',
        'https://spoonacular.com/recipeImages/715380-556x370.jpg',
        3,
        'Take your sweet potato mixture and place in a prepared 9 x 13 glass baking dish.#Cover the top with finely chopped sugar pecans.#Bake for 30 minutes or until the topping is lightly browned.#Serve warm as a side dish, or add some vanilla ice cream to the side and serve as a dessert. It really is THAT good.'), ('Tuscan White Bean Soup with Olive Oil and Rosemary','https://spoonacular.com/recipeImages/664147-556x370.jpg',6,'Rinse the beans thoroughly and place them in a 7-quart slow cooker along with the water, onion, garlic, and bay leaf. #Cover and cook on LOW for about 8 hours, or until the beans are nice and tender.
        #Remove the bay leaf. Using a handheld immersion blender, puree the remaining ingredients to the desired texture. 
        #Add the salt to taste.Ladle the soup into bowls. 
        #Drizzle with the olive oil, sprinkle with rosemary, and serve.' ), ('Homemade Oatmeal Cream Pies','https://spoonacular.com/recipeImages/647046-556x370.jpg',10,'Preheat the oven to 350 degrees F.Line cookie sheets with parchment paper. 
        #Sift the dry ingredients into a medium bowl and set aside.
        #Use an electric mixer to cream the brown sugar, butter, egg and vanilla. Once smooth, slowly add the dry mixture to the wet until well combined. Stir in the oats.Use a tablespoon-sized scoop to form equal dough balls. 
        #Allow them plenty of space to spread. Bake for 7-9 minutes. Allow the cookies to cool completely before moving off the parchment paper.Cream the shortening, powdered sugar, and vanilla together until smooth. Mix in the marshmallow fluff.To assemble: Match up two cookies that are of equal size and shape. Turn the bottom cookies over. Use a piping bag (or zip-bag with the corner cut off) to pipe the filling onto the bottom cookie. This is much easier than trying to spread it. 
        #Then add the top cookie of each cream pie and press down.
        #I found I liked a thin layer of cream filling better than a thick layer--but you should have plenty if you want to pile it on!
        #Makes approximately 10 cream pies. (20 cookies)' ), ('Banana Milo Milkshake','https://spoonacular.com/recipeImages/716351-556x370.jpg',1,
'In a blender, pour in your milk, milo, banana and ice-cream and blend till smooth.
        #Pour into a glass, spray the whipped cream on top and sprinkle the chopped strawberries on top.
        #Serve cool.'), ('Wholemeal Cake',
                         'https://spoonacular.com/recipeImages/665303-556x370.jpg',
                         4,
                         'In a large bowl, mix ground hazelnut, brown sugar, plain flour and wholemeal flour together and set aside. #Whisk egg whites and sugar at medium high speed till firm and smooth
        #Use hand to fold one quarter of beaten egg whites to the flour mixture evenly and remaining egg white in two batches.
        #Lastly add in melted butter in two batches and mix well with a rubber spatula follow by the dried apricots and dried cranberries.
        #Pour mixture into a 7 inch (lined) round cake pan and sprinkle more dried apricots and dried cranberries over it.
        #Bake at preheated oven 170C for about 30-35 minutes or until skewer inserted comes out clean. Leave cake to cool in pan for 15 minutes and remove to wire rack to cool down completely.');

--   {
--     title: 'Crabby Corn Chowder',
--     instructions: '<ol><li>Heat a deep pot over medium heat. Add oil and butter. When butter is melted, add potatoes, celery, onion, bay leaves and chipotle peppers to the pot. Season vegetables with salt and pepper, mix well and saute until tender, about 10 minutes.</li><li>Sprinkle in flour and cook about 2 minutes, stirring constantly. Stir in clam juice and half and half and mix well.</li><li>Bring soup up to a simmer and continue to simmer for about 20 minutes, or until potatoes are soft.</li><li>Stir in corn, crab and sherry and simmer for another 5 minutes, until heated through.</li><li>Adjust the soup seasonings and remove the bay leaf.  Ladle soup into bowls and top with a few dashes of hot sauce, if desired.</li><li>Serve with some crackers, crusty bread or cornbread.</li></ol>',
--     image: 'https://spoonacular.com/recipeImages/640336-556x370.jpg',
--     servings: 6,
--     cuisines: []
--   },

INSERT INTO users (username, password, first_name, last_name, email)
VALUES ('doritos',
        '1234',
        'doritos',
        'doritos',
        'doritos@gmail.com');


INSERT INTO cuisines (name)
VALUES ('American'), ('Indian'), ('');

-- copy later
 --   {
--     title: 'Vegan Taco bowls with Cilantro Lime Cauliflower Rice',
--     instructions: '<ol><li>Set the nuts to soak in a bowl of water 2-8 hours before preparing the meat.</li><li>Preheat the oven to 375 F and line a baking sheet with aluminum foil.</li><li>Finely chop the cauliflower into rice-sized pieces, or pulse in the food processor until the desired consistency. Toss with the oil and spread onto the baking sheet in an even layer. Bake for 18 minutes, stirring halfway through.</li><li>While the cauliflower rice is cooking, prepare the guacamole and taco meat.</li><li>Cut the avocado into large chunks and place into a small bowl. Add the lime juice and mash the avocado to a chunky puree or your preferred consistency. Stir in the cilantro, jalapeno, onion and spices. Set aside.</li><li>Remove the nuts from the water and place into a small food processor. Discard the water. Pulse the nuts until theyve reached a ground meat consistency, I find about 5-7 pulses works. Transfer to a bowl and stir in the salt, cumin, garlic powder, and red chili powder. Set aside.</li><li>When the cauliflower is done, transfer to a mixing bowl while still warm and stir in the lime, cilantro, and salt.</li><li>To assemble the bowls, layer 1 cup of the cauliflower rice in a bowl with taco nut meat, a dollop of guacamole, fresh tomatoes, and a sprinkling of fresh cilantro.</li><li>Serve immediately with an additional slice of lime if desired.</li></ol>',
--     image: 'https://spoonacular.com/recipeImages/664501-556x370.jpg',
--     servings: 4,
--     cuisines: [ 'Mexican' ]
--   },
--   {
--     title: 'Carrot Quinoa Muffins',
--     instructions: '<p>Muffins</p><ol><li>Preheat the oven to 350F. Grease or line a muffin tin with paper liners and set aside.</li><li>In a large bowl, mix quinoa, sugar, flours, baking soda, cinnamon, ginger, nutmeg, allspice, and salt.</li><li>In a smaller bowl, mix coconut oil, Chobani pineapple greek yogurt, vanilla, and eggs.</li><li>Add the wet ingredients to the dry ingredients .. then gently fold in the carrots, coconut, and walnuts .. until just mixed.</li><li>Divide the batter evenly such that none of the muffin tins is filled more than 3/4 full (ish 16 standard size muffins)</li><li>Bake 20-25 minutes, until golden brown and a toothpick inserted comes out clean.[br]</li></ol><p>Coconut Whip</p><ol><li>Open the can of coconut milk and scoop the top layer of white, fatty goodness into a decent sized mixing bowl (discard the coconut water or save it for smoothies). </li><li>Blend the chunks of coconut milk with a hand mixer on high speed for 15-20 seconds, just until the mixture turns to liquid. </li><li>Sift in the powdered sugar (amount depends on how sweet you like it) and mix until combined. </li><li>Add the vanilla extract and blend on high speed for 1-2 minutes, until light and creamy. </li><li>Whipped cream is best served immideately, but can be stored in an air tight container for up to three days. It will harden in the fridge, so when ready to serve, simply blend with a hand mixer on high speed until creamy again.</li></ol>',
--     image: undefined,
--     servings: 12,
--     cuisines: []
--   },
--   {
--     title: 'Tangy & Savory Mexican Soup',
--     instructions: '<ol><li>Lightly brown beef or chicken, make sure there is still some pink. If you brown it too much it will taste "dry" in the soup.</li><li>Bring stock to a boil with tomato paste/sauce. Stir in meat, garlic, chili flakes, zucchini, carrots, onions &amp; bell peppers. Simmer for about 15-30 minutes or till veggies are tender, but still slightly crunchy.</li><li>Add in lime juice and season to taste with oregano, rosemary, thyme, sea salt &amp; pepper. Serve with garnishes.</li></ol>',
--     image: 'https://spoonacular.com/recipeImages/662850-556x370.jpg',
--     servings: 8,
--     cuisines: [ 'Mexican' ]
--   },
--   {
--     title: 'Mango Salsa',
--     instructions: 'Peel and chop your mango into small cubesCube your bell peppers and onions as well and mix in with the mangoes. Add the cherry tomatoes and mix in.sprinkle your sugar and lime juice over it.Chop your scent/mint leaves and mix in and refrigerate.Serve cool as a side dish or if you want something refreshing on a hot day.',
--     image: 'https://spoonacular.com/recipeImages/716290-556x370.jpg',
--     servings: 1,
--     cuisines: [ 'Mexican' ]
--   },
--   {
--     title: 'Captain America Shield Cookies',
--     instructions: 'Line a baking sheet with wax paper. Microwave your candy and coconut oil in 30-second intervals until completely melted. Mix thoroughly.\n' +
--       'Using a fork, dip each sugar cookie into the melted candy and set carefully on lined baking sheet. Allow to set in the refrigerator for about one hour.\n' +
--       'Dust a clean working surface with cornstarch and start rolling out your fondant. Cut your white fondant with the largest cookie cutter and then using the 1.5 inch cookie cutter, cut a hole in the middle of it.\n' +
--       'Using your smallest circular cookie cutter, cut out blue fondant circles. Cut star shapes from the white fondant and use buttercream to glue it onto your blue fondant circles.\n' +
--       'Once the coated cookies are set, remove them fridge and start assembling. Using your buttercream as the glue, place your large white circle, then the blue one (with the star). Enjoy!',
--     image: 'https://spoonacular.com/recipeImages/993462-556x370.jpg',
--     servings: 12,
--     cuisines: []
--   }
