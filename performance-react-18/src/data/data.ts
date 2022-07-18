const generateData = () => {
  const list = [];
  for (let i = 0; i < 30000; i++) {
    list.push({
      id: `id-${i + 1}`,
      name: `Product ${i + 1}`,
      code: `code ${i + 1}`,
      tag: `tag ${i + 1}`,
    });
  }
  return list;
};

export { generateData };
