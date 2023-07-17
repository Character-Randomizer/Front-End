# Front-End
Below are notes for the author to remember for when she writes this section.

## Instructions for Dependencies
Below will allow react-scripts + fantasy-names package to work together:

After installing npm i
    - Go to webpack.config.js
      - react-scripts -> webpack -> webpack.config.js
        - Add to the return statement in the resolve object the fallback object:
  
            `return{
                ...
                resolve: {
                    modules: [...],
                    fallback: {
                        "path": require.resolve("path-browserify"),
                        "fs": false,
                    },
                    extensions: [...],
                    ...
                }
            }
            `