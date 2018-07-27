module.exports = {
  tableName: 'user_book',
  attributes: {

    userId: {
        type: 'number',
        columnType: 'int'
    },
    categoryId: {
        type: 'number',
        columnType: 'int'
    },
    startTime: {
        type: 'string',
        columnType: 'datetime'
    },
    quantity_question: {
        type: 'number',
        columnType: 'tinyint'
    },
    stopTime: {
        type: 'string',
        columnType: 'datetime'
    },
    mark: {
        type: 'number',
        columnType: 'int'
    },
    testId: {
        type: 'number',
        columnType: 'int'
    },
    duringTime: {
        type: 'number',
        columnType: 'int'
    },
    rank: {
        type: 'string',
        columnType: 'varchar'
    },
    status: {
        type: 'number',
        columnType: 'int'
    },
    bookCount: {
        type: 'number',
        columnType: 'int'
    },
    exercise_number: {
        type: 'number',
        columnType: 'int'
    },
    teacherId: {
        type: 'number',
        columnType: 'int'
    },
    isRequest: {
        type: 'number',
        columnType: 'int'
    },
    trytest: {
        type: 'number',
        columnType: 'int'
    },
    camp: {
        type: 'number',
        columnType: 'int'
    },
    deleted: {
        type: 'number',
        columnType: 'int'
    },
    teacherMark: {
        type: 'number',
        columnType: 'double'
    },
    teacherIds: {
        type: 'string',
        columnType: 'varchar'
    },
    marked: {
        type: 'number',
        columnType: 'int'
    },
    lang: {
        type: 'string',
        columnType: 'varchar'
    },
    compability: {
        type: 'number',
        columnType: 'tinyint'
    },
    parentTest: {
        type: 'number',
        columnType: 'tinyint'
    }



  }
};