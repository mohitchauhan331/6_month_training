countries=['india','usa','uk','china','japan'];
console.log(countries); //give all countries
console.log(countries.length); // gives length
console.log(countries[3]); // give the country at 3 
countries.shift(); //removes the first country
countries.push('australia'); // add a country at the end 
for(i=0;i<countries.length;i++){ // traverse all countries
    console.log(countries[i]);
}
