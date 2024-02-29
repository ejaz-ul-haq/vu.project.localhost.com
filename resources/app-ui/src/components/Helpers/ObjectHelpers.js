
 export const RenameObjectKeys = (obj, newKeys) => {
  // console.log('RenameObjectKeys');

  // console.log('obj');
  // console.log(obj);
  //
  //  console.log('newKeys');
  //  console.log(newKeys);

  if ( null === typeof obj || 'undefined' === typeof obj ){
    return {};
  }
  const entries = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;

    return {[newKey]: obj[key]};
    // return {...obj, [newKey]: obj[key]};
    // return ( obj.hasOwnProperty(key)) ? {[newKey]: obj[key]} : '';
  });

  return Object.assign({}, ...entries);
}
