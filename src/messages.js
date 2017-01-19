export const errors = {
  // 0 = instantiation error, invalid parameters, etc
  NOT_IMPLEMENTED: ["001", "Not implemented"],
  // 1 = data error
  MUST_BE_ARRAY: ["100", "Data must be an Array instance"],
  DIFFERENT_DATATYPE: ["101", "One or more elements in the Array doesn't have the same data type"],
  CANNOT_PREDICT_DATATYPE: ["102", "Cannot predict data type because type property is empty"],
  ITEM_IS_NULL: ["103", "Item is null"]
};

export const warnings = {
  // 0 = instantiation warnings, invalid parameters, etc
  // 1 = data warnings
  ALREADY_HAS_TYPE: ["100", "Importer class already has a data type"],
};
