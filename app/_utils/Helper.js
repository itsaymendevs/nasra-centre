// ---------------------------------------------------------------

// 1: check empty objects
export function checkEmpty(objectInstance) {
  for (var key in objectInstance) {
    if (objectInstance[key] !== null && objectInstance[key] != '') return false;
  } // end loop

  return true;
} // end function

// ---------------------------------------------------------------
