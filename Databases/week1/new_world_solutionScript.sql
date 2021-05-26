use new_world;

# 1. What are the names of countries with population greater than 8 million

select name from country
where Population > 8000000; 

# 2. What are the names of countries that have “land” in their names ?

select name from country where name like '%land';

# 3. What are the names of the cities with population in between 500,000 and 1 million ?

select name from city where population between 500000 and 1000000;

# 4. What's the name of all the countries on the continent ‘Europe’ ?

 select name from country where continent = 'Europe';
 
# 5. List all the countries in the descending order of their surface areas.
 
 SELECT Name FROM country ORDER BY SurfaceArea DESC;
 
# 6. What are the names of all the cities in the Netherlands?
 
  SELECT city.Name 
  FROM city 
  join country on city.CountryCode = country.Code WHERE country.Name = "Netherlands";
  
# 7. What is the population of Rotterdam ?
   
   SELECT Population FROM city WHERE Name="Rotterdam"; -- 593321
   
# 8. What's the top 10 countries by Surface Area ?
    
    SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10;
    
# 9. What's the top 10 most populated cities?
  
  SELECT Name FROM city ORDER BY Population DESC LIMIT 10;
  
# 10. What is the population of the world ?

SELECT SUM(Population) FROM country; -- 6078749450




 
   
  
 
 



