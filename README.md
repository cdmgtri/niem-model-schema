
# NIEM Model Schema

Although specific NIEM schema syntaxes may change based on language (XML, JSON, UML) and NDR version, the same kinds of information are captured and represented in each.  This project defines a schema for that underlying conceptual structure of the NIEM data model.

Example:

- Models have packages (e.g., releases or versions).
- Packages have a set of namespaces and artifacts.
- Namespaces have prefixes, identifiers, properties, and types.
- Properties have prefixes, names, definitions, and (usually) types.
- Types have prefixes, names, definitions, and content.
- Codes have values and definitions.

## Big Picture

Defining a common conceptual schema for NIEM will support a future tool strategy where key features and capabilities can be decoupled from specific syntaxes:

- Specialized utilities import and export specific syntaxes to and from NIEM Model JSON objects (defined by this conceptual model schema).
- Tool capabilities are based on content represented as these generic NIEM Model JSON objects, not specific syntaxes.

This modularity will work in combination with a NIEM API that provides access to both NIEM release and IEPD components.

This will create a much more robust NIEM tool environment with new or improved support for IEPDs and for additional representations like JSON and UML.

## Status

Initial fields for the `Model` and `Package` objects have been added as a proof of concept.  These objects are not complete and the fields will undergo changes.

The following objects have not yet been added:

- `Namespace`
- `Property`
- `Type`
- `Code`

## Usage

### Installation

```sh
npm install
```

### Convert

- Generate the JSON Schema version of the model schema from the corresponding YAML file.

```sh
npm run convert
```

### Test

- Run JSON validation on the model schema in the `schemas/` directory.
- Run JSON validation on example JSON instances in the `examples/` directory.

```sh
npm run test
```

### Build

Run the above steps with one command:

- Convert
- Test

```sh
npm run build
```

### Watch file changes

Generate an updated build on changes to YAML files:

```sh
npm run watch:schemas
```

Run validation on updated example JSON instances:

```sh
npm run watch:examples
```

## To Do

- [ ] Fully define the model objects
- [ ] Generate automated documentation for the model objects
