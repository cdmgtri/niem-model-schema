
/**
  * A data type representing the NIEM data model, an IEPD, an EIEM, or another kind of NIEM-based data model.
  * @typedef {Object} NIEMModel 
  *
  * @property {string} [name] - A name of a model. 
  * @property {string} [summary] - A definition or summary statement of a model. 
  * @property {string} [description] - A detailed description of a model. 
  * @property {enum} [kind] - A kind of model. 
  * @property {string} [source] - An authoritative source for the model. 
  * @property {string} [contactInfo] - A set of contact information for the model. 
  * @property {string} [website] - A URL for an informational website about this model. 
  * @property {NIEMPackage[]} [packages] - A set of packages that belong to this model. 
  */


/**
  * A data type for a specific version or release of a model.
  * @typedef {Object} NIEMPackage 
  *
  * @property {string} [modelName] - A name of the model to which this package belongs. 
  * @property {string} [version] - A version number. 
  * @property {string} [draft] - A sub-version number, such as a pre-release identifier. 
  * @property {string} [baseNIEM] - A NIEM release that this resource is based on. 
  * @property {string} [uri] - A target namespace or other ID for this model package. 
  * @property {string} [changeSummary] - A summary of the changes from the previous package, if applicable. 
  * @property {string} [location] - A URL for the model package folder. 
  * @property {array} [conformanceTargets] - One or more classes of artifact to which this artifact conforms. 
  * @property {object} [more] - Any additional metadata to be captured. 
  */


