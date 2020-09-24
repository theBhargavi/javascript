/* ------------------------- Use getters and setters to Control Access to an Object  ------------------------- */
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);  // anonymous
  novel.writer = 'newAuthor';
  console.log(novel.writer);  // newAuthor