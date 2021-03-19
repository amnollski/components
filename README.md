
## Table of Contents

- [Code Overview](#code-overview)
- [Code Organization](#code-organization)
- [Project Setup](#setting-up-the-project-locally)

## Code Overview

This repo stores some useful components I use when starting a website. 
I followed some of the code structure of the CodeSandbox project, I really like how they set up storybook
I also used Zendesk components as a guide of sorts, as I am fairly new to UI design & Javascript

Thanks for checking this project out!
I'm happy to take suggestions, email me at andrew.m.noll@gmail.com

## Code Organization

Here's a quick overview of the files in each directory for this project

- `.storybook`: The setup files for a storybook project. Here's a helpful article on the setup:
     https://medium.com/strands-tech-corner/storybook-configuration-in-react-project-ec59869f3e7d
- `src`: Typescript source code
  -> `src/components`: Here's where the .stories.tsx and source files for each component go
  -> `src/decorators`: Where some useful storybook decorators are, like coloring divs for layout components
  -> `src/design-language`: Holds basic font sizes, color scheme indices
  -> `src/fonts`: Font .tiff files downloaded from Google ( I use .tiff so I can work offline :) ) 
  -> `src/themes`: Here resides typescript files that contain more information pertaining to each project based theme 
  -> `src/global.css`: Global styles used for storybook (I need to update to switch between .css files)
- `lib`: When built, the transpiled files are stored here
- `public`: The output files from the storybook compilation process go here

## Setting Up the project locally

To install the project you need to have `yarn` and `node`

1.  [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone
    your fork:

    ```sh
    # Clone your fork
    git clone https://github.com/<your-username>/components.git

    # Navigate to the newly cloned directory
    cd components
    ```

2.  from the root of the project: `yarn` to install all dependencies
    - make sure you have latest `yarn` version
3.  from the root of the project: 
    - `yarn start:storybook` runs storybook on port 6000, opens a new browser to view the components
