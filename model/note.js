'use strict';


class Note {
    
  constructor(config) { 
    this.id = uuid();
    this.createdOn = new Date();
    this.title = config.title || '';
    this.content = config.content || '';
  } 
}

module.exports = Note;