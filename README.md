# Clang Frontend

Before building this project, see [clang-slang README](https://github.com/cs4215-2023/c-interpreter) to link the language for the use.

## Getting Started

### Installation of Frontend

1. Install the current LTS version of Node.js. The current version (usually the version one greater than the current LTS) may also work, but if you encounter issues, use the current or lower LTS version. (Known working version of node: v16.16.0)
2. Clone this repository and navigate to it using "cd" in your command line or shell tool.
3. Run `yarn install` to install dependencies.
   - If you are on Ubuntu and encounter the error message: `No such file or directory: 'install'`, you might be running the incorrect "yarn" from the cmdtest testing suite instead of the JavaScript package manager of the same name. Refer to this [StackOverflow post](https://stackoverflow.com/questions/46013544/yarn-install-command-error-no-such-file-or-directory-install).
   - If you are on the new M1 or M2 Mac chips, and encounter an error while installing `canvas`, refer to [this documentation](https://github.com/Automattic/node-canvas/wiki/Installation:-Mac-OS-X#homebrew) to install the requisite dependencies first.
4. Run `yarn run start` to start the server at `localhost:8000`. **It might take a couple of minutes for the server to start.**
5. Point your browser to `http://localhost:8000` to see your local Source Academy.

In this edition, you will only see the Playground with all its tools, but no login options or homework submission features.


## Development

### Running the tests

Before pushing to Github, ensure that your code is formatted and your tests are passing. These two commands should help with that:

- `yarn run format` : formats your code
- `yarn run test`: runs the tests and prints the output

### Running clang-slang

See [Clang README](https://github.com/cs4215-2023/c-interpreter) for instructions how to run the Clang in the frontend.
