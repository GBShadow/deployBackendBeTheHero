import generateUniqueId from '../../src/utils/generateUniqueId';

describe('Genarate Unique ID', () => {
  it('should genarate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
