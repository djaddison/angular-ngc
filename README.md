# ngc

A utility tool for generating files for Angular2 projects.

```bash
# Example usage:
$ ng2 --help
$ ng2 --template single --name input
$ ng2 -t single -n input
$ ng2 -t multi -n input
```

```bash
Usage: ngc -n <selector> [options]

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -t, --template <type>  default: multiple [multiple, single]
    -n, --name <selector>  (required) @Component selector
    -p, --path <path>      create files in <path>
```