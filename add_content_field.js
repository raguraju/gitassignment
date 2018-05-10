
module.exports = function (migration) {
      
   // Create a new content type.
   const newContent = migration.createContentType('bodyContent').name('Content In Body');
   newContent.createField('orders').name('Orders').type('Text');

   /* // Edit a content type.
   const editContent = migration.editContentType('bodyContent')
   editContent.name('BodyContent').description('Body Content !');

   // Delete a content type.
   migration.deleteContentType('bodyContent');

    // Create a new category field in the headerContent content type.
    const modifyContent = migration.createContentType('bodyContent');
    modifyContent.createField('orders').name('Orders').type('Text');
    
    //Updating the title field in the headerContent content type.
    const editHeader = migration.editContentType('headerContent');
    editHeader.changeFieldId('title', 'titleHeader');
    editHeader.editField('titleHeader').name('Title for Headers!');

    //Delete a field in the content type.
    const deleteContent = migration.editContentType('bodyContent')
    deleteContent.deleteField('products'); */

 }
   
