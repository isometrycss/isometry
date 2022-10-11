# TypeScript Configuration (@isometry/tsconfig)

Shared TypeScript configuration files for Node and React projects, including strict checks and preferred options.

## Installation

```
rush add --dev -p @isometry/tsconfig
```

## Usage

Create a `tsconfig.json` file in your project root directory and extend that local configuration with the `extends` keyword.

### Base configuration:

```json
{
  "extends": "@isometry/tsconfig"
}
```

### Node projects:

```json
{
  "extends": "@isometry/tsconfig/node"
}
```

### React projects:

```json
{
  "extends": "@isometry/tsconfig/react"
}
```

## License

Isometry CSS licensed under [MIT License](LICENSE).
