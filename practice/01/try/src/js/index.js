const obj1 = {
    company_id: 1234,
    company_name: '会社名'
  };

const obj2 = {
    article_id: 9876,
    article_title: 'タイトル'
  };

console.log(obj1);
console.log(obj2);

const result = { ...obj1, ...obj2};

console.log(result);