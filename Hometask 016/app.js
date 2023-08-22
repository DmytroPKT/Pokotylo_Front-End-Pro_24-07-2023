function createCachingFunction(fn) {
    const cache = new Map();  // Используем Map для хранения кэша
    const maxCacheSize = 10;  // Максимальный размер кэша
  
    return function (...args) {
      const key = args.join(',');  // Создаем ключ из аргументов
  
      // Проверяем, есть ли результат в кэше
      if (cache.has(key)) {
        console.log('Cache hit for', key);
        return cache.get(key);
      }
  
      // Вызываем функцию, если результат не найден в кэше
      const result = fn(...args);
  
      // Добавляем результат в кэш
      if (cache.size >= maxCacheSize) {
        const oldestKey = cache.keys().next().value;  // Находим ключ самого старого значения
        cache.delete(oldestKey);  // Удаляем старое значение из кэша
      }
      cache.set(key, result);
  
      return result;
    };
  }
  
  // Пример использования
  function add(a, b) {
    console.log('Adding', a, 'and', b);
    return a + b;
  }
  
  const cachedAdd = createCachingFunction(add);
  
  console.log(cachedAdd(2, 3));  // Вызовет add(2, 3) и вернет 5
  console.log(cachedAdd(2, 3));  // Из кэша вернет 5
  console.log(cachedAdd(4, 7));  // Вызовет add(4, 7) и вернет 11
  console.log(cachedAdd(5, 2));  // Вызовет add(5, 2) и вернет 7
  console.log(cachedAdd(2, 3));  // Из кэша вернет 5
  