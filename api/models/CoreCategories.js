
module.exports = {
  tableName: 'categories',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
	name_vn: {
        type: 'string',
        columnType: 'varchar'
    },
    parent: {
        type: 'number',
        columnType: 'int'
    },
    parents: {
        type: 'string',
        columnType: 'varchar'
    },
	classes: {
        type: 'string',
        columnType: 'varchar'
    },
    router: {
        type: 'string',
        columnType: 'varchar'
    },
    alias: {
        type: 'string',
        columnType: 'varchar'
    },
    ordering: {
        type: 'number',
        columnType: 'int'
    },
    userId: {
        type: 'number',
        columnType: 'int'
    },
    img: {
        type: 'string',
        columnType: 'varchar'
    },
    display: {
        type: 'number',
        columnType: 'tinyint'
    },
	displayAtSite: {
        type: 'number',
        columnType: 'int'
    },
	document: {
        type: 'number',
        columnType: 'tinyint'
    },
	content: {
        type: 'string',
        columnType: 'text'
    },
    level: {
        type: 'number',
        columnType: 'int'
    },
	software: {
        type: 'number',
        columnType: 'int'
    },
	site: {
        type: 'number',
        columnType: 'int'
    },
    trial: {
        type: 'number',
        columnType: 'int'
    },
    // Liên kết với model EducationUserBooks
    
   /* ref_user_book:{
        collection:'EducationUserBooks',
        via: 'topic'
    },*/
    
    // Liên kết với model EducationUserBooks
    /*ref_user_book_category:{
        collection:'EducationUserBooks',
        via: 'categoryId'
    }*/
  },
  
};