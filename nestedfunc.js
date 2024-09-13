function greet(name) {
    // Inner function
    function greetInLanguage(language) 
    {
      console.log("Hello " + language); 
      
      // Log the language being used
      if (language === 'English') 
      {
        return 'Hello ' + name;
      } 
      else if (language === 'Spanish') 
      {
        return 'Hola ' + name;
      } 
      else 
      {
        return 'Hi ' + name;
      }
    }
    
    // Call inner function
    return greetInLanguage('English');
  }
  
  console.log(greet('Alice'));  // Outputs: Hello Alice
  