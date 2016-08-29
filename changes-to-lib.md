Changes made to

dist/annotations/require.js - line 55 ( added type == css )
dist/annotations/type.js - line 14 added

autofill(item) {
  if (item.type == 'Map') {
    item.context.type = item.type;
    // Cleanup
    delete item.type;
  }
},
