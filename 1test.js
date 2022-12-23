// 1. String constant
testCase = a => {
    const words = 'Ноль Один Два Три Четыре Пять Шесть Семь Восемь Девять';
    return words.split(' ')[a];
};

// 2. Array constant
testCase = a => {
    const words = ["Ноль", "Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять"];
    return words[a];
};

// 3. Object constant
testCase = a => {
    const words = {0: "Ноль", 1: "Один", 2: "Два", 3: "Три", 4: "Четыре", 
                   5: "Пять", 6: "Шесть", 7: "Семь", 8: "Восемь", 9: "Девять"};
    return words[a];
};

// 4. Switch block
testCase = a => {
    switch (a) {     
        case 0: return "Ноль"; 
        case 1: return "Один";  
        case 2: return "Два";  
        case 3: return "Три";  
        case 4: return "Четыре";  
        case 5: return "Пять";  
        case 6: return "Шесть"; 
        case 7: return "Семь"; 
        case 8: return "Восемь";
        case 9: return "Девять";
    }
};

// 5. If statements
testCase = a => {
      if (a == 0) return "Ноль"; 
      if (a == 1) return "Один";
      if (a == 2) return "Два";  
      if (a == 3) return "Три";  
      if (a == 4) return "Четыре";  
      if (a == 5) return "Пять";  
      if (a == 6) return "Шесть"; 
      if (a == 7) return "Семь"; 
      if (a == 8) return "Восемь"; 
      if (a == 9) return "Девять";
};

// 6. Ternary operators
testCase = a => 
      a == 0 ? "Ноль"  : 
      a == 1 ? "Один"  :  
      a == 2 ? "Два"   :  
      a == 3 ? "Три"   :  
      a == 4 ? "Четыре":  
      a == 5 ? "Пять"  :  
      a == 6 ? "Шесть" : 
      a == 7 ? "Семь"  : 
      a == 8 ? "Восемь": 
               "Девять";

// 7. Logical operators 1
      a == 0 && "Ноль"   || 
      a == 1 && "Один"   || 
      a == 2 && "Два"    || 
      a == 3 && "Три"    || 
      a == 4 && "Четыре" || 
      a == 5 && "Пять"   || 
      a == 6 && "Шесть"  || 
      a == 7 && "Семь"   || 
      a == 8 && "Восемь" || 
      a == 9 && "Девять";