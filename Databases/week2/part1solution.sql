use new_world;

# 1. What is the capital of country X ? (Accept X from user)
 SELECT name from city where id in (select capital from country where name ="India");
 
# 2. List all the languages spoken in the region Y (Accept Y from user)
SELECT distinct countrylanguage.language ,country.region FROM country JOIN countrylanguage ON countrylanguage.CountryCode = country.code WHERE country.region = 'Middle East';

# 3. Find the number of cities in which language Z is spoken (Accept Z from user)
SELECT COUNT(city.Name) AS total FROM countrylanguage JOIN city ON city.CountryCode = countrylanguage.CountryCode WHERE countrylanguage.language ='English';

# 4. List all the continents with the number of languages spoken in each continent
SELECT continent, COUNT(DISTINCT language) AS numberOflanguages FROM country inner JOIN countrylanguage ON country.code = countrylanguage.countryCode GROUP BY continent;

# 5. For the country given as input, is there any countries that

# have the same official language
# is in the same region

SELECT country.Name FROM country, countrylanguage WHERE (country.Code = countrylanguage.CountryCode) AND (country.Region='south america') AND (countrylanguage.Language= 'spanish') AND IsOfficial = 'T';